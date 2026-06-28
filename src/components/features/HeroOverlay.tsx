'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { createWhatsAppGeneralUrl } from '@/lib/utils';
import DrawCircleText from '@/components/ui/DrawCircleText';

export default function HeroOverlay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center text-center px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="inline-block px-5 py-1.5 rounded-full font-bold text-xs mb-8 tracking-wider uppercase border shadow-sm"
        style={{
          background: 'rgba(23,77,56,0.1)',
          color: '#174D38',
          borderColor: 'rgba(23,77,56,0.2)',
        }}
      >
        30+ Years of Industry Excellence
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 font-outfit text-brand-green"
      >
        Rex International has been{' '}
        <span className="block mt-2 text-brand-dark">
          Mumbai's backbone for printing <DrawCircleText strokeWidth={4} animationDuration={1.5}>solutions</DrawCircleText>.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto text-brand-dark-muted"
      >
        30+ years of trusted dotmatrix, laser, and ink tank printer repair,
        corporate AMC contracts, and hardware supply across Mumbai, Thane,
        and Navi Mumbai. Serving enterprises since 1994.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
        <Link
          href="/store"
          className="inline-flex items-center justify-center px-10 py-4 text-lg rounded-md font-semibold shadow-sm transition-colors w-full sm:w-auto bg-brand-green text-brand-white-pure hover:bg-brand-green-light"
        >
          Explore Hardware Catalog
        </Link>

        <WhatsAppCTA
          url={createWhatsAppGeneralUrl()}
          label="Request a Business Quote"
          variant="secondary"
          className="w-full sm:w-auto px-10 py-4 text-lg"
        />
      </motion.div>
    </motion.div>
  );
}
