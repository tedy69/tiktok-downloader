export interface TikTokVideo {
  id: string;
  region: string;
  title: string | null;
  cover: string;
  duration: number;
  play: string;
  wmplay: string;
  hdplay?: string;
  size: number;
  wm_size: number;
  hd_size?: number;
  music: string;
  music_info: {
    id: string;
    title: string;
    play: string;
    author: string;
    original: boolean;
    duration: number;
    album: string;
  };
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
  download_count: number;
  collect_count: number;
  create_time: number;
  anchors: unknown;
  anchors_extras: string;
  is_ad: boolean;
  commerce_info: {
    adv_promotable: boolean;
    auction_ad_invited: boolean;
    branded_content_type: number;
    organic_log_extra: string;
    with_comment_filter_words: boolean;
  };
  commercial_video_info: string;
  item_comment_settings: number;
  mentioned_users: string;
  author: {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
  };
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
