import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import { faqItems } from '@/data/faq';
import { blogPosts } from '@/data/blog';

export default function HomePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <HeroSection />

      {/* Social Proof */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">10M+</div>
              <p className="mt-1 text-sm text-muted">Downloads</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">195+</div>
              <p className="mt-1 text-sm text-muted">Countries</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">10</div>
              <p className="mt-1 text-sm text-muted">Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 sm:py-20" id="how-to-use">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How to Use <span className="gradient-text">TokSnap</span>
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Download TikTok videos without watermark in just 3 simple steps. No registration, no app installation required.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Copy TikTok Link', desc: 'Open the TikTok app or website and find the video you want to download. Tap the Share button (the arrow icon on the right side) and select "Copy Link." On desktop, you can simply copy the URL from your browser\'s address bar. The link will be saved to your clipboard automatically.', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
              { step: '2', title: 'Paste URL', desc: 'Come back to TokSnap.io and paste the copied TikTok video URL into the download box at the top of the page. You can paste by pressing Ctrl+V on desktop or long-pressing the input field on mobile devices. TokSnap accepts all valid TikTok video URLs including short links.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { step: '3', title: 'Download', desc: 'Click the Download button and wait a few seconds for TokSnap to process the video. You will then see download options including HD video without watermark, MP3 audio extraction, and thumbnail download. Select your preferred format and the file will save directly to your device.', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
            ].map((item) => (
              <div key={item.step} className="relative p-6 pt-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#EC4899] flex items-center justify-center text-white text-lg font-bold shadow-lg ring-4 ring-background">{item.step}</div>
                <div className="mb-4 flex justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use TokSnap - Expanded SEO Content */}
      <section className="py-16 sm:py-20 bg-card/50" id="why-toksnap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Why Use <span className="gradient-text">TokSnap</span></h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-6 text-muted leading-relaxed">
            <p>TokSnap is the most reliable and fastest <strong className="text-foreground">TikTok video downloader</strong> available online. Whether you want to <strong className="text-foreground">download TikTok videos without watermark</strong>, extract MP3 audio from trending sounds, or save slideshow images, TokSnap handles it all seamlessly. Our tool has been trusted by millions of users worldwide since its launch, processing over 10 million downloads across 195 countries.</p>

            <p>Unlike other TikTok downloaders that are cluttered with pop-up ads, require app installations, or limit your downloads behind a paywall, TokSnap works directly in your browser with a clean, distraction-free interface. Our tool is designed to be <strong className="text-foreground">fast, secure, and completely free</strong>. There are no download limits, no registration requirements, and no hidden fees. You can download as many videos as you need, whenever you need them.</p>

            <p>TokSnap supports all types of TikTok content including regular videos, photo slideshows, image carousels, stories, and reels. The downloaded videos maintain their original HD quality while the TikTok watermark is cleanly removed. Whether the original video was uploaded in 720p or 1080p Full HD, TokSnap preserves the resolution so you receive the best possible quality.</p>

            <p>Our <strong className="text-foreground">TikTok MP3 downloader</strong> feature allows you to extract audio from any TikTok video. Whether it is a trending song, an original sound, a voiceover, or a podcast clip, you can save it as a high-quality MP3 file for offline listening. This makes TokSnap ideal for music discovery, creating ringtones, or building a personal audio library from TikTok content.</p>

            <p>Privacy and security are core priorities at TokSnap. We do not store any of your personal data, downloaded videos, or browsing history. Every download is processed in real-time through our secure servers, and no files are retained after your session ends. We use encrypted connections to protect your data in transit, ensuring a safe experience every time you use our service.</p>

            <p>TokSnap works on every device and operating system. Whether you are on an iPhone using Safari, an Android phone using Chrome, a Windows PC, a Mac, or a Linux machine, TokSnap delivers the same fast, reliable experience. There is no need to install a desktop application, browser extension, or mobile app. Just open your browser, visit TokSnap.io, paste a link, and download. It is that simple.</p>

            <p>For content creators, social media managers, and digital marketers, TokSnap provides a professional-grade tool for saving reference content, archiving campaigns, and repurposing videos across platforms. Our batch-friendly design lets you quickly download multiple videos in succession, making it easy to build a content library. Combined with thumbnail downloads and MP3 extraction, TokSnap is a complete toolkit for anyone who works with TikTok content regularly.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4"><span className="gradient-text">Features</span></h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">Everything you need to download TikTok videos, all in one powerful tool.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'No Watermark', desc: 'Download TikTok videos completely free of watermarks. Get clean, pristine videos ready for sharing on any platform or saving to your personal collection without any visual distractions.', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636', color: 'from-rose-500 to-pink-500' },
              { title: 'HD Quality', desc: 'Get the highest resolution available, up to Full HD 1080p. TokSnap never compresses your downloads, ensuring the video quality matches the original upload from the creator.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', color: 'from-cyan-500 to-blue-500' },
              { title: 'MP3 Support', desc: 'Extract audio from any TikTok video and save it as a high-quality MP3 file. Perfect for saving trending sounds, music tracks, voiceovers, and audio clips for offline listening.', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', color: 'from-violet-500 to-purple-500' },
              { title: 'Unlimited Downloads', desc: 'No daily limits, no per-download fees, no restrictions whatsoever. Download as many TikTok videos as you want, completely free of charge, with no account required.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', color: 'from-emerald-500 to-green-500' },
              { title: 'Lightning Fast', desc: 'Our optimized servers process your downloads in just seconds. No waiting in queues, no slow processing times. Paste a link, click download, and your file is ready almost instantly.', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'from-amber-500 to-yellow-500' },
              { title: 'Secure & Private', desc: 'Your privacy matters. We never store your personal data, downloaded videos, or browsing history. All connections are encrypted and files are processed in real-time without retention.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', color: 'from-sky-500 to-indigo-500' },
              { title: 'All Devices', desc: 'Works perfectly on iPhone, Android, iPad, Windows PC, Mac, and Linux. No app installation needed. Just open your browser and start downloading from any device you prefer.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', color: 'from-teal-500 to-cyan-500' },
              { title: 'All Content Types', desc: 'Videos, slideshows, photo carousels, stories, and reels. TokSnap supports every type of TikTok content, including image posts with multiple photos and background audio.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'from-orange-500 to-red-500' },
            ].map((f) => (
              <div key={f.title} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/30 hover:glow-cyan transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-card/50" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <h3 className="text-sm sm:text-base font-medium pr-4">{item.question}</h3>
                  <svg className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 sm:py-20" id="blog">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Latest from Our <span className="gradient-text">Blog</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all group">
                <time className="text-xs text-muted">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <h3 className="mt-2 font-semibold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{post.description}</p>
                <span className="mt-3 inline-block text-xs text-primary font-medium">{post.readTime}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-primary/30 rounded-xl hover:bg-primary/10 transition-colors">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Explore <span className="gradient-text">TokSnap</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { href: '/mp3-downloader', label: 'TikTok MP3 Downloader' },
              { href: '/faq', label: 'FAQ' },
              { href: '/blog', label: 'Blog & Guides' },
              { href: '/about', label: 'About TokSnap' },
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/contact', label: 'Contact Us' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-sm font-medium hover:text-primary">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot placeholder for future use */}
    </>
  );
}
