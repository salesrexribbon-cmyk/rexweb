import { getSiteSettings } from "@/lib/data/queries";
import { Metadata } from "next";
import TextType from "@/components/ui/TextType";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlockTextReveal from "@/components/ui/BlockTextReveal";
import HorizontalScrollGallery from "@/components/ui/HorizontalScrollGallery";
import { StaggerCards } from "@/components/ui/StaggerCards";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: `Corporate Profile | ${settings.name} Mumbai`,
    description: `${settings.name}, Mumbai's trusted wholesale printer supplier and corporate printer AMC provider since 1980. 45+ years of industry excellence in dotmatrix, laser & ink tank systems.`,
    alternates: { canonical: '/about' }
  };
}

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <main className="flex-1 bg-brand-white">
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 border-b border-brand-gray/20 bg-brand-white-pure">
        <div className="container-inner text-center max-w-4xl mx-auto">
          <TextType
            as="h1"
            className="heading-section text-4xl md:text-5xl"
            text="Corporate Profile"
            typingSpeed={50}
            startOnVisible={true}
            loop={false}
          />
          <div className="text-lg md:text-xl text-brand-dark-muted mt-4">
            <ScrollReveal baseOpacity={0} blurStrength={10} enableBlur={true}>
              Four decades of trust, hardware excellence, and unmatched technical service in the printing industry.
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-inner">
          <div className="card-base p-8 md:p-16 max-w-5xl mx-auto shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12 border-b border-brand-gray/20 pb-12">
              <div>
                <TextType
                  as="h2"
                  className="text-3xl font-bold text-brand-green mb-6 font-outfit"
                  text="Our Foundation"
                  startOnVisible={true}
                  loop={false}
                />
                <p className="leading-relaxed mb-6 text-brand-dark-muted text-lg">
                  Founded by <strong className="text-brand-dark">{settings.founders.join(" and ")}</strong>, {settings.name} has operated as a foundational pillar in the regional IT hardware supply chain for over <strong className="text-brand-dark">{settings.experienceYears} years</strong>. As a <strong className="text-brand-dark">wholesale printer supplier in Mumbai</strong> and a leading <strong className="text-brand-dark">corporate printer AMC provider</strong>, we serve businesses ranging from single-outlet retail shops to large enterprise fleets across Maharashtra.
                </p>
                <div className="leading-relaxed text-brand-dark-muted text-lg">
                  <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                    We began our journey in 1980 by manufacturing high-quality ribbons for dotmatrix and heavy-duty printers. What started as a specialized manufacturing venture has since evolved into a comprehensive B2B and B2C enterprise. Even today, we remain one of the biggest pioneers in this field, continuing our legacy as a foundational pillar for high-reliability printing infrastructure.
                  </ScrollReveal>
                </div>
              </div>
              <div className="bg-brand-green/5 p-8 rounded-xl border border-brand-green/10">
                <TextType
                  as="h3"
                  className="font-bold text-brand-dark text-xl mb-4 font-outfit"
                  text="Core Specializations"
                  startOnVisible={true}
                  loop={false}
                />
                <ul className="space-y-3 text-brand-dark-muted font-medium">
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    Dotmatrix Printers & Ribbon Gears
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    Laser Systems & Toner Cartridges
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    High Volume Ink Tank Hardware
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    Internal Hardware Peripherals
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    Component-Level Repair Services
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-brand-dark-muted">
              <TextType
                as="h2"
                className="text-2xl font-bold text-brand-dark mb-4 font-outfit"
                text="Our Commitment to Quality"
                startOnVisible={true}
                loop={false}
              />
              <div className="leading-relaxed mb-8">
                <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                  At Rex International, we do not simply sell boxes; we engineer uptime. We understand that whether you are operating a local retail outlet relying on a dotmatrix bill printer, or a corporate back-office heavily utilizing laser systems, hardware failure is not an option. Our sourcing guarantees premium OEM and highly vetted compatible parts.
                </ScrollReveal>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-brand-gray/20">
                <div className="text-center p-6 bg-brand-white rounded-xl border border-brand-gray/20">
                  <span className="block text-5xl font-bold text-brand-green mb-3 font-outfit">{settings.experienceYears}+</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Years Established</span>
                </div>
                <div className="text-center p-6 bg-brand-white rounded-xl border border-brand-gray/20">
                  <span className="block text-5xl font-bold text-brand-green mb-3 font-outfit">B2B</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Enterprise Ready</span>
                </div>
                <div className="text-center p-6 bg-brand-white rounded-xl border border-brand-gray/20">
                  <span className="block text-5xl font-bold text-brand-green mb-3 font-outfit">OEM</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-dark text-brand-white-pure">
        <div className="container-inner max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <TextType
              as="h2"
              className="text-3xl md:text-5xl font-outfit font-light mb-6 text-brand-white-pure"
              text="Global Sourcing Network"
              startOnVisible={true}
              loop={false}
            />
            <div className="text-brand-gray-light/80 text-lg">
              <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                Hardware reliability starts at the component level. Over the past 45 years, we have built a robust international supply chain that bypasses standard retail limitations.
              </ScrollReveal>
            </div>
          </div>
          <div className="mt-8">
            <StaggerCards
              items={[
                {
                  title: "Direct OEM Access",
                  content: "Sourcing directly from original equipment importers in Taiwan, Japan, and mainland China to ensure 100% authentic logic boards, fusers, and printheads.",
                  imgSrc: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=200"
                },
                {
                  title: "Quality Vetted",
                  content: "Every batch of imported components undergoes strict quality control and compatibility testing before entering our domestic inventory.",
                  imgSrc: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=200"
                },
                {
                  title: "Inventory Depth",
                  content: "Maintaining a vast local inventory in Mumbai ensures that we can dispatch critical replacement parts within hours, not weeks.",
                  imgSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* NEW MISSION SECTION USING BLOCK TEXT REVEAL */}
      <section className="py-24 bg-brand-white">
        <div className="container-inner max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            <BlockTextReveal
              blockColor="var(--color-brand-green)"
              delay={0}
              className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark max-w-3xl leading-tight"
            >
              We believe in hardware that never quits.
            </BlockTextReveal>
            <BlockTextReveal
              blockColor="var(--color-brand-dark)"
              delay={0.3}
              className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark max-w-3xl leading-tight"
            >
              In logistics that operate 24/7 without fail.
            </BlockTextReveal>
            <BlockTextReveal
              blockColor="var(--color-brand-gray)"
              delay={0.6}
              className="text-2xl md:text-4xl font-bold font-outfit text-brand-dark max-w-3xl leading-tight"
            >
              In a supply chain backed by 45 years of trust.
            </BlockTextReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-light/30">
        <div className="container-inner max-w-4xl mx-auto text-center">
          <TextType
            as="h2"
            className="text-3xl font-bold font-outfit text-brand-dark mb-6"
            text="The Rex Advantage"
            startOnVisible={true}
            loop={false}
          />
          <div className="text-brand-dark-muted text-lg mb-12">
            <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
              In an era of disposable consumer electronics, we specialize in maximal durability. We serve clients who cannot afford a single misprinted invoice or a delayed logistics label. When you partner with Rex International, you are securing an IT backbone that will outlast industry standards.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL GALLERY FOR INFRASTRUCTURE/FEATURE CARDS */}
      <HorizontalScrollGallery
        heading="Our Capabilities"
        cards={[
          { id: 1, title: "Corporate AMC Contracts", subtitle: "Comprehensive fleet maintenance for enterprise networks", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" },
          { id: 2, title: "Component-Level Repair", subtitle: "Advanced logic board and printhead diagnostics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" },
          { id: 3, title: "OEM Parts Sourcing", subtitle: "Authentic fusers, tractors, and consumables in stock", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" },
          { id: 4, title: "On-Site Deployment", subtitle: "Rapid-response technician network across Mumbai", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000" },
          { id: 5, title: "Legacy Hardware Support", subtitle: "Extending the lifespan of critical billing systems", image: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782654150/xjkp0hyunyvw5j1bzvxk.png" }
        ]}
      />
    </main>
  );
}
