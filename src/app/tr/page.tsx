import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'TikTok Video Indirici - TikTok Videolarini Filigransiz Indir',
  description: 'TikTok videolarini filigransiz ucretsiz indirin. HD kalite, MP3 cikarma, hizli ve guvenli. Tum cihazlarda calisir.',
  alternates: { canonical: 'https://toksnap.io/tr' },
};

export default function Page() {
  const lang = getLanguageByCode('tr')!;
  return <LanguagePage lang={lang} />;
}
