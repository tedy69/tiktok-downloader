import { TikTokVideo } from './types';

export class TikTokService {
  private static readonly TIKWM_BASE_URL = 'https://tikwm.com';

  private static normalizeUrl(url: string): string {
    if (url.startsWith('/')) {
      return `${this.TIKWM_BASE_URL}${url}`;
    }
    return url;
  }

  static async downloadVideo(videoUrl: string, filename: string): Promise<void> {
    try {
      const normalizedUrl = this.normalizeUrl(videoUrl);
      const response = await fetch(normalizedUrl);

      if (!response.ok) {
        throw new Error(`Failed to download video: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading video:', error);
      throw error instanceof Error
        ? error
        : new Error('An unknown error occurred while downloading the video');
    }
  }

  static async downloadPhoto(photoUrl: string, filename: string): Promise<void> {
    try {
      const normalizedUrl = this.normalizeUrl(photoUrl);
      const response = await fetch(normalizedUrl);

      if (!response.ok) {
        throw new Error(`Failed to download photo: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading photo:', error);
      throw error instanceof Error
        ? error
        : new Error('An unknown error occurred while downloading the photo');
    }
  }

  static async downloadAllPhotos(video: TikTokVideo): Promise<void> {
    if (!this.isPhotoSlideshow(video) || !video.images || video.images.length === 0) {
      throw new Error('No photos available for download');
    }

    try {
      const downloadPromises = video.images.map(async (imageUrl, index) => {
        const normalizedImageUrl = this.normalizeUrl(imageUrl);
        const filename = this.generatePhotoFilename(video, index + 1);
        await this.downloadPhoto(normalizedImageUrl, filename);
        // Add a small delay between downloads to avoid overwhelming the browser
        await new Promise((resolve) => setTimeout(resolve, 500));
      });

      await Promise.all(downloadPromises);
    } catch (error) {
      console.error('Error downloading photos:', error);
      throw error instanceof Error
        ? error
        : new Error('An unknown error occurred while downloading photos');
    }
  }

  static generateFilename(video: TikTokVideo, quality: string = ''): string {
    const cleanTitle = (video.title ?? 'untitled').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
    const qualitySuffix = quality ? `_${quality}` : '';
    const extension = this.isPhotoSlideshow(video) ? '.zip' : '.mp4';
    return `${video.author.unique_id}_${cleanTitle}${qualitySuffix}${extension}`;
  }

  static generatePhotoFilename(video: TikTokVideo, photoIndex: number): string {
    const cleanTitle = (video.title ?? 'untitled').replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
    return `${video.author.unique_id}_${cleanTitle}_photo_${photoIndex}.jpg`;
  }

  static isPhotoSlideshow(video: TikTokVideo): boolean {
    return video.duration === 0 && Boolean(video.images && video.images.length > 0);
  }
}
