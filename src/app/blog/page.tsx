import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog - TikTok Download Guides & Tips',
  description: 'Read the latest guides about downloading TikTok videos. Tips, tutorials, and updates about TikTok video downloading.',
  alternates: { canonical: 'https://toksnap.io/blog' },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-4"><span className="gradient-text">TokSnap Blog</span></h1>
        <p className="text-muted mb-12 max-w-2xl">Guides, tips, and tutorials about downloading TikTok videos without watermark.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all group">
              <time className="text-xs text-muted">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <h2 className="mt-2 text-lg font-semibold group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="mt-2 text-sm text-muted line-clamp-3">{post.description}</p>
              <span className="mt-3 inline-block text-xs text-primary font-medium">{post.readTime}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
