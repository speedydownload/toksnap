import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toksnap.io';
  const now = new Date().toISOString();
  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/mp3-downloader`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/dmca`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ...['us','ph','id','br','vn','mx','uk'].map((s) => ({ url: `${baseUrl}/${s}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...['en','es','pt','id-lang','vi','fr','de','ar','tr'].map((s) => ({ url: `${baseUrl}/${s}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...['how-to-download-tiktok-videos-without-watermark','best-tiktok-downloader','tiktok-mp3-downloader-guide','download-tiktok-slideshow','save-tiktok-videos-on-iphone','save-tiktok-videos-on-android'].map((s) => ({ url: `${baseUrl}/blog/${s}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
