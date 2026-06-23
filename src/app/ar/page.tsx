import type { Metadata } from 'next';
import LanguagePage from '@/components/LanguagePage';
import { getLanguageByCode } from '@/data/languages';

export const metadata: Metadata = {
  title: 'تحميل فيديوهات تيك توك - تنزيل فيديوهات تيك توك بدون علامة مائية',
  description: 'حمل فيديوهات تيك توك بدون علامة مائية مجانا. جودة عالية HD، استخراج MP3، سريع وآمن. يعمل على جميع الأجهزة.',
  alternates: { canonical: 'https://toksnap.io/ar' },
};

export default function Page() {
  const lang = getLanguageByCode('ar')!;
  return <LanguagePage lang={lang} />;
}
