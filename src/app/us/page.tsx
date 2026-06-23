import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader USA - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in the United States. Free HD TikTok downloader with MP3 extraction for US users.',
  alternates: { canonical: 'https://toksnap.io/us' },
  openGraph: { title: 'TikTok Video Downloader USA', description: 'Download TikTok videos without watermark in the United States.', url: 'https://toksnap.io/us', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="United States" countryCode="US" flag="🇺🇸" h1="TikTok Video Downloader USA" description="Download TikTok videos without watermark in the United States. Free HD TikTok downloader with MP3 extraction for US users." />;
}
