import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Indonesia - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in Indonesia. Free HD TikTok downloader with MP3 extraction for Indonesian users.',
  alternates: { canonical: 'https://toksnap.io/id' },
  openGraph: { title: 'TikTok Video Downloader Indonesia', description: 'Download TikTok videos without watermark in Indonesia.', url: 'https://toksnap.io/id', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="Indonesia" countryCode="ID" flag="🇮🇩" h1="TikTok Video Downloader Indonesia" description="Download TikTok videos without watermark in Indonesia. Free HD TikTok downloader with MP3 extraction for Indonesian users." />;
}
