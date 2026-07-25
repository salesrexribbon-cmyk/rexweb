'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroOverlay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      {/* Dynamic Island-style pill eyebrow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.4, scaleY: 0.3 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.05 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 bg-brand-dark text-brand-white-pure rounded-full px-5 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 animate-pulse" />
          The backbone for enterprise printing
        </span>
      </motion.div>

      {/* Main brand name — large, editorial */}
      <motion.h1
        variants={itemVariants}
        className="text-6xl sm:text-7xl lg:text-[9rem] font-bold tracking-tighter leading-[0.92] mb-6 font-outfit text-brand-dark"
      >
        <span className="text-brand-green">Rex</span>
        <br className="hidden sm:block" />
        International.
      </motion.h1>

      {/* Concise Subtext */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg lg:text-xl mb-12 leading-relaxed text-brand-dark-muted max-w-2xl mx-auto"
      >
        Trusted dotmatrix, laser, and ink tank systems. Reliable AMC contracts and consumables for Mumbai since 1980.
      </motion.p>

      {/* CTAs */}
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
