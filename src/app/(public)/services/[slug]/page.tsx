import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services } from '@/lib/data/services';
import Link from 'next/link';
import { createWhatsAppGeneralUrl } from '@/lib/utils';

// Tell Next.js to pre-render these pages at build time
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.seo.title} | Rex International Mumbai`,
    description: service.seo.description,
    keywords: [service.name, 'Mumbai', 'Printer Repair', 'Rex International', 'printer service Mumbai', service.supportedBrands?.[0] ?? ''],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.seo.title} | Rex International Mumbai`,
      description: service.seo.description,
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const whatsappUrl = createWhatsAppGeneralUrl();

  // Service Structured Data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "name": `${service.name} in Mumbai`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rex International",
      "telephone": "+919323906493",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Thane" },
      { "@type": "City", "name": "Navi Mumbai" }
    ],
    "description": service.detailedDescription,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": service.startingPrice.replace(/[^0-9]/g, '')
    }
  };

  // FAQ Structured Data
  const faqJsonLd = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumb Structured Data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rexinternational.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rexinternational.vercel.app/services" },
      { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://rexinternational.vercel.app/services/${service.slug}` }
    ]
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-24 text-brand-white-pure">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto px-6">

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-brand-white-pure/40">
            <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
            <li className="text-brand-white-pure/20">/</li>
            <li><Link href="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
            <li className="text-brand-white-pure/20">/</li>
            <li className="text-brand-white-pure/70 truncate">{service.name}</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8 border-b border-brand-white-pure/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4 leading-tight text-brand-white-pure">
            {service.name} <span className="text-brand-green">in Mumbai</span>
          </h1>
          <p className="text-xl text-brand-gray-light">
            {service.shortDescription}
          </p>
        </div>

        <div className="prose prose-invert prose-brand max-w-none">

          {/* Detailed Description */}
          <h2 className="text-2xl font-outfit font-bold text-brand-green mt-8 mb-4">About This Service</h2>
          <p className="text-brand-gray-light leading-relaxed mb-8 text-base">
            {service.detailedDescription}
          </p>

          {/* Key Benefits */}
          <h2 className="text-2xl font-outfit font-bold text-brand-green mt-10 mb-4">What's Included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 not-prose">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 bg-brand-white-pure/5 p-4 rounded-lg border border-brand-white-pure/10">
                <span className="text-brand-green flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span className="text-brand-gray-light text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Supported Brands */}
          {service.supportedBrands && service.supportedBrands.length > 0 && (
            <>
              <h2 className="text-2xl font-outfit font-bold text-brand-green mt-10 mb-4">Brands We Service</h2>
              <p className="text-brand-gray-light text-sm mb-4">
                We cover all major manufacturer models. If your brand isn't listed, contact us, we almost certainly cover it.
              </p>
              <div className="flex flex-wrap gap-2 mb-10 not-prose">
                {service.supportedBrands.map((brand, i) => (
                  <span key={i} className="inline-block bg-brand-white-pure/5 border border-brand-green/20 text-brand-white-pure text-xs font-mono px-3 py-1.5 rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* CTA Block */}
          <div className="bg-brand-green/10 border border-brand-green/20 p-8 rounded-xl text-center my-10 not-prose">
            <h3 className="text-2xl font-outfit font-bold mb-2 text-brand-white-pure">Ready to Book?</h3>
            <p className="text-brand-gray-light mb-6 text-sm">Starting from <strong className="text-brand-white-pure">{service.startingPrice}</strong></p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-green text-brand-dark font-bold font-mono uppercase tracking-wider px-8 py-4 rounded hover:bg-brand-green/90 transition-colors w-full sm:w-auto text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-white-pure/10 text-brand-white-pure font-bold border border-brand-white-pure/20 px-8 py-4 rounded hover:bg-brand-white-pure hover:text-brand-dark transition-colors w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.058 23.926l6.264-1.641A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.373l-.376-.223-3.894 1.022 1.038-3.793-.245-.39A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          {service.faqs && service.faqs.length > 0 && (
            <>
              <h2 className="text-2xl font-outfit font-bold text-brand-green mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4 not-prose">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="bg-brand-white-pure/5 border border-brand-white-pure/10 rounded-xl group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-brand-white-pure list-none">
                      <span>{faq.question}</span>
                      <span className="text-brand-green flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-brand-gray-light leading-relaxed text-sm border-t border-brand-white-pure/10 pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </>
          )}

          {/* Internal linking to related pages */}
          <div className="mt-12 pt-8 border-t border-brand-white-pure/10 not-prose">
            <p className="text-xs font-mono text-brand-white-pure/30 uppercase tracking-wider mb-4">Explore Related Services</p>
            <div className="flex flex-wrap gap-3">
              {services.filter(s => s.slug !== slug).slice(0, 3).map(s => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-sm text-brand-gray-light hover:text-brand-green border border-brand-white-pure/10 hover:border-brand-green/30 px-4 py-2 rounded-lg transition-colors"
                >
                  {s.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm text-brand-gray-light hover:text-brand-green border border-brand-white-pure/10 hover:border-brand-green/30 px-4 py-2 rounded-lg transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
