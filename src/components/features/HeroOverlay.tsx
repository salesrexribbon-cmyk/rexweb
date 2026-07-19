'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DrawCircleText from '@/components/ui/DrawCircleText';

export default function HeroOverlay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 pt-24 pb-12 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Anti-Slop: Plain text eyebrow */}
      <motion.p
        variants={itemVariants}
        className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-green mb-6"
      >
        Rex International
      </motion.p>

      {/* Hand-drawn circle restored, tighter typography */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6 font-outfit text-brand-green"
      >
        The backbone for <br className="hidden sm:block" />
        <span className="text-brand-dark">
          enterprise <DrawCircleText strokeWidth={4} animationDuration={1.5}>printing.</DrawCircleText>
        </span>
      </motion.h1>

      {/* Concise Subtext */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg lg:text-xl mb-10 leading-relaxed text-brand-dark-muted max-w-2xl mx-auto"
      >
        Trusted dotmatrix, laser, and ink tank systems. Reliable AMC contracts and consumables for Mumbai since 1980.
      </motion.p>

      {/* Anti-Slop: 1 Primary CTA + 1 Secondary Text CTA */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
        <Link
          href="/store"
          className="inline-flex items-center justify-center px-8 py-3.5 text-base rounded-md font-semibold transition-all bg-brand-green text-brand-white-pure hover:bg-brand-green-light hover:-translate-y-0.5 w-full sm:w-auto shadow-sm"
        >
          Explore hardware
        </Link>

        <Link
          href="/services"
          className="text-base font-semibold transition-colors text-brand-green hover:text-brand-green-light group inline-flex items-center justify-center gap-1 w-full sm:w-auto"
        >
          Technical services 
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
