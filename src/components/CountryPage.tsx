import Link from 'next/link';
import DownloaderBox from '@/components/DownloaderBox';
import Breadcrumbs from '@/components/Breadcrumbs';
import { faqItems } from '@/data/faq';

interface CountryPageProps {
  country: string;
  countryCode: string;
  flag: string;
  h1: string;
  description: string;
}

export default function CountryPage({ country, flag, h1, description }: CountryPageProps) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: `TikTok Downloader ${country}` }]} />
      </div>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-4 block">{flag}</span>
            <h1 className="text-4xl sm:text-5xl font-bold"><span className="gradient-text">{h1}</span></h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">{description}</p>
            <div className="mt-8 max-w-2xl mx-auto"><DownloaderBox /></div>
          </div>
        </div>
      </section>

      {/* Ad slot placeholder for future use */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">How to Download TikTok Videos in <span className="gradient-text">{country}</span></h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>TokSnap is the best <strong className="text-foreground">TikTok video downloader for {country}</strong>. Our tool allows users in {country} to download TikTok videos without watermark in HD quality, completely free of charge. Whether you are looking to save a viral dance challenge, a cooking tutorial, or a comedy skit trending in {country}, TokSnap makes it effortless.</p>
              <p>Whether you are using an iPhone, Android phone, or computer in {country}, TokSnap works perfectly in any modern browser. Simply copy the TikTok video link from the app, paste it into the download box above, and your video is ready within seconds. There is no need to install any app or create an account.</p>
              <p>TokSnap supports all types of TikTok content popular in {country}, including regular videos, photo slideshows, carousels, and trending audio. You can also extract MP3 audio from any TikTok video to save your favorite songs and sounds for offline listening.</p>
              <p>Millions of users in {country} trust TokSnap as their go-to TikTok downloader because of its reliability, speed, and commitment to providing watermark-free downloads in the highest available quality. Our servers are optimized for fast processing, so you never have to wait long for your downloads.</p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold pt-8">Features Available in <span className="gradient-text">{country}</span></h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Download without watermark', 'HD & Full HD quality', 'MP3 audio extraction', 'Photo slideshow download', 'Thumbnail download', 'Works on all devices', 'No registration needed', 'Unlimited free downloads'].map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl">
                  <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold pt-8">FAQ - TikTok Downloader <span className="gradient-text">{country}</span></h2>
            <div className="space-y-3">
              {faqItems.slice(0, 5).map((item, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-primary/5 transition-colors">
                    <span className="text-sm font-medium pr-4">{item.question}</span>
                    <svg className="w-4 h-4 text-muted shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted">{item.answer}</div>
                </details>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap gap-3">
              <Link href="/" className="text-sm text-primary hover:underline">TikTok Video Downloader</Link>
              <Link href="/mp3-downloader" className="text-sm text-primary hover:underline">TikTok MP3 Downloader</Link>
              <Link href="/blog" className="text-sm text-primary hover:underline">Blog & Guides</Link>
              <Link href="/faq" className="text-sm text-primary hover:underline">FAQ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad slot placeholder for future use */}
    </>
  );
}
