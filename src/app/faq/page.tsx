import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions About TikTok Video Downloader',
  description: 'Find answers to common questions about downloading TikTok videos without watermark using TokSnap.',
  alternates: { canonical: 'https://toksnap.io/faq' },
};

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4"><span className="gradient-text">Frequently Asked Questions</span></h1>
          <p className="text-muted mb-12">Everything you need to know about downloading TikTok videos with TokSnap.</p>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <h2 className="text-base font-medium pr-4">{item.question}</h2>
                  <svg className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-muted leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
