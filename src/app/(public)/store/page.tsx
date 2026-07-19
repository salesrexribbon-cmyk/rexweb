import { getAllProducts } from "@/lib/data/queries";
import { ProductCard } from "@/components/features/ProductCard";
import StoreClientMobile from "@/components/features/StoreClientMobile";
import TextType from "@/components/ui/TextType";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Printers & Parts Catalog | Rex International Mumbai",
  description: "Browse Rex International's hardware catalog of industrial dotmatrix, laser, and ink tank printers in Mumbai. Epson, HP, Canon, Brother, TVS. B2B pricing available.",
  alternates: { canonical: '/store' }
};

export default async function StorePage() {
  const products = await getAllProducts();

  const CATEGORY_LABELS: Record<string, string> = {
    "cat-dotmatrix": "Dotmatrix Printers",
    "cat-laser": "Laser Printers",
    "cat-inktank": "Ink Tank Printers",
  };

  const grouped = products.reduce<Record<string, typeof products>>((acc, p) => {
    const key = p.categoryId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});

  return (
    <main className="flex-1">
      {/* Hero, tight on mobile */}
      <section className="bg-brand-white pt-28 pb-10 md:pt-32 md:pb-24 border-b border-brand-gray/20">
        <div className="container-inner text-center max-w-4xl mx-auto px-4">
          <TextType
            as="h1"
            className="heading-section text-3xl md:text-5xl"
            text="Hardware & Parts Catalog"
            typingSpeed={50}
            startOnVisible={true}
            loop={false}
          />
          <div className="text-sm md:text-xl text-brand-dark-muted mt-3">
            <ScrollReveal baseOpacity={0} blurStrength={10} enableBlur={true}>
              Curated inventory of industrial dotmatrix machines, laser units, and ink tank systems.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MOBILE: horizontal scroll rows per category */}
      <section className="py-6 bg-brand-white-pure md:hidden">
        <StoreClientMobile products={products} />
      </section>

      {/* DESKTOP: regular grid grouped by category */}
      <section className="hidden md:block section-padding bg-brand-white-pure">
        <div className="container-inner flex flex-col gap-12">
          {Object.entries(grouped).map(([catId, catProducts]) => (
            <div key={catId}>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-6 border-b border-brand-gray/20 pb-2">
                {CATEGORY_LABELS[catId] ?? catId.replace("cat-", "").toUpperCase()}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise section, compact on mobile */}
      <section className="py-12 md:py-24 bg-brand-dark text-brand-white-pure">
        <div className="container-inner max-w-5xl mx-auto px-4 text-center">
          <TextType
            as="h2"
            className="text-2xl md:text-5xl font-outfit font-light mb-4 md:mb-8 text-brand-white-pure"
            text="Enterprise Procurement"
            typingSpeed={50}
            startOnVisible={true}
            loop={false}
          />
          <div className="text-sm md:text-xl text-brand-gray-light/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
              We streamline hardware supply chains for large organizations, from 50 unit warehouse deployments to hard to find legacy logic boards.
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-left">
            <div className="p-5 md:p-8 border border-brand-white-pure/10 rounded-2xl bg-brand-white-pure/5">
              <h3 className="text-base md:text-xl font-bold font-outfit mb-2 md:mb-3 text-brand-green">Volume Sourcing</h3>
              <p className="text-sm text-brand-gray-light/60">Direct OEM partnerships for high volume orders with aggressive pricing.</p>
            </div>
            <div className="p-5 md:p-8 border border-brand-white-pure/10 rounded-2xl bg-brand-white-pure/5">
              <h3 className="text-base md:text-xl font-bold font-outfit mb-2 md:mb-3 text-brand-green">Legacy Parts</h3>
              <p className="text-sm text-brand-gray-light/60">Extensive network to source out of production components for older infrastructure.</p>
            </div>
            <div className="p-5 md:p-8 border border-brand-white-pure/10 rounded-2xl bg-brand-white-pure/5">
              <h3 className="text-base md:text-xl font-bold font-outfit mb-2 md:mb-3 text-brand-green">Local Delivery</h3>
              <p className="text-sm text-brand-gray-light/60">Secure transit for fragile printing machinery across the Mumbai metropolitan area.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

