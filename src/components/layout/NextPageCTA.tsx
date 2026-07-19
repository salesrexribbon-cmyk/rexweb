'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const PAGE_FLOW = [
  { path: '/', label: 'Hardware Store', nextPath: '/store' },
  { path: '/store', label: 'Our Services', nextPath: '/services' },
  { path: '/services', label: 'About Us', nextPath: '/about' },
  { path: '/about', label: 'Read Blogs', nextPath: '/blogs' },
  { path: '/blogs', label: 'Contact Us', nextPath: '/contact' },
  { path: '/contact', label: 'Back to Home', nextPath: '/' }
];

export default function NextPageCTA() {
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname.startsWith('/admin')) return null;

  // Find the exact match or default based on base path (e.g., /services/foo -> goes to /about)
  let currentIndex = PAGE_FLOW.findIndex(p => p.path === pathname);
  
  if (currentIndex === -1) {
    // If it's a dynamic route like /services/slug or /store/slug, match the base
    const basePath = '/' + pathname.split('/')[1];
    currentIndex = PAGE_FLOW.findIndex(p => p.path === basePath);
  }

  // If still not found, don't render (e.g., 404 page)
  if (currentIndex === -1) return null;

  const nextItem = PAGE_FLOW[currentIndex];

  // For the homepage, we already have a massive FinalCTA. But we'll still show the next page block 
  // below it in a slightly distinct, sleek way so they can continue the journey to Store.
  const isDarkBg = pathname === '/contact'; // Alternate colors based on page if needed, for now keep it consistent

  return (
    <Link href={nextItem.nextPath} className="block w-full py-16 md:py-24 bg-brand-white-pure border-t border-brand-gray/20 group hover:bg-brand-gray/5 transition-colors duration-500 relative z-10 overflow-hidden">
      <div className="container-inner max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-brand-dark/40 mb-4 block">
          Next Page
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-brand-dark group-hover:text-brand-green transition-colors duration-500">
          {nextItem.label}
          <motion.span 
            className="inline-block ml-4"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </h2>
      </div>
    </Link>
  );
}
