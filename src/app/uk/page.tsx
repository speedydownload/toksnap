import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader United Kingdom - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in the United Kingdom. Free HD TikTok downloader with MP3 extraction for UK users.',
  alternates: { canonical: 'https://toksnap.io/uk' },
  openGraph: { title: 'TikTok Video Downloader United Kingdom', description: 'Download TikTok videos without watermark in the United Kingdom.', url: 'https://toksnap.io/uk', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="United Kingdom" countryCode="GB" flag="🇬🇧" h1="TikTok Video Downloader United Kingdom" description="Download TikTok videos without watermark in the United Kingdom. Free HD TikTok downloader with MP3 extraction for UK users." />;
}
