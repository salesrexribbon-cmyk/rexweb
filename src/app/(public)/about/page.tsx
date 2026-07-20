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
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 border-b border-brand-gray/20 bg-brand-white-pure">
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

      <section className="section-padding bg-brand-white-pure">
        <div className="container-inner max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
            <div className="md:col-span-5 md:sticky md:top-32 pb-8">
              <TextType
                as="h2"
                className="text-4xl md:text-6xl font-bold font-outfit text-brand-dark mb-6 tracking-tighter leading-none"
                text="Our Foundation"
                startOnVisible={true}
                loop={false}
              />
              <div className="h-1 w-24 bg-brand-green mb-8"></div>
              <p className="text-xl md:text-2xl text-brand-dark-muted leading-relaxed font-outfit font-light">
                Engineering uptime for Mumbai's industrial sector since 1980.
              </p>
            </div>
            
            <div className="md:col-span-7 pt-4 md:pt-0 pb-16">
              <div className="prose prose-lg max-w-none text-brand-dark-muted prose-p:leading-relaxed prose-strong:text-brand-dark mb-16">
                <p>
                  <strong>Hansraj Lalani</strong> laid the bedrock of Rex International in 1980. Today, <strong>Virat Lalani</strong> carries the torch, steering the legacy forward. As a <strong>wholesale printer supplier</strong> and <strong>corporate printer AMC provider</strong> in Mumbai, we serve businesses ranging from local shops to large enterprise networks across Maharashtra.
                </p>
                <ScrollReveal as="p" baseOpacity={0} blurStrength={5} enableBlur={true}>
                  We began by manufacturing ribbon cassettes along with indigenous and high quality ribbon inks for dotmatrix printers. We still rely on that deep technical expertise today. Whether you need a single replacement part or complete fleet maintenance, we have the inventory and technicians to keep your operations running.
                </ScrollReveal>
                <ScrollReveal as="p" baseOpacity={0} blurStrength={5} enableBlur={true}>
                  We do not just sell hardware, We make sure it keeps running. When a logistics label printer or back office laser system goes down, work stops. That is why we stock premium OEM and tested compatible parts locally, so our technicians can fix hardware failures immediately.
                </ScrollReveal>
              </div>

              <div className="bg-brand-gray-light/10 p-8 md:p-10 rounded-2xl border border-brand-gray/20">
                <h3 className="font-bold text-brand-dark text-xl md:text-2xl mb-6 font-outfit tracking-tight">Core Specializations</h3>
                <ul className="space-y-4 text-brand-dark-muted font-medium">
                  <li className="flex items-start gap-4">
                    <span className="text-brand-green flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span className="text-lg">Dotmatrix Printers & Ribbon Gears</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-green flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span className="text-lg">Laser Systems & Toner Cartridges</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-green flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span className="text-lg">High Volume Ink Tank Hardware</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-green flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span className="text-lg">Internal Hardware Peripherals</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-green flex-shrink-0 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    <span className="text-lg">Component-Level Repair Services</span>
                  </li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 pt-16 mt-16 border-t border-brand-gray/20 divide-y sm:divide-y-0 sm:divide-x divide-brand-gray/30">
                <div className="py-6 sm:py-0 sm:pr-8">
                  <span className="block text-5xl md:text-6xl font-bold text-brand-dark mb-2 font-outfit tracking-tighter">{settings.experienceYears}+</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark-muted">Years of Esteemed Services</span>
                </div>
                <div className="py-6 sm:py-0 sm:px-8">
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-2 font-outfit tracking-tighter">B2B & B2C</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark-muted">Enterprise Ready</span>
                </div>
                <div className="py-6 sm:py-0 sm:pl-8">
                  <span className="block text-5xl md:text-6xl font-bold text-brand-dark mb-2 font-outfit tracking-tighter">OEM</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark-muted">Quality Assured</span>
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
                Over the past 45 years, we built a supply chain that bypasses slow retail channels. If your business needs a specific printhead or fuser unit today, we likely already have it in stock.
              </ScrollReveal>
            </div>
          </div>
          <div className="mt-8">
            <StaggerCards
              items={[
                {
                  title: "Direct OEM Access",
                  content: "We source logic boards, fusers, and printheads directly from importers in Taiwan, Japan, and mainland China to guarantee authenticity.",
                  imgSrc: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=200"
                },
                {
                  title: "Quality Vetted",
                  content: "Every imported component is tested for compatibility and performance before it ever reaches our domestic inventory.",
                  imgSrc: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=200"
                },
                {
                  title: "Inventory Depth",
                  content: "Our Mumbai warehouse holds enough spare parts to dispatch technicians for critical repairs within hours, not weeks.",
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
              In an era of disposable electronics, we focus on durability. We work with clients who cannot afford a single misprinted invoice or delayed logistics label. Partnering with us means securing an IT system built to last.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL GALLERY FOR INFRASTRUCTURE/FEATURE CARDS */}
      <HorizontalScrollGallery
        heading="Our Capabilities"
        cards={[
          { id: 1, title: "Corporate AMC Contracts", subtitle: "Comprehensive fleet maintenance for enterprise networks", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" },
          { id: 2, title: "Component-Level Repair", subtitle: "Advanced logic board and printhead diagnostics", image: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1784483134/cazxcydr6mbzwpm3njoa.jpg" },
          { id: 3, title: "OEM Parts Sourcing", subtitle: "Authentic fusers, tractors, and consumables in stock", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" },
          { id: 4, title: "On-Site Deployment", subtitle: "Rapid-response technician network across Mumbai", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000" },
          { id: 5, title: "Legacy Hardware Support", subtitle: "Extending the lifespan of critical billing systems", image: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782654150/xjkp0hyunyvw5j1bzvxk.png" }
        ]}
      />
    </main>
  );
}
