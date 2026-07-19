'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TextType from '@/components/ui/TextType';
import ScrollReveal from '@/components/ui/ScrollReveal';

const hardwareCategories = [
  {
    title: 'Dotmatrix Systems',
    desc: 'Heavy duty continuous printing solutions for banking, logistics, and billing.',
    img: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782655340/h5b986hmow9xgzqggk8x.jpg',
  },
  {
    title: 'Laser Printers',
    desc: 'High speed, crisp monochrome and color laser arrays for enterprise networks.',
    img: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782655562/brxnjcesctslgvyqsd4j.jpg',
  },
  {
    title: 'Ink Tank Technology',
    desc: 'Cost effective, high yield monochrome as well as coloured photo and document printing for design and office use.',
    img: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782655737/eonkkw2r9xtz1w2clwon.jpg',
  },
  {
    title: 'Accessories, Peripherals & Consumables',
    desc: 'Computer, laptop, and printer accessories. OEM logic boards, tractor feeds, fuser units, and printer consumables.',
    img: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1784457690/huypxbxtxjyrrobzywqc.webp',
  }
];

export default function HardwareSection() {
  return (
    <section className="bg-brand-white text-brand-dark py-24 md:py-32 relative z-10">
      <div className="container-inner max-w-7xl mx-auto px-6">
        
        {/* Mobile View: Premium Stack */}
        <div className="block md:hidden">
          <div className="mb-12">
            <TextType 
              as="h2"
              className="text-4xl font-bold font-outfit mb-4 text-brand-green"
              text="High quality printing Hardware"
              typingSpeed={50}
              startOnVisible={true}
              loop={false}
            />
            <div className="text-brand-dark-muted">
              <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                We supply and maintain the machines that keep businesses moving.
              </ScrollReveal>
            </div>
          </div>
          
          <div className="relative pb-16">
            {hardwareCategories.map((cat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="sticky flex flex-col gap-4 bg-brand-white shadow-[0_-15px_40px_rgba(0,0,0,0.05)] rounded-t-[2.5rem] pt-8 pb-10"
                style={{ 
                  top: `calc(100px + ${i * 20}px)`, 
                  zIndex: i + 10,
                  marginTop: i === 0 ? '0' : '-20px' // Slight overlap to create the stack look
                }}
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-brand-gray-light shadow-md">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-bold font-outfit text-brand-dark mb-2">{cat.title}</h3>
                  <p className="text-brand-dark-muted leading-relaxed">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View: Sticky Side Panel */}
        <div className="hidden md:flex gap-16 relative">
          <div className="w-1/3 sticky top-32 h-fit">
            <TextType 
              as="h2"
              className="text-5xl lg:text-6xl font-bold font-outfit mb-6 leading-tight text-brand-green"
              text={["High Quality", "Printing Hardware"]}
              typingSpeed={50}
              startOnVisible={true}
              loop={false}
            />
            <div className="text-lg text-brand-dark-muted max-w-sm">
              <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                We supply and maintain the machines that keep global businesses moving. From high speed laser networks to rugged dotmatrix billing systems.
              </ScrollReveal>
            </div>
          </div>
          
          <div className="w-2/3 flex flex-col gap-32">
            {hardwareCategories.map((cat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-brand-gray-light shadow-card group">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-outfit mb-3 text-brand-dark">{cat.title}</h3>
                  <p className="text-brand-dark-muted text-lg max-w-xl">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
