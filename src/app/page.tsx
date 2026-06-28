import Link from 'next/link';
import { Suspense } from 'react';
import { Metadata } from 'next';
import ScrollytellHero from '@/components/features/ScrollytellHero';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { createWhatsAppGeneralUrl } from '@/lib/utils';
import { ScrollChoreography } from '@/components/ui/scroll-choreography';
import LegacyTrustSection from '@/components/features/LegacyTrustSection';
import HardwareSection from '@/components/features/HardwareSection';
import FinalCTA from '@/components/features/FinalCTA';

import HeroOverlay from '@/components/features/HeroOverlay';

export const metadata: Metadata = {
  title: 'Printer Repair & AMC Services in Mumbai | Rex International',
  description: 'Rex International — Mumbai’s most trusted printer specialist since 1980. Expert repair, corporate AMC contracts & sales of dotmatrix, laser, and ink tank printers. Mulund, Thane & Mumbai-wide service.',
  alternates: { canonical: '/' },
  keywords: ['printer repair Mumbai', 'dotmatrix printer repair Mumbai', 'printer AMC Mumbai', 'laser printer service Mumbai', 'ink tank printer Mumbai', 'Rex International']
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const choreoImages = {
  topLeft: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782654150/xjkp0hyunyvw5j1bzvxk.png",
  topRight: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782654247/xir2i0sot6mbbvp8vghe.jpg",
  bottomLeft: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782654200/s81miperhij7z71hc8ph.png",
  bottomRight: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782653824/zp4nwjwqcpcmhjp5scj2.jpg",
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/*
        ScrollytellHero:
          - Renders a full-screen <canvas> fixed to the viewport.
          - Scrubs through 186 frames as the user scrolls.
          - After the final frame, the <HeroContent> children fade in on top.
      */}
      <Suspense fallback={<div className="min-h-screen bg-brand-white" />}>
        <ScrollytellHero>
          <HeroOverlay />
        </ScrollytellHero>
      </Suspense>

      {/* Legacy/Trust Section replaces the old static badges */}
      <LegacyTrustSection />

      {/* Scroll Choreography Section */}
      <section className="relative w-full bg-brand-white z-10">
        <ScrollChoreography images={choreoImages} />
      </section>

      {/* Hardware Section */}
      <HardwareSection />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
