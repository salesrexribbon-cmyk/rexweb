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
        
        <div className="mb-12">
          <TextType
            as="h1"
            className="text-4xl md:text-5xl font-bold font-outfit text-brand-dark"
            text="Technical Insights"
            startOnVisible={true}
            loop={false}
          />
          <p className="text-brand-dark-muted text-lg mt-4 max-w-2xl">
            Expert knowledge base on enterprise printing hardware, maintenance best practices, and cost-saving strategies.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-brand-white-pure rounded-2xl border border-brand-gray/20">
            <p className="text-brand-dark-muted">No technical insights published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <Link key={blog._id} href={`/blogs/${blog.slug}`} className="group block bg-brand-white-pure rounded-2xl border border-brand-gray/20 p-6 hover:border-brand-green/40 hover:shadow-xl transition-all duration-300 flex flex-col">
                <time className="text-xs font-mono text-brand-dark-muted mb-2 block" suppressHydrationWarning>{new Date(blog.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                <h2 className="text-2xl font-outfit font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors leading-tight">
                  {blog.title}
                </h2>
                <p className="text-brand-dark-muted leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-green uppercase tracking-wider">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
