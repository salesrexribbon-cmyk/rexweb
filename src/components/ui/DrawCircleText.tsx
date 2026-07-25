"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function makeCirclePath(w: number, h: number) {
  const rx = w / 2;
  const ry = h / 2;
  const cx = w / 2;
  const cy = h / 2;
  
  // Improved 2-segment hand-drawn ellipse 
  return `
    M ${cx - rx * 0.05} ${cy - ry * 0.95}
    C ${cx + rx * 1.35} ${cy - ry * 1.1},
      ${cx + rx * 1.35} ${cy + ry * 1.1},
      ${cx + rx * 0.05} ${cy + ry * 0.95}
    C ${cx - rx * 1.35} ${cy + ry * 1.1},
      ${cx - rx * 1.35} ${cy - ry * 1.1},
      ${cx - rx * 0.05} ${cy - ry * 0.95}
  `.trim();
}

export default function DrawCircleText({
  children,
  strokeColor = "var(--color-brand-green)", // Use the brand green variable directly
  strokeWidth = 3,
  animationDuration = 1.25,
}: {
  children: React.ReactNode;
  strokeColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
}) {
  const wordRef = useRef<HTMLSpanElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!wordRef.current) return;
    const measure = () => {
      const el = wordRef.current;
      if (el) {
        setDims({ w: el.offsetWidth, h: el.offsetHeight });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wordRef.current);
    return () => ro.disconnect();
  }, [children]);

  // Generous padding to prevent the circle from cutting into the text,
  // especially for long sentences or small font sizes.
  const padX = dims.w * 0.02 + 16; 
  const padY = dims.h * 0.15 + 8;
  const ovalW = dims.w + padX * 2;
  const ovalH = dims.h + padY * 2;
  const path = makeCirclePath(ovalW, ovalH);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span ref={wordRef} className="relative z-10 inline">
        {children}
      </span>
      {dims.w > 0 && (
        <svg
          width={ovalW}
          height={ovalH}
          viewBox={`0 0 ${ovalW} ${ovalH}`}
          fill="none"
          className="absolute pointer-events-none"
          style={{
            left: -padX,
            top: -padY,
            overflow: "visible",
            zIndex: 0
          }}
        >
          <motion.path
            d={path}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: animationDuration, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>
      )}
    </span>
  );
}
