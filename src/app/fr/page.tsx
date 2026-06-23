import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

const lang = getLanguageByCode('fr')!;

export const metadata: Metadata = {
  title: lang.title,
  description: lang.description,
  alternates: { canonical: 'https://toksnap.io/fr' },
  openGraph: {
    title: lang.title,
    description: lang.description,
    url: 'https://toksnap.io/fr',
    images: [{ url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp' }],
  },
};

export default function Page() {
  return <LanguagePage lang={lang} />;
}
