import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'Descargador de Videos de TikTok - Descargar Sin Marca de Agua',
  description: 'Descarga videos de TikTok sin marca de agua gratis. Calidad HD, extraccion de MP3, rapido y seguro. Funciona en todos los dispositivos.',
  alternates: { canonical: 'https://toksnap.io/es' },
};

export default function Page() {
  const lang = getLanguageByCode('es')!;
  return <LanguagePage lang={lang} />;
}
