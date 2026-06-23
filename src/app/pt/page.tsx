import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'Baixador de Videos do TikTok - Baixar Sem Marca de Agua',
  description: 'Baixe videos do TikTok sem marca de agua gratuitamente. Qualidade HD, extracao de MP3, rapido e seguro. Funciona em todos os dispositivos.',
  alternates: { canonical: 'https://toksnap.io/pt' },
};

export default function Page() {
  const lang = getLanguageByCode('pt')!;
  return <LanguagePage lang={lang} />;
}
