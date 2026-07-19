import { ContactCard } from "@/components/ui/ContactCard";
import { ContactForm } from "@/components/features/ContactForm";
import TextType from "@/components/ui/TextType";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Contact Our Printer Experts | Rex International Mumbai",
  description: "Get in touch with Rex International Mumbai for printer repair quotes, corporate AMC enquiries, bulk hardware orders, and on-site service bookings. Mon–Sat 10am–8pm.",
  alternates: { canonical: '/contact' }
};

export default async function ContactPage() {
  return (
    <main className="flex-1 bg-brand-white-pure">
      <div className="container-inner max-w-7xl mx-auto px-4 py-16 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-12 pb-8">
            <div>
              <TextType 
                as="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-brand-dark leading-[0.95] tracking-tighter mb-6"
                text="Engineer Your Uptime."
                typingSpeed={40}
                startOnVisible={true}
                loop={false}
              />
              <div className="text-lg md:text-xl text-brand-dark-muted font-light leading-relaxed">
                <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                  Whether you are requesting a bulk hardware quotation, looking for a rare dotmatrix component, or need immediate repair services, our team is ready to assist.
                </ScrollReveal>
              </div>
            </div>
            
            <div className="border-l-4 border-brand-green pl-6 py-2">
              <ContactCard />
            </div>

            <div className="pt-8 border-t border-brand-gray/30">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark-muted mb-6">Support Operations</h3>
              <div className="grid gap-6">
                <div>
                  <h4 className="text-brand-dark font-bold font-outfit text-lg">Retail & General Inquiry</h4>
                  <p className="text-sm text-brand-dark-muted mt-1">Mon-Sat: 10:00 AM - 6:30 PM</p>
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold font-outfit text-lg">Enterprise SLA Support</h4>
                  <p className="text-sm text-brand-dark-muted mt-1">Priority dispatch. Up to 24/7 Coverage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Scrolling) */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:pt-4">
            <div className="bg-brand-white p-8 md:p-12 rounded-3xl border border-brand-gray/20 shadow-sm">
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-8 tracking-tight">Direct Inquiry</h2>
              <ContactForm />
            </div>

            <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-brand-gray/20 relative">
              <div className="absolute inset-0 bg-brand-gray-light/30 z-0"></div>
              <iframe
                src="https://maps.google.com/maps?q=19.1747064,72.9548683&z=17&hl=en&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rex International Location Map"
                className="absolute inset-0 w-full h-full grayscale contrast-[1.1] opacity-90 mix-blend-multiply z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
