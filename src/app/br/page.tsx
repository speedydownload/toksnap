import type { Metadata } from 'next';
import CountryPage from '@/components/CountryPage';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Brazil - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark in Brazil. Free HD TikTok downloader with MP3 extraction for Brazilian users.',
  alternates: { canonical: 'https://toksnap.io/br' },
  openGraph: { title: 'TikTok Video Downloader Brazil', description: 'Download TikTok videos without watermark in Brazil.', url: 'https://toksnap.io/br', images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }] },
};

export default function Page() {
  return <CountryPage country="Brazil" countryCode="BR" flag="🇧🇷" h1="TikTok Video Downloader Brazil" description="Download TikTok videos without watermark in Brazil. Free HD TikTok downloader with MP3 extraction for Brazilian users." />;
}
