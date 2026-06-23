import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Vietnam - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in Vietnam. Free HD TikTok downloader with MP3 extraction for Vietnamese users.',
  alternates: { canonical: 'https://toksnap.io/vn' },
  openGraph: { title: 'TikTok Video Downloader Vietnam', description: 'Download TikTok videos without watermark in Vietnam.', url: 'https://toksnap.io/vn', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="Vietnam" countryCode="VN" flag="🇻🇳" h1="TikTok Video Downloader Vietnam" description="Download TikTok videos without watermark in Vietnam. Free HD TikTok downloader with MP3 extraction for Vietnamese users." />;
}
