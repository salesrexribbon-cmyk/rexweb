'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePreload } from '@/lib/contexts/PreloadContext';

// ─── Config ──────────────────────────────────────────────────────────────────
const SCROLL_PER_FRAME = 12;   // px of scroll travel per frame
const HERO_FADE_FRAMES = 12;   // frames over which the hero overlay fades in
// Extra scroll runway AFTER the last frame so the user can see & interact
// with the hero before the sticky container unpins. This is viewport-height
// worth of breathing room — we read the actual value after mount.
const EXTRA_RUNWAY_VH = 3.0;   // multiples of window.innerHeight — large enough to give reading time
const SCROLL_LOCK_DURATION = 1800; // ms to lock scroll when hero content becomes visible

type AnimationConfig = {
  folder: string;
  totalFrames: number;
  lastFrameExt: string;
};

const desktopConfig: AnimationConfig = {
  folder: 'animation_herosection',
  totalFrames: 186,
  lastFrameExt: 'png'
};

const mobileConfig: AnimationConfig = {
  folder: 'animation-mobileherosection',
  totalFrames: 192,
  lastFrameExt: 'jpg'
};

function getFramePath(config: AnimationConfig, n: number): string {
  const padded = String(n).padStart(5, '0');
  const ext = n === config.totalFrames ? config.lastFrameExt : 'jpg';
  return `/${config.folder}/${padded}.${ext}`;
}

interface ScrollytellHeroProps {
  /** Hero page content — rendered as an overlay after the animation ends */
  children: ReactNode;
}

