import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'Tai Video TikTok - Tai Video TikTok Khong Co Watermark',
  description: 'Tai video TikTok khong co watermark mien phi. Chat luong HD, trich xuat MP3, nhanh va an toan. Hoat dong tren tat ca thiet bi.',
  alternates: { canonical: 'https://toksnap.io/vi' },
};

export default function Page() {
  const lang = getLanguageByCode('vi')!;
  return <LanguagePage lang={lang} />;
}
