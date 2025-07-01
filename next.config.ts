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
    ],
  },
};

export default nextConfig;
