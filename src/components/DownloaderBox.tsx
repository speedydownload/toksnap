'use client';

import { useState } from 'react';

interface DownloadItem {
  label: string;
  url: string;
  quality?: string;
  format: string;
  type: 'video' | 'audio' | 'image';
  size?: number;
}

interface DownloadResult {
  success: boolean;
  data?: {
    title: string;
    thumbnail: string;
    author: string;
    duration: string;
    downloads: DownloadItem[];
    images?: string[];
  };
  error?: string;
}

function formatFileSize(bytes?: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

export default function DownloaderBox({ placeholder = 'Paste TikTok URL here', buttonText = 'Download' }: { placeholder?: string; buttonText?: string }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const [error, setError] = useState('');
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);

  const isValidTikTokUrl = (input: string) => {
    return /tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com/i.test(input);
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please paste a TikTok URL');
      return;
    }
    if (!isValidTikTokUrl(url)) {
      setError('Please enter a valid TikTok URL');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data: DownloadResult = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to process video. Please try again.');
        return;
      }

      setResult(data);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleDownload();
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      if (text && isValidTikTokUrl(text)) {
        setUrl(text);
      }
    }).catch(() => {});
  };

  const handleFileDownload = async (dl: DownloadItem, index: number) => {
    setDownloadingIndex(index);
    try {
      const res = await fetch(dl.url);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const ext = dl.format.toLowerCase();
      const filename = `toksnap_${dl.type}_${Date.now()}.${ext === 'webp' ? 'webp' : ext === 'mp3' ? 'mp3' : 'mp4'}`;
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback: open in new tab if blob download fails
      window.open(dl.url, '_blank');
    } finally {
      setDownloadingIndex(null);
    }
  };

  const handleImageDownload = async (imgUrl: string, index: number) => {
    try {
      const res = await fetch(imgUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `toksnap_slide_${index + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(imgUrl, '_blank');
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'audio':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      case 'image':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20';
      case 'audio': return 'bg-pink-500/15 text-pink-400 border-pink-500/20';
      case 'image': return 'bg-amber-500/15 text-amber-400 border-amber-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <div className="w-full">
      {/* Input Box */}
      <div className="relative flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(''); }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
            aria-label="TikTok video URL"
          />
          {!url && (
            <button
              onClick={handlePaste}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              type="button"
            >
              Paste
            </button>
          )}
        </div>
        <button
          onClick={handleDownload}
          disabled={loading}
          className="px-8 py-4 bg-gradient-to-r from-[#22D3EE] to-[#EC4899] text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-lg glow-cyan whitespace-nowrap"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : buttonText}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-3 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {result?.data && (
        <div className="mt-6 p-5 sm:p-6 bg-card border border-border rounded-2xl">
          {/* Video Info */}
          <div className="flex gap-4 mb-6">
            {result.data.thumbnail && (
              <img
                src={result.data.thumbnail}
                alt={result.data.title}
                className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-xl shrink-0"
                loading="lazy"
              />
            )}
            <div className="min-w-0 flex flex-col justify-center">
              <h3 className="font-semibold text-foreground text-sm sm:text-base line-clamp-2">{result.data.title}</h3>
              <div className="flex items-center gap-3 mt-1.5">
                {result.data.author && (
                  <span className="text-sm text-muted">@{result.data.author}</span>
                )}
                {result.data.duration && (
                  <span className="text-xs text-muted bg-muted/10 px-2 py-0.5 rounded-md">{result.data.duration}</span>
                )}
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-2">
            {result.data.downloads.map((dl, i) => (
              <button
                key={i}
                onClick={() => handleFileDownload(dl, i)}
                disabled={downloadingIndex === i}
                className="w-full flex items-center gap-3 px-4 py-3.5 bg-background border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group disabled:opacity-60 disabled:cursor-wait text-left"
              >
                <span className={`p-2 rounded-lg ${getTypeBadgeColor(dl.type)}`}>
                  {getTypeIcon(dl.type)}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors block truncate">
                    {dl.label}
                  </span>
                  <span className="text-xs text-muted">
                    {dl.format}
                    {dl.size ? ` \u00B7 ${formatFileSize(dl.size)}` : ''}
                  </span>
                </div>
                {downloadingIndex === i ? (
                  <svg className="animate-spin w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Image Gallery for Slideshows */}
          {result.data.images && result.data.images.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Slideshow Images</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {result.data.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => handleImageDownload(img, i)}
                    className="relative group rounded-xl overflow-hidden border border-border cursor-pointer"
                  >
                    <img src={img} alt={`Slide ${i + 1}`} className="w-full aspect-square object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
