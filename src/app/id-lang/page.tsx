import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'Pengunduh Video TikTok - Unduh Video TikTok Tanpa Watermark',
  description: 'Unduh video TikTok tanpa watermark secara gratis. Kualitas HD, ekstraksi MP3, cepat dan aman. Berfungsi di semua perangkat.',
  alternates: { canonical: 'https://toksnap.io/id-lang' },
};

export default function Page() {
  const lang = getLanguageByCode('id')!;
  return <LanguagePage lang={lang} />;
}
