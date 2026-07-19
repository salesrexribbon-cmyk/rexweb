import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/curved-menu";
import Footer from "@/components/layout/Footer";
import NextPageCTA from "@/components/layout/NextPageCTA";
import { siteSettings } from "@/lib/data/site-settings";
import { defaultMetadata, getBaseUrl } from "@/lib/seo";
import { CookieConsent } from "@/components/ui/CookieConsent";
import GlobalPreloader from "@/components/ui/GlobalPreloader";
import { PreloadProvider } from "@/lib/contexts/PreloadContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteSettings.name,
    "image": `${getBaseUrl()}/og-image.jpg`,
    "@id": getBaseUrl(),
    "url": getBaseUrl(),
    "telephone": siteSettings.phones[0],
    "email": siteSettings.email,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 8, Ground Floor, Next to Vikas Centre, Kamala Nehru Shopping Centre, Netaji Subhash Road",
      "addressLocality": "Mulund West, Mumbai",
      "postalCode": "400080",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.1747064,
      "longitude": 72.9548683
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "description": siteSettings.description,
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Thane" },
      { "@type": "City", "name": "Navi Mumbai" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printer Repair & Hardware Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dotmatrix Printers Repair & Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Laser Printers Repair & Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Printer AMC" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ink Tank Printers Repair & Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Site Emergency Repair" } }
      ]
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <PreloadProvider>
          <GlobalPreloader />
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <NextPageCTA />
          <Footer />
          <CookieConsent />
        </PreloadProvider>
      </body>
    </html>
  );
}
