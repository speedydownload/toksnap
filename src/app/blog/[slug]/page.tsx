import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://toksnap.io/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.date, url: `https://toksnap.io/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'TokSnap' },
    publisher: { '@type': 'Organization', name: 'TokSnap', logo: { '@type': 'ImageObject', url: 'https://toksnap.io/img/Toksnap-Logo.webp' } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        <article className="py-12">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>{post.readTime}</span>
            </div>
          </header>
          {/* Ad slot placeholder for future use */}
          <div className="prose max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-muted [&_li]:mb-1 [&_a]:text-primary [&_a]:hover:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-muted" dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* Ad slot placeholder for future use */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all">
                  <h4 className="text-sm font-medium hover:text-primary transition-colors">{p.title}</h4>
                  <span className="text-xs text-muted mt-1 block">{p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
