import { siteSettings } from './data/site-settings';
import { Metadata } from 'next';

// This will be replaced by process.env.NEXT_PUBLIC_SITE_URL in production
export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: siteSettings.seo.title,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.seo.description,
  keywords: siteSettings.seo.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: getBaseUrl(),
    title: siteSettings.seo.title,
    description: siteSettings.seo.description,
    siteName: siteSettings.name,
    images: [
      {
        url: '/og-image.jpg', // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: siteSettings.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteSettings.seo.title,
    description: siteSettings.seo.description,
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/v1782656902/wur9hcztdgxrocavrgep.png',
    shortcut: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/v1782656902/wur9hcztdgxrocavrgep.png',
    apple: 'https://res.cloudinary.com/dl4ohcjuk/image/upload/v1782656902/wur9hcztdgxrocavrgep.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
