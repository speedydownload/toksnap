import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

const lang = getLanguageByCode('de')!;

export const metadata: Metadata = {
  title: lang.title,
  description: lang.description,
  alternates: { canonical: 'https://toksnap.io/de' },
  openGraph: {
    title: lang.title,
    description: lang.description,
    url: 'https://toksnap.io/de',
    images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }],
  },
};

export default function Page() {
  return <LanguagePage lang={lang} />;
}
