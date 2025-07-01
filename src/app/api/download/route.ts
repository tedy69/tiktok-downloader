import { NextRequest, NextResponse } from 'next/server';
import { DownloadResponse } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate TikTok URL
    const tikTokUrlPattern = /^https?:\/\/(www\.)?(tiktok\.com|vm\.tiktok\.com|m\.tiktok\.com)/;
    if (!tikTokUrlPattern.test(url)) {
      return NextResponse.json({ error: 'Invalid TikTok URL' }, { status: 400 });
    }

    // Fetch video info from TikWM API
    const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: DownloadResponse = await response.json();

    if (data.code !== 0) {
      return NextResponse.json(
        { error: data.msg || 'Failed to fetch video information' },
        { status: 400 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Download API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'TikTok Downloader API - Use POST method with URL' },
    { status: 200 },
  );
}
