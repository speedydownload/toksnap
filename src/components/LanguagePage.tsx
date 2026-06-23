import DownloaderBox from '@/components/DownloaderBox';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import type { Language } from '@/data/languages';

const featureIcons = [
  { icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636', color: 'from-rose-500 to-pink-500' },
  { icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', color: 'from-cyan-500 to-blue-500' },
  { icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', color: 'from-violet-500 to-purple-500' },
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: 'from-emerald-500 to-green-500' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'from-amber-500 to-yellow-500' },
  { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', color: 'from-sky-500 to-indigo-500' },
  { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', color: 'from-teal-500 to-cyan-500' },
  { icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'from-orange-500 to-red-500' },
];

const stepIcons = [
  'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
];

export default function LanguagePage({ lang }: { lang: Language }) {
  const t = lang.translations;
  return (
    <div dir={lang.dir} className="language-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: t.home, href: '/' }, { label: lang.nativeName }]} />
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold"><span className="gradient-text">{t.heroTitle}</span></h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">{t.heroDescription}</p>
            <div className="mt-8 max-w-2xl mx-auto"><DownloaderBox placeholder={t.pasteUrl} buttonText={t.download} /></div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4"><span className="gradient-text">{t.howToUse}</span></h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">{t.howToUseDesc || ''}</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: t.step1Title, desc: t.step1Desc },
              { step: '2', title: t.step2Title, desc: t.step2Desc },
              { step: '3', title: t.step3Title, desc: t.step3Desc },
            ].map((item, i) => (
              <div key={item.step} className="relative p-6 pt-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#EC4899] flex items-center justify-center text-white text-lg font-bold shadow-lg ring-4 ring-background">{item.step}</div>
                <div className="mb-4 flex justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stepIcons[i]} /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use TokSnap */}
      <section className="py-16 sm:py-20 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4"><span className="gradient-text">{t.whyUse}</span></h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-6 text-muted leading-relaxed">
            {t.whyUseContent.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Icons */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4"><span className="gradient-text">{t.features}</span></h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">{t.featuresDesc || ''}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.featuresDetailed.map((f, i) => (
              <div key={f.title} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:glow-cyan transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${featureIcons[i % featureIcons.length].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={featureIcons[i % featureIcons.length].icon} />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12"><span className="gradient-text">{t.faq}</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faqItems.map((item, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <span className="text-sm sm:text-base font-medium pr-4">{item.question}</span>
                  <svg className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Translated Footer */}
      <Footer translations={{
        brandDescription: t.footerBrandDesc,
        quickLinksTitle: t.footerQuickLinks,
        legalTitle: t.footerLegal,
        disclaimer: t.footerDisclaimer,
        quickLinks: [
          { href: '/', label: t.home },
          { href: '/mp3-downloader', label: t.mp3Downloader },
          { href: '/faq', label: t.faq },
          { href: '/blog', label: t.blog },
        ],
      }} />
    </div>
  );
}
