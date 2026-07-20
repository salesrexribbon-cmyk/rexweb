import { getAllProducts } from "@/lib/data/queries";
import { ProductCard } from "@/components/features/ProductCard";
import StoreClientMobile from "@/components/features/StoreClientMobile";
import TextType from "@/components/ui/TextType";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Printers & Parts Catalog | Rex International Mumbai",
  description: "Browse Rex International's hardware catalog of industrial dotmatrix, laser, and ink tank printers in Mumbai. Epson, HP, Canon, Brother, TVS. B2B & B2C pricing available.",
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
      <section className="bg-brand-white pt-24 pb-12 md:pt-32 md:pb-24 border-b border-brand-gray/20">
        <div className="container-inner max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 lg:col-span-9">
            <TextType
              as="h1"
              className="text-5xl sm:text-6xl lg:text-[6rem] font-bold text-brand-dark leading-[0.9] tracking-[-0.04em] font-outfit mb-6"
              text="Hardware Catalog"
              typingSpeed={40}
              startOnVisible={true}
              loop={false}
            />
          </div>
          <div className="md:col-span-4 lg:col-span-3 pb-2">
            <div className="text-base md:text-lg text-brand-dark-muted border-l border-brand-green pl-6 py-2">
              <ScrollReveal baseOpacity={0} blurStrength={10} enableBlur={true}>
                Curated inventory of industrial dotmatrix machines, laser units, and ink tank systems.
              </ScrollReveal>
            </div>
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

      <section className="py-16 md:py-32 bg-brand-dark text-brand-white-pure">
        <div className="container-inner max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 mb-16 md:mb-24">
            <div className="md:col-span-6 lg:col-span-8">
              <TextType
                as="h2"
                className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter leading-none text-brand-white-pure"
                text="Enterprise Procurement"
                typingSpeed={40}
                startOnVisible={true}
                loop={false}
              />
            </div>
            <div className="md:col-span-6 lg:col-span-4 flex items-end">
              <div className="text-base md:text-lg text-brand-gray-light/70 leading-relaxed">
                <ScrollReveal baseOpacity={0} blurStrength={5} enableBlur={true}>
                  We streamline hardware supply chains for large organizations, from 50 unit warehouse deployments to hard to find legacy logic boards.
                </ScrollReveal>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-brand-white-pure/10 p-[1px]">
            <div className="md:col-span-7 bg-brand-dark p-8 md:p-16 flex flex-col justify-end min-h-[350px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-brand-green tracking-tight">Volume Sourcing</h3>
                <p className="text-lg md:text-xl text-brand-gray-light/60 max-w-lg leading-relaxed">Direct OEM partnerships for high volume orders with aggressive pricing, cutting out intermediaries to maximize your IT budget.</p>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-1">
              <div className="bg-brand-dark p-8 md:p-10 flex-1 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-white-pure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-outfit mb-3 text-brand-white-pure tracking-tight">Legacy Parts</h3>
                  <p className="text-brand-gray-light/60 leading-relaxed">Extensive network to source out of production components for older infrastructure.</p>
                </div>
              </div>
              <div className="bg-brand-dark p-8 md:p-10 flex-1 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-white-pure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-outfit mb-3 text-brand-white-pure tracking-tight">Local Delivery</h3>
                  <p className="text-brand-gray-light/60 leading-relaxed">Secure transit for fragile printing machinery across the Mumbai metropolitan area.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

