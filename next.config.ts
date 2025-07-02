import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.tiktokcdn.com',
      },
      {
        protocol: 'https',
        hostname: '*.musical.ly',
      },
      {
        protocol: 'https',
        hostname: '*.tiktok.com',
      },
      {
        protocol: 'https',
        hostname: 'tikwm.com',
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn-us.com',
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn-eu.com',
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn-sg.com',
      },
      {
        protocol: 'https',
        hostname: '*.tiktokcdn-id.com',
      },
    ],
  },
};

export default nextConfig;
