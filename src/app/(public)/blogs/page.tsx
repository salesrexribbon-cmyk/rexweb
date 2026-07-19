import { Metadata } from 'next';
import Link from 'next/link';
import TextType from '@/components/ui/TextType';
import { connectDB, Blog } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Insights & Technical Blogs | Rex International',
  description: 'Expert articles, printer maintenance tips, and industry insights from the enterprise printing specialists.',
  alternates: { canonical: '/blogs' }
};

export default async function BlogsPage() {
  await connectDB();
  const blogsRaw = await Blog.find({}).sort({ publishedAt: -1 }).lean();
  
  const blogs = blogsRaw.map(b => ({
    ...b,
    _id: b._id.toString()
  }));

  return (
    <main className="flex-1 bg-brand-white pt-32 pb-12">
      <div className="container-inner max-w-5xl mx-auto px-4">
        
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end border-b border-brand-gray/30 pb-12">
          <div className="md:col-span-8 lg:col-span-9">
            <TextType
              as="h1"
              className="text-5xl sm:text-6xl lg:text-[7rem] font-bold font-outfit text-brand-dark tracking-[-0.04em] leading-[0.9]"
              text="Technical Insights"
              startOnVisible={true}
              loop={false}
            />
          </div>
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-brand-dark-muted text-base md:text-lg border-l border-brand-green pl-6 py-2">
              Expert knowledge base on enterprise printing hardware, maintenance best practices, and cost-saving strategies.
            </p>
          </div>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-brand-white-pure rounded-2xl border border-brand-gray/20">
            <p className="text-brand-dark-muted">No technical insights published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Featured First Post */}
            {blogs[0] && (
              <Link key={blogs[0]._id} href={`/blogs/${blogs[0].slug}`} className="group block mb-16 md:mb-24 relative">
                <div className="absolute -inset-8 bg-brand-gray-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 hidden md:block"></div>
                <time className="text-sm font-bold tracking-widest uppercase text-brand-green mb-6 block" suppressHydrationWarning>
                  {new Date(blogs[0].publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-brand-dark mb-6 tracking-tighter leading-[1.05] group-hover:text-brand-green transition-colors duration-300">
                  {blogs[0].title}
                </h2>
                <p className="text-xl md:text-2xl text-brand-dark-muted leading-relaxed max-w-4xl">
                  {blogs[0].excerpt}
                </p>
              </Link>
            )}

            {/* Remaining Posts List */}
            {blogs.length > 1 && (
              <div className="border-t border-brand-gray/30 pt-16">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark-muted mb-12">Previous Entries</h3>
                <div className="flex flex-col divide-y divide-brand-gray/20">
                  {blogs.slice(1).map((blog) => (
                    <Link key={blog._id} href={`/blogs/${blog.slug}`} className="group py-8 md:py-12 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 hover:bg-brand-gray-light/10 transition-colors px-4 -mx-4 rounded-xl">
                      <time className="text-sm font-bold tracking-wider uppercase text-brand-dark-muted md:w-48 shrink-0" suppressHydrationWarning>
                        {new Date(blog.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </time>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-outfit font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors tracking-tight">
                          {blog.title}
                        </h2>
                        <p className="text-brand-dark-muted leading-relaxed max-w-3xl text-lg">
                          {blog.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
