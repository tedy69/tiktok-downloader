import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://savetik.tedyfazrin.com/'),
  title: {
    default: 'TikTok Downloader - Download Videos Without Watermark | Free HD Quality',
    template: '%s | TikTok Downloader',
  },
  description:
    'Download TikTok videos without watermark in HD quality. Fast, free, and easy to use TikTok video downloader. No registration required. Save TikTok videos to your device instantly.',
  keywords: [
    'tiktok downloader',
    'download tiktok video',
    'no watermark',
    'free tiktok downloader',
    'tiktok video saver',
    'hd quality',
    'mp4 download',
    'tiktok to mp4',
    'remove watermark',
    'save tiktok video',
    'tiktok converter',
    'online tiktok downloader',
  ],
  authors: [{ name: 'Tedy Fazrin', url: 'mailto:gmail@tedyfazrin.com' }],
  creator: 'Tedy Fazrin',
  publisher: 'TikTok Downloader',
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
    url: 'https://savetik.tedyfazrin.com/',
    siteName: 'TikTok Downloader',
    title: 'TikTok Downloader - Download Videos Without Watermark | Free HD Quality',
    description:
      'Download TikTok videos without watermark in HD quality. Fast, free, and easy to use TikTok video downloader. No registration required.',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Downloader - Download Videos Without Watermark',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tiktokdownloader',
    creator: '@tedyfazrin',
    title: 'TikTok Downloader - Download Videos Without Watermark | Free HD Quality',
    description:
      'Download TikTok videos without watermark in HD quality. Fast, free, and easy to use TikTok video downloader.',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://savetik.tedyfazrin.com/',
  },
  category: 'technology',
  classification: 'Video Downloader Tool',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans gradient-bg min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
