'use server';

import { DownloadResponse, TikTokVideo } from '@/lib/types';

export interface VideoInfoResult {
  success: boolean;
  data?: TikTokVideo;
  error?: string;
}

export async function getVideoInfo(url: string): Promise<VideoInfoResult> {
  try {
    // Validate TikTok URL on server
    const tikTokUrlPattern =
      /^https?:\/\/(www\.)?(tiktok\.com|vm\.tiktok\.com|m\.tiktok\.com|vt\.tiktok\.com)/;
    if (!tikTokUrlPattern.test(url)) {
      return {
        success: false,
        error: 'Invalid TikTok URL format',
      };
    }

    // Fetch video info from TikWM API - this happens completely on the server
    const apiUrl = 'https://tikwm.com/api/';

    // Prepare form data as required by the new API
    const formData = new FormData();
    formData.append('url', url);
    formData.append('count', '12');
    formData.append('cursor', '0');
    formData.append('web', '1');
    formData.append('hd', '1');

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        Referer: 'https://tikwm.com/',
      },
      body: formData,
      // Add cache revalidation to prevent caching issues
      cache: 'no-store',
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Failed to fetch video information (${response.status})`,
      };
    }

    const data: DownloadResponse = await response.json();

    if (data.code !== 0) {
      return {
        success: false,
        error: data.msg || 'Failed to fetch video information',
      };
    }

    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
