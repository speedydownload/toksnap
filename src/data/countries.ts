export interface Country {
  code: string;
  name: string;
  localName: string;
  slug: string;
  flag: string;
  h1: string;
  title: string;
  description: string;
}

export const countries: Country[] = [
  {
    code: 'US',
    name: 'United States',
    localName: 'United States',
    slug: 'us',
    flag: '🇺🇸',
    h1: 'TikTok Video Downloader USA',
    title: 'TikTok Video Downloader USA - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in the United States. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
  {
    code: 'PH',
    name: 'Philippines',
    localName: 'Philippines',
    slug: 'ph',
    flag: '🇵🇭',
    h1: 'TikTok Video Downloader Philippines',
    title: 'TikTok Video Downloader Philippines - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in the Philippines. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    localName: 'Indonesia',
    slug: 'id',
    flag: '🇮🇩',
    h1: 'TikTok Video Downloader Indonesia',
    title: 'TikTok Video Downloader Indonesia - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in Indonesia. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
  {
    code: 'BR',
    name: 'Brazil',
    localName: 'Brasil',
    slug: 'br',
    flag: '🇧🇷',
    h1: 'TikTok Video Downloader Brazil',
    title: 'TikTok Video Downloader Brazil - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in Brazil. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    localName: 'Vietnam',
    slug: 'vn',
    flag: '🇻🇳',
    h1: 'TikTok Video Downloader Vietnam',
    title: 'TikTok Video Downloader Vietnam - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in Vietnam. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
  {
    code: 'MX',
    name: 'Mexico',
    localName: 'Mexico',
    slug: 'mx',
    flag: '🇲🇽',
    h1: 'TikTok Video Downloader Mexico',
    title: 'TikTok Video Downloader Mexico - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in Mexico. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    localName: 'United Kingdom',
    slug: 'uk',
    flag: '🇬🇧',
    h1: 'TikTok Video Downloader UK',
    title: 'TikTok Video Downloader UK - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark in the United Kingdom. Free HD TikTok downloader with MP3 extraction. Fast, secure, and unlimited downloads.',
  },
];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
