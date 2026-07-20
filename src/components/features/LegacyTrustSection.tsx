'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import TextType from '@/components/ui/TextType';
import ScrollReveal from '@/components/ui/ScrollReveal';

const countUp = (end: number, duration: number, setCounter: (val: number) => void) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease out expo
    const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    setCounter(Math.floor(easeOutProgress * end));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const containerVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function LegacyTrustSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    if (isInView) {
      countUp(30, 2000, setYears);
      countUp(1000, 2500, setClients);
    }
  }, [isInView]);

  return (
    <section className="bg-brand-white-pure text-brand-dark py-24 md:py-40 relative z-10" ref={ref}>
      <div className="container-inner max-w-6xl mx-auto px-6 relative">
        {/* Animated decorative accent */}
        <motion.div
          className="absolute -top-12 left-6 w-12 h-1 bg-brand-green"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
        >
          <div className="flex-1">
            <TextType
              as="h2"
              className="text-5xl md:text-7xl font-bold font-outfit leading-tight mb-6 text-brand-dark"
              text={["Four Decades of", "Unbroken Trust"]}
              typingSpeed={50}
              startOnVisible={true}
              loop={false}
            />
            <div className="text-lg md:text-xl text-brand-dark-muted max-w-xl">
              <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                Since 1980, Rex International has been the silent backbone for enterprises, ensuring high volume printing operations that never stop.
              </ScrollReveal>
            </div>
          </div>

          <motion.div variants={itemVariants} className="flex-1 grid grid-cols-2 gap-8 w-full border-t border-brand-gray/30 pt-8 md:border-none md:pt-0 relative">
            {/* Desktop vertical divider */}
            <motion.div
              className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-brand-gray/30"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            />

            <div className="md:pl-12">
              <p className="text-6xl md:text-8xl font-bold font-outfit tabular-nums text-brand-green">45+</p>
              <p className="text-brand-dark-muted mt-2 uppercase tracking-widest text-sm font-semibold">Years of Esteemed Services</p>
            </div>
            <div>
              <p className="text-6xl md:text-8xl font-bold font-outfit tabular-nums text-brand-green">{clients}+</p>
              <p className="text-brand-dark-muted mt-2 uppercase tracking-widest text-sm font-semibold">B2B & B2C Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
