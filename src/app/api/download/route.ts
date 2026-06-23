import { NextRequest, NextResponse } from 'next/server';

interface TikTokVideoData {
  title: string;
  thumbnail: string;
  author: string;
  duration: string;
  downloads: {
    label: string;
    url: string;
    quality?: string;
    format: string;
    type: 'video' | 'audio' | 'image';
    size?: number;
  }[];
  images?: string[];
}

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 30;
const RATE_LIMIT_WINDOW = 60000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);

  if (!entry || now > entry.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

function isValidTikTokUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return /^(www\.|vm\.|vt\.|m\.)?tiktok\.com$/i.test(parsed.hostname);
  } catch {
    return false;
  }
}

async function resolveRedirect(url: string): Promise<string> {
  // Short URLs (vm.tiktok.com, vt.tiktok.com) need redirect resolution
  try {
    const parsed = new URL(url);
    if (!/^(vm|vt)\.tiktok\.com$/i.test(parsed.hostname)) return url;
  } catch {
    return url;
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    clearTimeout(timer);
    return res.url || url;
  } catch {
    return url;
  }
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /\/video\/(\d+)/,
    /\/v\/(\d+)/,
    /\/photo\/(\d+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 5000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
}

async function fetchViaTikwm(resolvedUrl: string): Promise<TikTokVideoData | null> {
  try {
    const tikwmRes = await fetchWithTimeout(
      `https://www.tikwm.com/api/?url=${encodeURIComponent(resolvedUrl)}&hd=1`,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://www.tikwm.com/',
          'Origin': 'https://www.tikwm.com',
        },
      },
      8000
    );

    if (!tikwmRes.ok) return null;

    const tikwmText = await tikwmRes.text();
    if (!tikwmText.startsWith('{')) return null;
    const tikwmData = JSON.parse(tikwmText);

    if (tikwmData.code !== 0 || !tikwmData.data) return null;

    const d = tikwmData.data;
    const downloads: TikTokVideoData['downloads'] = [];
    let images: string[] = [];
    const title = d.title || 'TikTok Video';
    const author = d.author?.unique_id || '';
    const thumbnail = d.cover || d.origin_cover || '';
    const duration = d.duration ? `${d.duration}s` : '';

    if (d.hdplay) {
      downloads.push({ label: 'Full HD Video (No Watermark)', url: d.hdplay, quality: 'Full HD', format: 'MP4', type: 'video', size: d.hd_size || undefined });
    }
    if (d.play) {
      downloads.push({ label: 'HD Video (No Watermark)', url: d.play, quality: 'HD', format: 'MP4', type: 'video', size: d.size || undefined });
    }
    if (d.wmplay) {
      downloads.push({ label: 'Video (With Watermark)', url: d.wmplay, quality: 'HD', format: 'MP4', type: 'video', size: d.wm_size || undefined });
    }
    if (d.music) {
      downloads.push({ label: `Audio - ${d.music_info?.title || 'Original Sound'}`, url: d.music, format: 'MP3', type: 'audio' });
    }
    if (thumbnail) {
      downloads.push({ label: 'Thumbnail', url: thumbnail, format: 'WEBP', type: 'image' });
    }
    if (d.images && Array.isArray(d.images)) {
      images = d.images;
    }

    if (downloads.length === 0) return null;

    return { title, thumbnail, author, duration, downloads, images: images.length > 0 ? images : undefined };
  } catch {
    return null;
  }
}

async function fetchViaScraping(resolvedUrl: string): Promise<TikTokVideoData | null> {
  try {
    const pageRes = await fetchWithTimeout(resolvedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    }, 5000);

    const html = await pageRes.text();
    const downloads: TikTokVideoData['downloads'] = [];
    let images: string[] = [];
    let title = 'TikTok Video';
    let author = '';
    let thumbnail = '';
    let duration = '';

    // Try __UNIVERSAL_DATA_FOR_REHYDRATION__
    const universalMatch = html.match(/<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/);
    if (universalMatch) {
      try {
        const jsonData = JSON.parse(universalMatch[1]);
        const videoDetail = jsonData?.__DEFAULT_SCOPE__?.['webapp.video-detail']?.itemInfo?.itemStruct;
        if (videoDetail) {
          title = videoDetail.desc || title;
          author = videoDetail.author?.uniqueId || author;
          duration = videoDetail.video?.duration ? `${videoDetail.video.duration}s` : '';
          thumbnail = videoDetail.video?.cover || thumbnail;
          const playAddr = videoDetail.video?.playAddr;
          const downloadAddr = videoDetail.video?.downloadAddr;
          if (downloadAddr) downloads.push({ label: 'HD Video (No Watermark)', url: downloadAddr, quality: 'HD', format: 'MP4', type: 'video' });
          if (playAddr && playAddr !== downloadAddr) downloads.push({ label: 'Standard Video', url: playAddr, quality: 'SD', format: 'MP4', type: 'video' });
          if (videoDetail.music?.playUrl) downloads.push({ label: `Audio - ${videoDetail.music?.title || 'Original Sound'}`, url: videoDetail.music.playUrl, format: 'MP3', type: 'audio' });
          if (videoDetail.imagePost?.images) {
            images = videoDetail.imagePost.images.map((img: { imageURL?: { urlList?: string[] } }) => img.imageURL?.urlList?.[0]).filter(Boolean) as string[];
          }
          if (thumbnail) downloads.push({ label: 'Thumbnail', url: thumbnail, format: 'WEBP', type: 'image' });
        }
      } catch { /* continue */ }
    }

    // Try SIGI_STATE fallback
    if (downloads.length === 0) {
      const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>([\s\S]*?)<\/script>/);
      if (sigiMatch) {
        try {
          const sigiData = JSON.parse(sigiMatch[1]);
          const itemModule = sigiData.ItemModule;
          if (itemModule) {
            const item = itemModule[Object.keys(itemModule)[0]];
            if (item) {
              title = item.desc || title;
              author = item.author || author;
              if (item.video?.playAddr) downloads.push({ label: 'HD Video (No Watermark)', url: item.video.playAddr, quality: 'HD', format: 'MP4', type: 'video' });
              if (item.video?.downloadAddr) downloads.push({ label: 'Download Video', url: item.video.downloadAddr, quality: 'Original', format: 'MP4', type: 'video' });
              if (item.music?.playUrl) downloads.push({ label: 'Audio MP3', url: item.music.playUrl, format: 'MP3', type: 'audio' });
            }
          }
        } catch { /* continue */ }
      }
    }

    if (downloads.length === 0) return null;
    return { title, thumbnail, author, duration, downloads, images: images.length > 0 ? images : undefined };
  } catch {
    return null;
  }
}

async function fetchTikTokData(url: string): Promise<TikTokVideoData> {
  const resolvedUrl = await resolveRedirect(url);

  // Try tikwm API first (most reliable)
  const tikwmResult = await fetchViaTikwm(resolvedUrl);
  if (tikwmResult) return tikwmResult;

  // Fallback: try direct page scraping
  const scrapingResult = await fetchViaScraping(resolvedUrl);
  if (scrapingResult) return scrapingResult;

  throw new Error('Could not extract download links. The video may be private or deleted.');
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
              request.headers.get('x-real-ip') ||
              'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Rate limit exceeded. Please wait a moment and try again.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid TikTok URL.' },
        { status: 400 }
      );
    }

    if (!isValidTikTokUrl(url)) {
      return NextResponse.json(
        { success: false, error: 'Invalid TikTok URL. Please paste a valid TikTok video link.' },
        { status: 400 }
      );
    }

    const data = await fetchTikTokData(url);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