export default function ScrollytellHero({ children }: ScrollytellHeroProps) {
  const { setProgress, setIsLoaded } = usePreload();
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const rafRef       = useRef<number>(0);

  // Fractional frame position (lerped for smooth scrub)
  const frameRef       = useRef<number>(0);
  // Scroll-calculated target (jumps with each scroll event)
  const targetFrameRef = useRef<number>(0);

  const [config, setConfig] = useState<AnimationConfig | null>(null);

  // Total pixel height of the scroll runway — set after mount so we know vh
  const [scrollHeight, setScrollHeight] = useState(
    desktopConfig.totalFrames * SCROLL_PER_FRAME + 900 // fallback estimate
  );

  const [allLoaded,    setAllLoaded]    = useState(false);
  const [heroOpacity,  setHeroOpacity]  = useState(0);
  const [scrollPromptOpacity, setScrollPromptOpacity] = useState(1);

  // Scroll lock state — triggered once when hero fully fades in
  const scrollLockRef    = useRef(false);  // true while locked
  const hasLockedRef     = useRef(false);  // so we only lock once
  const lockScrollPosRef = useRef(0);      // scroll position to hold at

  // 1. Detect environment on mount to prevent hydration mismatch and double-loading
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setConfig(isMobile ? mobileConfig : desktopConfig);
  }, []);

  // ── Draw one frame (object-fit: cover math) ──────────────────────────────
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const img    = imagesRef.current[idx];
    if (!canvas || !img?.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width: cw, height: ch } = canvas;
    const iw = img.naturalWidth  || (img as any).width  || 1;
    const ih = img.naturalHeight || (img as any).height || 1;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;

    // On portrait/mobile viewports the image is landscape so cover-scaling zooms
    // in heavily. Shift the vertical anchor toward the bottom (0.72 instead of
    // 0.5) so the printer — which sits in the lower half — stays visible.
    // On desktop (width ≥ 768) keep the standard center anchor.
    const yAnchor = cw < 768 ? 0.72 : 0.5;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) * yAnchor;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // ── RAF loop — lerp frameRef toward targetFrameRef ───────────────────────
  const renderLoop = () => {
    if (!config) return;
    const diff = targetFrameRef.current - frameRef.current;
    if (Math.abs(diff) > 0.25) {
      frameRef.current += diff * 0.15;
    } else {
      frameRef.current = targetFrameRef.current;
    }

    const clamped = Math.min(Math.max(frameRef.current, 0), config.totalFrames - 1);
    drawFrame(Math.round(clamped));

    // Fade out the initial scroll prompt over the first 15 frames
    setScrollPromptOpacity(Math.max(0, 1 - clamped / 15));

    // Fade in the hero overlay over the last HERO_FADE_FRAMES frames
    const fadeStart = config.totalFrames - 1 - HERO_FADE_FRAMES;
    const opacity   = Math.max(0, Math.min(1, (clamped - fadeStart) / HERO_FADE_FRAMES));
    setHeroOpacity(opacity);

    // Trigger scroll lock exactly once when overlay is fully visible
    if (opacity >= 1 && !hasLockedRef.current) {
      hasLockedRef.current  = true;
      scrollLockRef.current = true;
      lockScrollPosRef.current = window.scrollY;
      setTimeout(() => {
        scrollLockRef.current = false;
      }, SCROLL_LOCK_DURATION);
    }

    rafRef.current = requestAnimationFrame(renderLoop);
  };

  // ── Resize — always match the true viewport size ─────────────────────────
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas || !config) return;
    
    // Use clientWidth/Height so internal pixel grid perfectly matches CSS size
    canvas.width  = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    drawFrame(Math.round(frameRef.current));

    // Recalculate scroll height based on actual vh
    setScrollHeight(
      config.totalFrames * SCROLL_PER_FRAME + window.innerHeight * EXTRA_RUNWAY_VH
    );
  };

  // ── Scroll — map scroll position to target frame ──────────────────────────
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || !config) return;

    // If we're currently in a scroll-lock, snap back to the locked position
    if (scrollLockRef.current) {
      window.scrollTo({ top: lockScrollPosRef.current, behavior: 'instant' });
      return;
    }

    // scrolled = how far the user has scrolled INTO this container
    const scrolled = window.scrollY - container.offsetTop;

    // The animation zone is TOTAL_FRAMES * SCROLL_PER_FRAME pixels long.
    // After that we've entered the "hero visible runway" — clamp at last frame.
    targetFrameRef.current = Math.min(
      Math.max(scrolled / SCROLL_PER_FRAME, 0),
      config.totalFrames - 1,
    );
  };

  // ── Preload all frames ────────────────────────────────────────────────────
  useEffect(() => {
    if (!config) return;

    let count = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= config.totalFrames; i++) {
      const img = new Image();
      img.src = getFramePath(config, i);
      const onSettle = () => {
        count++;
        // If it finishes loading before minTimePassed, progress goes to 100% and stays there.
        setProgress(Math.floor((count / config.totalFrames) * 100));
        if (count === config.totalFrames) {
          setAllLoaded(true);
          setIsLoaded(true);
        }
      };
      img.onload  = onSettle;
      img.onerror = onSettle;
      images.push(img);
    }

    imagesRef.current = images;
    return () => images.forEach(img => { img.onload = null; img.onerror = null; });
  }, [config]);

  // ── Start everything once all frames are cached ───────
  const showLoader = !allLoaded;

  useEffect(() => {
    if (showLoader || !config) return;

    handleResize();           // set canvas size + scroll height
    drawFrame(0);             // show first frame immediately
    rafRef.current = requestAnimationFrame(renderLoop);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLoader, config]);

  return (
    /**
     * Outer container — its height is the scroll runway.
     * Layout:
     *   0 → TOTAL_FRAMES * SCROLL_PER_FRAME   : animation zone
     *   …  → + EXTRA_RUNWAY_VH * 100vh         : hero visible zone (canvas pinned
     *                                             to final frame, hero overlay shown)
     */
    <div
      ref={containerRef}
      style={{ height: scrollHeight }}
      className="relative"
    >
      {/* Global preloader now handles the loading screen */}

      {/**
       * Sticky viewport — stays fixed to the top of the screen while the
       * outer container's scroll runway is still "in play".
       * The canvas covers this div; the hero overlay sits on top of the canvas.
       */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Canvas — draws animation frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ display: 'block', width: '100%', height: '100%' }}
          aria-hidden="true"
        />

        {/* Scroll Prompt Indicator */}
        <div 
          className="absolute inset-x-0 bottom-[22%] sm:bottom-9 z-20 flex items-end justify-center pointer-events-none"
          style={{
            opacity: scrollPromptOpacity,
            willChange: 'opacity',
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <span 
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-brand-white-pure drop-shadow-md hidden sm:block"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              Scroll to print
            </span>
            <span 
              className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-white-pure drop-shadow-md sm:hidden"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              Scroll to print
            </span>
            {/* Professional sleek vertical line indicator (no bouncing arrows) */}
            <div className="w-[1.5px] h-12 md:h-16 bg-brand-white-pure/20 relative overflow-hidden rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
               <motion.div 
                 className="absolute top-0 left-0 w-full h-1/3 bg-brand-white-pure shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
                 animate={{ y: [0, 64] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               />
            </div>
          </div>
        </div>

        {/**
         * Hero overlay — children from page.tsx.
         * opacity is driven by the RAF loop (0 → 1 over the last HERO_FADE_FRAMES).
         * pointer-events are disabled until the overlay is substantially visible
         * so the scroll driver isn't accidentally blocked by clickable buttons.
         */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-paper"
          style={{
            opacity:       heroOpacity,
            pointerEvents: heroOpacity > 0.5 ? 'auto' : 'none',
            willChange:    'opacity',
          }}
        >
          {heroOpacity > 0 && children}
        </div>
      </div>
    </div>
  );
}
