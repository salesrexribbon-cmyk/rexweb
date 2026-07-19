import { getAllServices } from "@/lib/data/queries";
import { ServiceCard } from "@/components/features/ServiceCard";
import { Metadata } from "next";
import TextType from "@/components/ui/TextType";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlockTextReveal from "@/components/ui/BlockTextReveal";
import Link from "next/link";
import { siteSettings } from "@/lib/data/site-settings";
import { createWhatsAppGeneralUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Expert Services | Rex International",
  description: "Professional repair, maintenance, and AMC services for all types of printers by expert technicians.",
  alternates: { canonical: '/services' }
};

const STATS = [
  { value: "45+", label: "Years of Service" },
  { value: "5hr", label: "Emergency Response" },
  { value: "100%", label: "OEM Parts" },
  { value: "All", label: "Brands Covered" },
];

const PROCESS = [
  { step: "01", title: "Diagnostics", desc: "We run a comprehensive hardware test to precisely identify the root problem of  component failure." },
  { step: "02", title: "Transparent Quote", desc: "You receive a clear, itemized price for required OEM or vetted compatible replacement parts. No surprises." },
  { step: "03", title: "Precision Repair", desc: "Certified technicians perform component level restoration and factory calibrated installation." },
  { step: "04", title: "Stress Test & Sign-off", desc: "Continuous run time testing under load before the unit is certified ready for deployment." },
];

export default async function ServicesPage() {
  const services = await getAllServices();
  const whatsappUrl = createWhatsAppGeneralUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((svc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": svc.name,
        "description": svc.shortDescription,
        "provider": { "@type": "LocalBusiness", "name": "Rex International" }
      }
    }))
  };

  return (
    <main className="flex-1 bg-brand-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-24 bg-brand-dark text-brand-white-pure border-b-4 border-brand-green">
        <div className="container-inner max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green border border-brand-green/30 px-3 py-1 rounded-full">
              Certified Technical Services
            </span>
            <TextType
              as="h1"
              className="text-3xl sm:text-4xl md:text-6xl font-bold font-outfit text-brand-white-pure leading-tight"
              text="Expert Repair & Maintenance"
              typingSpeed={40}
              startOnVisible={true}
              loop={false}
            />
            <p className="text-brand-gray-light/70 text-sm md:text-lg max-w-2xl leading-relaxed">
              Our certified technicians provide component level repair and preventative maintenance to ensure your printing infrastructure experiences zero unplanned downtime.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-green text-brand-white-pure font-bold text-sm px-5 py-3 rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Book a Repair
              </a>
              <Link href="/store" className="flex items-center gap-2 border border-brand-white-pure/20 text-brand-white-pure font-bold text-sm px-5 py-3 rounded-lg hover:border-brand-green hover:text-brand-green transition-colors">
                View Hardware Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-white-pure border-b border-brand-gray/20 py-6">
        <div className="container-inner px-4">
          <div className="grid grid-cols-4 divide-x divide-brand-gray/20">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center px-2 md:px-6">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold font-outfit text-brand-green">{value}</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-brand-dark/50 mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ───────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-brand-white">
        <div className="container-inner px-4">
          <div className="mb-8 md:mb-12">
            <TextType
              as="h2"
              className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark"
              text="All Services"
              startOnVisible={true}
              loop={false}
            />
            <p className="text-brand-dark-muted text-sm md:text-base mt-2 max-w-xl">Tap any service to inquire via WhatsApp, we respond within the hour.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {services.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── REPAIR PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-brand-dark text-brand-white-pure">
        <div className="container-inner max-w-5xl mx-auto px-4">
          <div className="mb-10 md:mb-16">
            <TextType
              as="h2"
              className="text-2xl md:text-4xl font-bold font-outfit text-brand-white-pure"
              text="The Repair Protocol"
              startOnVisible={true}
              loop={false}
            />
            <p className="text-brand-gray-light/70 text-sm md:text-base mt-2">Our 4 step process guarantees first time resolution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className="relative flex gap-4 p-5 md:p-6 bg-brand-white-pure/5 rounded-2xl border border-brand-white-pure/10 hover:border-brand-green/30 transition-colors duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-green">{step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold font-outfit text-brand-white-pure mb-1">{title}</h3>
                  <p className="text-sm text-brand-gray-light/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION BLOCK TEXT ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-brand-white">
        <div className="container-inner max-w-4xl mx-auto px-4 flex flex-col gap-4 md:gap-6">
          <BlockTextReveal blockColor="var(--color-brand-green)" delay={0} className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark leading-tight">
            We fix what others declare dead.
          </BlockTextReveal>
          <BlockTextReveal blockColor="var(--color-brand-dark)" delay={0.3} className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark leading-tight">
            Component level. Not just swap and go.
          </BlockTextReveal>
          <BlockTextReveal blockColor="var(--color-brand-gray)" delay={0.6} className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark leading-tight">
            Trusted by enterprises since 1980.
          </BlockTextReveal>
        </div>
      </section>

      {/* ─── AMC SECTION ─────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-brand-white-pure border-t border-brand-gray/20">
        <div className="container-inner max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-green">Peace of Mind</span>
              <TextType
                as="h2"
                className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark mt-2 mb-4"
                text="Annual Maintenance Contracts"
                startOnVisible={true}
                loop={false}
              />
              <div className="text-brand-dark-muted text-sm md:text-base leading-relaxed mb-6">
                <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                  Rex International takes complete ownership of your printing hardware uptime under an AMC. From banking back office laser fleets to retail dotmatrix billing stations, we cover it all.
                </ScrollReveal>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-dark text-brand-white-pure font-bold text-sm px-6 py-3 rounded-lg hover:bg-brand-green transition-colors"
              >
                Get AMC Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: "Guaranteed Response Times", desc: "SLA backed 5 hour response for critical breakdowns, anywhere in Mumbai." },
                { title: "Free Preventative Maintenance", desc: "Scheduled monthly or quarterly visits to catch issues before they become failures." },
                { title: "Priority OEM Parts Access", desc: "AMC clients get first access to rare and imported OEM components." },
                { title: "Standby Machine Provision", desc: "We loan a working unit during major repairs so your operations never stop." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-brand-white rounded-xl border border-brand-gray/20">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{title}</p>
                    <p className="text-xs text-brand-dark-muted mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
