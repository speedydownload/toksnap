import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Mexico - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in Mexico. Free HD TikTok downloader with MP3 extraction for Mexican users.',
  alternates: { canonical: 'https://toksnap.io/mx' },
  openGraph: { title: 'TikTok Video Downloader Mexico', description: 'Download TikTok videos without watermark in Mexico.', url: 'https://toksnap.io/mx', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="Mexico" countryCode="MX" flag="🇲🇽" h1="TikTok Video Downloader Mexico" description="Download TikTok videos without watermark in Mexico. Free HD TikTok downloader with MP3 extraction for Mexican users." />;
}
