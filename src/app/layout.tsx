import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist-sans',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0D12' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://toksnap.io'),
  title: {
    default: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
    template: '%s',
  },
  description: 'Download TikTok videos without watermark for free. HD quality, MP3 extraction, fast and secure. Works on all devices. Save TikTok videos instantly with TokSnap.',
  keywords: [
    'TikTok Video Downloader',
    'Download TikTok Videos',
    'TikTok Downloader Without Watermark',
    'Save TikTok Videos',
    'TikTok MP3 Downloader',
    'TikTok HD Downloader',
    'TikTok Video Saver',
    'Download TikTok Without Watermark',
    'TikTok to MP4',
    'TikTok to MP3',
  ],
  authors: [{ name: 'TokSnap' }],
  creator: 'TokSnap',
  publisher: 'TokSnap',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toksnap.io',
    siteName: 'TokSnap',
    title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark for free. HD quality, MP3 extraction, fast and secure.',
    images: [
      {
        url: '/img/Tiktok-Video-Downloader-Toksnap-Banner.webp',
        width: 1200,
        height: 630,
        alt: 'TokSnap - TikTok Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark. HD quality, MP3 extraction, fast and secure.',
    images: ['/img/Tiktok-Video-Downloader-Toksnap-Banner.webp'],
  },
  alternates: {
    canonical: 'https://toksnap.io',
    languages: {
      'en': 'https://toksnap.io/en',
      'es': 'https://toksnap.io/es',
      'pt': 'https://toksnap.io/pt',

      'id': 'https://toksnap.io/id-lang',
      'vi': 'https://toksnap.io/vi',
      'fr': 'https://toksnap.io/fr',
      'de': 'https://toksnap.io/de',
      'ar': 'https://toksnap.io/ar',
      'tr': 'https://toksnap.io/tr',
      'x-default': 'https://toksnap.io',
    },
  },
  icons: {
    icon: [{ url: '/img/Toksnap-Site-Icon.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/img/Toksnap-Site-Icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://toksnap.io/#website',
        url: 'https://toksnap.io',
        name: 'TokSnap',
        description: 'Free TikTok Video Downloader - Download TikTok Videos Without Watermark',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://toksnap.io/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': 'https://toksnap.io/#organization',
        name: 'TokSnap',
        url: 'https://toksnap.io',
        logo: {
          '@type': 'ImageObject',
          url: 'https://toksnap.io/img/Toksnap-Logo.webp',
          width: 280,
          height: 72,
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://toksnap.io/#app',
        name: 'TokSnap - TikTok Video Downloader',
        url: 'https://toksnap.io',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8G0KKXR8N1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8G0KKXR8N1');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
