"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ScrollChoreographyProps {
  className?: string;
  images: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
  content?: {
    topLeftText: React.ReactNode;
    bottomRightText: React.ReactNode;
  };
}

export function ScrollChoreography({
  className,
  images,
  content,
}: ScrollChoreographyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    mass: 1.2,
    restDelta: 0.001,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive positions relative to center
  const xLeft = isMobile ? "-20vw" : "-24vw";
  const xRight = isMobile ? "20vw" : "24vw";
  const yTop = isMobile ? "-14vh" : "-21vh";
  const yBottom = isMobile ? "14vh" : "21vh";

  const imgWidth = isMobile ? "36vw" : "46vw";
  const imgHeight = isMobile ? "24vh" : "40vh";

  // Phase 1: 0 - 0.3 (Diagonal movement)
  // Phase 2: 0.35 - 0.65 (Stack alignment to center)
  // Phase 3: 0.7 - 0.9 (Top Right expands to full screen)

  // Top Left -> moves to Bottom Left, then to Center
  const tlX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const tlY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yBottom, yBottom, "0vh", "0vh"]);

  // Bottom Right -> moves to Top Right, then to Center
  const brX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const brY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yTop, yTop, "0vh", "0vh"]);

  // Bottom Left -> stays, then moves to Center
  const blX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const blY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yBottom, yBottom, "0vh", "0vh"]);

  // Top Right -> stays, then moves to Center, then expands
  const trX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const trY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yTop, yTop, "0vh", "0vh"]);

  // Top Right (Hero) scaling/expansion properties
  const heroWidth = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], [imgWidth, imgWidth, "100vw", "100vw"]);
  const heroHeight = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], [imgHeight, imgHeight, "100vh", "100vh"]);
  
  // Also adjust borderRadius so it becomes 0 when full screen
  const heroRadius = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["0.5rem", "0.5rem", "0rem", "0rem"]);

  // Opacity fading for images underneath the hero as it expands
  const underImagesOpacity = useTransform(smoothProgress, [0.75, 0.85], [1, 0]);

  // Text content opacity for the empty spots
  // Fades in as TL/BR leave (0.1 -> 0.3), stays visible, then fades out as Hero expands (0.65 -> 0.75)
  const textOpacity = useTransform(smoothProgress, [0.1, 0.3, 0.65, 0.75], [0, 1, 1, 0]);

  const baseImageClasses =
    "absolute left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-muted shadow-2xl will-change-transform rounded-lg";
    
  const textClasses = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-6 text-center will-change-transform";

  return (
    <div ref={containerRef} className={cn("relative h-[300vh] w-full", className)}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-white">
        <div className="absolute inset-0 flex items-center justify-center">

          {/* Top Left Text Content (appears when Top Left Image moves) */}
          <motion.div
            style={{ x: xLeft, y: yTop, opacity: textOpacity, width: imgWidth, height: imgHeight }}
            className={cn(textClasses, "z-0")}
          >
            <div className="text-brand-dark max-w-sm">
              {content?.topLeftText || (
                <>
                  <h3 className="text-2xl font-bold mb-2 font-outfit text-brand-green">Global Reach</h3>
                  <p className="text-sm text-brand-dark-muted">Connecting enterprises worldwide with reliable industrial printing hardware.</p>
                </>
              )}
            </div>
          </motion.div>

          {/* Bottom Right Text Content (appears when Bottom Right Image moves) */}
          <motion.div
            style={{ x: xRight, y: yBottom, opacity: textOpacity, width: imgWidth, height: imgHeight }}
            className={cn(textClasses, "z-0")}
          >
            <div className="text-brand-dark max-w-sm">
              {content?.bottomRightText || (
                <>
                  <h3 className="text-2xl font-bold mb-2 font-outfit text-brand-green">Quality Assured</h3>
                  <p className="text-sm text-brand-dark-muted">Rigorous testing ensures every consumable meets exact OEM standards.</p>
                </>
              )}
            </div>
          </motion.div>

          {/* Top Left Image */}
          <motion.div
            style={{ x: tlX, y: tlY, opacity: underImagesOpacity, width: imgWidth, height: imgHeight }}
            className={cn(baseImageClasses, "z-10")}
          >
            <img src={images.topLeft} alt="Top Left" className="h-full w-full object-cover" />
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            style={{ x: brX, y: brY, opacity: underImagesOpacity, width: imgWidth, height: imgHeight }}
            className={cn(baseImageClasses, "z-20")}
          >
            <img src={images.bottomRight} alt="Bottom Right" className="h-full w-full object-cover" />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            style={{ x: blX, y: blY, opacity: underImagesOpacity, width: imgWidth, height: imgHeight }}
            className={cn(baseImageClasses, "z-30")}
          >
            <img src={images.bottomLeft} alt="Bottom Left" className="h-full w-full object-cover" />
          </motion.div>

          {/* Top Right Image (Hero - expands at the end) */}
          <motion.div
            style={{
              x: trX,
              y: trY,
              width: heroWidth,
              height: heroHeight,
              borderRadius: heroRadius
            }}
            className={cn(baseImageClasses, "z-40 origin-center bg-black/5 rounded-none")}
          >
            <img 
              src={images.topRight} 
              alt="Top Right (Hero)" 
              className={cn("h-full w-full object-cover", !isMobile && "object-[center_70%]")} 
            />
            
            {/* Optional: Add content that fades in on the final full-screen image */}
            <motion.div 
              style={{ opacity: useTransform(smoothProgress, [0.85, 1], [0, 1]) }}
              className="absolute inset-0 bg-brand-dark/60 flex flex-col items-center justify-center p-8 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit">The Rex Advantage</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Uncompromising quality for Business related operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
