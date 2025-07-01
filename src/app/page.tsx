import { HomeClient } from '@/components/HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free TikTok Video Downloader - No Watermark | HD Quality Download',
  description:
    'Download TikTok videos without watermark in HD quality. Fast, free, and secure TikTok video downloader. No registration required. Convert TikTok to MP4 instantly.',
  keywords: [
    'tiktok downloader',
    'download tiktok video',
    'no watermark',
    'free tiktok downloader',
    'tiktok video saver',
    'hd quality download',
    'mp4 download',
    'tiktok to mp4',
    'remove watermark tiktok',
    'save tiktok video',
    'online tiktok downloader',
    'tiktok converter',
  ],
  openGraph: {
    title: 'Free TikTok Video Downloader - No Watermark | HD Quality Download',
    description:
      'Download TikTok videos without watermark in HD quality. Fast, free, and secure TikTok video downloader.',
    url: 'https://tiktokdownloader.com',
    type: 'website',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Downloader - Free Video Download Tool',
      },
    ],
  },
  twitter: {
    title: 'Free TikTok Video Downloader - No Watermark | HD Quality Download',
    description: 'Download TikTok videos without watermark in HD quality. Fast, free, and secure.',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://tiktokdownloader.com',
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'TikTok Downloader',
            description:
              'Download TikTok videos without watermark in HD quality. Fast, free, and secure TikTok video downloader.',
            url: 'https://tiktokdownloader.com',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Any',
            permissions: 'Free to use',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Person',
              name: 'Tedy Fazrin',
              email: 'gmail@tedyfazrin.com',
            },
            provider: {
              '@type': 'Organization',
              name: 'TikTok Downloader',
              url: 'https://tiktokdownloader.com',
            },
            browserRequirements: 'Requires JavaScript. Requires HTML5.',
            softwareVersion: '1.0',
            featureList: [
              'Download TikTok videos without watermark',
              'HD quality video downloads',
              'MP4 format support',
              'No registration required',
              'Free to use',
              'Fast processing',
              'Secure downloads',
            ],
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I download TikTok videos without watermark?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply paste the TikTok video URL into our downloader, click download, and get your video without watermark in HD quality.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is this TikTok downloader free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, our TikTok downloader is completely free to use. No registration, no hidden fees, no premium features.',
                },
              },
              {
                '@type': 'Question',
                name: 'What video quality can I download?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can download TikTok videos in the best available quality, typically HD (720p or 1080p) when available from the original video.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it legal to download TikTok videos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "You should only download videos for personal use and respect the original creator's copyright. Always ensure you have permission for any commercial use.",
                },
              },
            ],
          }),
        }}
      />

      <HomeClient />
    </>
  );
}
