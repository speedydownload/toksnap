import Image from 'next/image';
import DownloaderBox from './DownloaderBox';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#22D3EE]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#EC4899]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/img/Toksnap-Site-Icon.png"
              alt="TokSnap"
              width={64}
              height={64}
              className="rounded-2xl"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">TikTok Video Downloader</span>
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Download TikTok videos without watermark in HD quality. Save videos, extract MP3 audio, and download thumbnails instantly. Free, fast, and secure.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <DownloaderBox />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            {['No Watermark', 'HD Quality', '100% Free'].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/20 to-[#EC4899]/20 rounded-3xl blur-xl" />
            <Image
              src="/img/Tiktok-Video-Downloader-Toksnap-Banner.webp"
              alt="TikTok Video Downloader TokSnap - Download TikTok Videos Without Watermark"
              width={700}
              height={400}
              priority
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
