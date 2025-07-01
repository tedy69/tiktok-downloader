'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { DownloadForm } from '@/components/DownloadForm';
import { VideoResult } from '@/components/VideoResult';
import { SEOSection } from '@/components/SEOSection';
import { Footer } from '@/components/Footer';
import { TikTokVideo } from '@/lib/types';

export function HomeClient() {
  const [video, setVideo] = useState<TikTokVideo | null>(null);

  const handleVideoFound = (foundVideo: TikTokVideo) => {
    setVideo(foundVideo);
  };

  const handleReset = () => {
    setVideo(null);
  };

  return (
    <main className='min-h-screen'>
      {!video ? (
        <>
          <Hero />
          <DownloadForm onVideoFound={handleVideoFound} />
          <SEOSection />
        </>
      ) : (
        <VideoResult video={video} onReset={handleReset} />
      )}
      <Footer />
    </main>
  );
}
