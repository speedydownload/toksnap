import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
  description: 'Download TikTok videos without watermark for free. HD quality, MP3 extraction, fast and secure. Works on all devices.',
  alternates: { canonical: 'https://toksnap.io/en' },
};

export default function Page() {
  const lang = getLanguageByCode('en')!;
  return <LanguagePage lang={lang} />;
}
