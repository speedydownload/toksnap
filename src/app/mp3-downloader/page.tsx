import type { Metadata } from 'next';
import DownloaderBox from '@/components/DownloaderBox';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TikTok MP3 Downloader - Extract Audio from TikTok Videos',
  description: 'Download MP3 audio from TikTok videos for free. Extract music, sounds, and audio from any TikTok video. High quality MP3 extraction tool.',
  alternates: { canonical: 'https://toksnap.io/mp3-downloader' },
  openGraph: { title: 'TikTok MP3 Downloader', description: 'Download MP3 audio from TikTok videos for free.', url: 'https://toksnap.io/mp3-downloader', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function MP3DownloaderPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'TikTok MP3 Downloader' }]} />
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold"><span className="gradient-text">TikTok MP3 Downloader</span></h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">Extract MP3 audio from any TikTok video. Download trending sounds, music, and voiceovers in high quality. Free, fast, and no registration required.</p>
          <div className="mt-8 max-w-2xl mx-auto"><DownloaderBox placeholder="Paste TikTok URL to extract MP3" buttonText="Extract MP3" /></div>
        </div>
      </section>

      {/* Ad slot placeholder for future use */}

      {/* How to Steps */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">How to Download <span className="gradient-text">TikTok Audio as MP3</span></h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">Extract audio from any TikTok video in 3 simple steps. No app, no sign-up needed.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Copy Video Link', desc: 'Find the TikTok video with the audio you want and copy its link from the share menu or browser address bar.' },
              { step: '2', title: 'Paste URL Above', desc: 'Paste the TikTok URL in the input box above. TokSnap accepts all valid TikTok video URLs including short links.' },
              { step: '3', title: 'Download MP3', desc: 'Click Extract MP3 and download the high-quality audio file directly to your device.' },
            ].map((item) => (
              <div key={item.step} className="relative p-6 pt-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#EC4899] flex items-center justify-center text-white text-lg font-bold shadow-lg ring-4 ring-background">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Why Use TokSnap <span className="gradient-text">MP3 Downloader</span></h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>TokSnap MP3 Downloader is the easiest way to extract audio from TikTok videos. Whether it is a <strong className="text-foreground">trending song</strong>, an original sound, a viral voiceover, or a podcast clip, our tool extracts it in high-quality MP3 format ready for offline listening on any device.</p>
            <p>Our <strong className="text-foreground">TikTok to MP3 converter</strong> supports all types of TikTok content. Simply paste any TikTok video URL and get the audio file instantly. There is no need to install any software, create an account, or deal with annoying pop-up ads. The entire process happens in your browser in just a few seconds.</p>
            <p>TikTok has become one of the largest music discovery platforms in the world. Songs that go viral on TikTok regularly top the Billboard charts and streaming platforms. With TokSnap, you can <strong className="text-foreground">save TikTok audio as MP3</strong> files to build your own library of trending sounds, create custom ringtones, or use them in your own creative projects. Our tool preserves the original audio quality so your downloads sound exactly as they do in the original video.</p>
            <p>Unlike other MP3 extraction tools that compress audio or add watermarks to the sound file, TokSnap delivers <strong className="text-foreground">clean, high-quality MP3 files</strong> without any modifications. The audio bitrate matches the original TikTok source, ensuring you get the best possible listening experience. Whether the original audio is a studio-quality music track or a simple voiceover, TokSnap faithfully reproduces it.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6"><span className="gradient-text">MP3 Downloader</span> Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'High Quality MP3', desc: 'Audio extracted at the highest available bitrate from the original TikTok video.' },
              { title: 'All TikTok Audio', desc: 'Works with trending sounds, original audio, voiceovers, music tracks, and podcasts.' },
              { title: 'No Registration', desc: 'Start extracting MP3 audio immediately. No account or sign-up needed.' },
              { title: 'All Devices', desc: 'Works on iPhone, Android, PC, Mac, and tablets. No app installation required.' },
              { title: 'Fast Processing', desc: 'Audio extraction completes in seconds. No waiting in queues.' },
              { title: 'Completely Free', desc: 'No hidden fees, subscriptions, or download limits. 100% free forever.' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <div>
                  <span className="text-sm font-medium text-foreground">{f.title}</span>
                  <p className="text-xs text-muted mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">What Can You Do with <span className="gradient-text">TikTok MP3 Downloads</span></h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p><strong className="text-foreground">Music Discovery &amp; Offline Listening:</strong> TikTok is where millions of people discover new music every day. When you find a song you love on your For You page, use TokSnap to save it as an MP3. Build a playlist of your favorite TikTok discoveries and listen offline during commutes, workouts, or travel without needing a streaming subscription.</p>
            <p><strong className="text-foreground">Content Creation:</strong> If you are a content creator, having access to trending TikTok sounds is essential. Download popular audio clips as MP3 files and use them in your own video projects, podcasts, or social media posts. Always remember to credit original creators and check licensing before commercial use.</p>
            <p><strong className="text-foreground">Ringtones &amp; Notifications:</strong> Turn your favorite TikTok sounds into custom ringtones and notification tones. After downloading the MP3, simply trim it to the section you want and set it as your phone&apos;s ringtone for a personalized touch that reflects the latest trends.</p>
            <p><strong className="text-foreground">Language Learning:</strong> Many language learners use TikTok content for studying. Download audio from educational TikTok videos to practice pronunciation and listening comprehension offline. Having the MP3 file allows you to replay difficult sections as many times as needed.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">TikTok MP3 Downloader <span className="gradient-text">FAQ</span></h2>
          <div className="space-y-3">
            {[
              { q: 'What audio quality does TokSnap MP3 Downloader provide?', a: 'TokSnap extracts audio at the highest available bitrate from the original TikTok video. The quality depends on the source material, but most TikTok audio is extracted at 128kbps or higher, which provides clear and crisp playback.' },
              { q: 'Can I download audio from any TikTok video?', a: 'Yes, TokSnap can extract audio from any publicly available TikTok video. This includes videos with original sounds, trending music, voiceovers, duets, and stitched content. Private videos that require authentication cannot be processed.' },
              { q: 'Is it legal to download MP3 from TikTok?', a: 'Downloading audio for personal, non-commercial use is generally acceptable. However, you should always respect copyright and the intellectual property rights of creators and music artists. Do not redistribute or commercially use downloaded audio without proper authorization.' },
              { q: 'Does the MP3 file include the TikTok watermark audio?', a: 'No. TokSnap extracts the clean audio track without any TikTok watermark or branding. The MP3 file contains only the original audio from the video.' },
            ].map((item, i) => (
              <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-primary/5 transition-colors">
                  <span className="text-sm sm:text-base font-medium pr-4">{item.q}</span>
                  <svg className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Explore <span className="gradient-text">More</span></h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/" className="group p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">TikTok Video Downloader</h3>
              <p className="text-xs text-muted mt-1">Download TikTok videos without watermark in HD quality.</p>
            </Link>
            <Link href="/blog/tiktok-mp3-downloader-guide" className="group p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">MP3 Download Guide</h3>
              <p className="text-xs text-muted mt-1">Complete guide to extracting audio from TikTok videos.</p>
            </Link>
            <Link href="/faq" className="group p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">FAQ</h3>
              <p className="text-xs text-muted mt-1">Answers to common questions about TokSnap.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad slot placeholder for future use */}
    </div>
  );
}
