export interface TikTokVideo {
  id: string;
  title: string | null;
  cover: string;
  play: string;
  wmplay: string;
  hdplay?: string;
  music: string;
  music_info: {
    id: string;
    title: string;
    play: string;
    cover: string;
    author: string;
    original: boolean;
    duration: number;
  };
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
  download_count: number;
  create_time: number;
  author: {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
  };
  duration: number;
  size: number;
  wm_size: number;
  hd_size?: number;
  // Photo slideshow properties
  images?: string[]; // Array of image URLs for photo slideshows
}

export interface DownloadResponse {
  code: number;
  msg: string;
  processed_time: number;
  data: TikTokVideo;
}

export interface DownloadError {
  code: number;
  msg: string;
}

export type DownloadQuality = 'hd' | 'sd' | 'watermark';
export type ContentType = 'video' | 'photo';

export interface DownloadOption {
  quality: DownloadQuality;
  label: string;
  description: string;
  icon: string;
  color: string;
}
