import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Philippines - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in the Philippines. Free HD TikTok downloader with MP3 extraction for Filipino users.',
  alternates: { canonical: 'https://toksnap.io/ph' },
  openGraph: { title: 'TikTok Video Downloader Philippines', description: 'Download TikTok videos without watermark in the Philippines.', url: 'https://toksnap.io/ph', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="Philippines" countryCode="PH" flag="🇵🇭" h1="TikTok Video Downloader Philippines" description="Download TikTok videos without watermark in the Philippines. Free HD TikTok downloader with MP3 extraction for Filipino users." />;
}
