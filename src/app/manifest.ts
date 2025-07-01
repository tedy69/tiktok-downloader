import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TikTok Downloader - Download Videos Without Watermark',
    short_name: 'TikTok Downloader',
    description: 'Download TikTok videos without watermark in HD quality. Fast, free, and secure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f23',
    theme_color: '#6366f1',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['entertainment', 'utilities', 'productivity'],
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
