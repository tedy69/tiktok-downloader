'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Music,
  Video,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Loader2,
  Image as ImageIcon,
  Camera,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import { TikTokVideo } from '@/lib/types';
import { TikTokService } from '@/lib/tiktok-service';
import { formatFileSize } from '@/lib/utils';

interface VideoResultProps {
  readonly video: TikTokVideo;
  readonly onReset: () => void;
}

export function VideoResult({ video, onReset }: VideoResultProps) {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const isPhotoSlideshow = TikTokService.isPhotoSlideshow(video);

  const handleDownload = async (
    type: 'hd' | 'sd' | 'watermark' | 'music' | 'photos' | 'single-photo',
  ) => {
    setDownloading(type);

    try {
      let url: string;
      let filename: string;

      switch (type) {
        case 'photos':
          if (isPhotoSlideshow) {
            await TikTokService.downloadAllPhotos(video);
          }
          break;
        case 'single-photo':
          if (isPhotoSlideshow && video.images?.[currentPhotoIndex]) {
            url = video.images[currentPhotoIndex];
            filename = TikTokService.generatePhotoFilename(video, currentPhotoIndex + 1);
            await TikTokService.downloadPhoto(url, filename);
          }
          break;
        case 'hd':
          url = video.hdplay ?? video.play;
          filename = TikTokService.generateFilename(video, 'hd');
          await TikTokService.downloadVideo(url, filename);
          break;
        case 'sd':
          url = video.play;
          filename = TikTokService.generateFilename(video);
          await TikTokService.downloadVideo(url, filename);
          break;
        case 'watermark':
          url = video.wmplay;
          filename = TikTokService.generateFilename(video, 'watermark');
          await TikTokService.downloadVideo(url, filename);
          break;
        case 'music':
          url = video.music;
          filename = `${video.author.unique_id}_${video.music_info.title.replace(
            /[^a-zA-Z0-9]/g,
            '_',
          )}.mp3`;
          await TikTokService.downloadVideo(url, filename);
          break;
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloading(null);
    }
  };

  const nextPhoto = () => {
    if (video.images && currentPhotoIndex < video.images.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const prevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  return (
    <section className='py-20 px-4'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='text-gradient'>
              {isPhotoSlideshow ? 'Photos Ready!' : 'Video Ready!'}
            </span>
          </h2>
          <p className='text-xl text-white/80'>
            {isPhotoSlideshow
              ? `${video.images?.length} photos found - Choose your download option below`
              : 'Choose your preferred download option below'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Media Preview */}
          <div className='glass-card p-6'>
            <div className='relative rounded-xl overflow-hidden mb-6'>
              {isPhotoSlideshow && video.images ? (
                <>
                  <Image
                    src={video.images[currentPhotoIndex] ?? video.cover}
                    alt={`Photo ${currentPhotoIndex + 1} of ${video.images.length}`}
                    width={400}
                    height={400}
                    className='w-full aspect-square object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1'>
                    <span className='text-white text-sm font-medium flex items-center gap-1'>
                      <ImageIcon className='w-4 h-4' />
                      {currentPhotoIndex + 1}/{video.images.length}
                    </span>
                  </div>
                  {video.images.length > 1 && (
                    <>
                      <button
                        onClick={prevPhoto}
                        disabled={currentPhotoIndex === 0}
                        title='Previous photo'
                        aria-label='Previous photo'
                        className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                        <ChevronLeft className='w-5 h-5' />
                      </button>
                      <button
                        onClick={nextPhoto}
                        disabled={currentPhotoIndex === video.images.length - 1}
                        title='Next photo'
                        aria-label='Next photo'
                        className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                        <ChevronRight className='w-5 h-5' />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Image
                    src={video.cover}
                    alt={video.title ?? 'TikTok Video'}
                    width={400}
                    height={225}
                    className='w-full aspect-video object-cover'
                  />
                  <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                      <Video className='w-8 h-8 text-white' />
                    </div>
                  </div>
                </>
              )}
            </div>

            {video.title && (
              <h3 className='text-xl font-bold text-white mb-4 line-clamp-2'>{video.title}</h3>
            )}

            <div className='flex items-center gap-3 mb-4'>
              <Image
                src={video.author.avatar}
                alt={video.author.nickname}
                width={40}
                height={40}
                className='w-10 h-10 rounded-full'
              />
              <div>
                <p className='text-white font-semibold'>{video.author.nickname}</p>
                <p className='text-white/60 text-sm'>@{video.author.unique_id}</p>
              </div>
            </div>

            <div className='grid grid-cols-4 gap-4 text-center'>
              <div className='flex flex-col items-center'>
                <Eye className='w-5 h-5 text-blue-400 mb-1' />
                <span className='text-white/80 text-sm'>{video.play_count.toLocaleString()}</span>
              </div>
              <div className='flex flex-col items-center'>
                <Heart className='w-5 h-5 text-red-400 mb-1' />
                <span className='text-white/80 text-sm'>{video.digg_count.toLocaleString()}</span>
              </div>
              <div className='flex flex-col items-center'>
                <MessageCircle className='w-5 h-5 text-green-400 mb-1' />
                <span className='text-white/80 text-sm'>
                  {video.comment_count.toLocaleString()}
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <Share className='w-5 h-5 text-purple-400 mb-1' />
                <span className='text-white/80 text-sm'>{video.share_count.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className='space-y-4'>
            {isPhotoSlideshow ? (
              <>
                {/* All Photos Download */}
                <motion.button
                  onClick={() => handleDownload('photos')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center'>
                        <ImageIcon className='w-6 h-6 text-blue-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>Download All Photos</h4>
                        <p className='text-white/60 text-sm'>
                          {video.images?.length} photos • High quality JPG
                        </p>
                      </div>
                    </div>
                    {downloading === 'photos' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-blue-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>

                {/* Current Photo Download */}
                <motion.button
                  onClick={() => handleDownload('single-photo')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center'>
                        <Camera className='w-6 h-6 text-green-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>Download Current Photo</h4>
                        <p className='text-white/60 text-sm'>
                          Photo {currentPhotoIndex + 1} of {video.images?.length} • High quality JPG
                        </p>
                      </div>
                    </div>
                    {downloading === 'single-photo' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-green-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>

                {/* Music Download for Photos */}
                <motion.button
                  onClick={() => handleDownload('music')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center'>
                        <Music className='w-6 h-6 text-purple-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>Background Music</h4>
                        <p className='text-white/60 text-sm'>
                          {video.music_info.title} • MP3 format
                        </p>
                      </div>
                    </div>
                    {downloading === 'music' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-purple-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>
              </>
            ) : (
              <>
                {/* HD Download */}
                <motion.button
                  onClick={() => handleDownload('hd')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center'>
                        <Video className='w-6 h-6 text-blue-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>HD Quality</h4>
                        <p className='text-white/60 text-sm'>
                          Best quality • {formatFileSize(video.hd_size ?? video.size)}
                        </p>
                      </div>
                    </div>
                    {downloading === 'hd' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-blue-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>

                {/* Standard Download */}
                <motion.button
                  onClick={() => handleDownload('sd')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center'>
                        <Video className='w-6 h-6 text-green-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>Standard Quality</h4>
                        <p className='text-white/60 text-sm'>
                          No watermark • {formatFileSize(video.size)}
                        </p>
                      </div>
                    </div>
                    {downloading === 'sd' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-green-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>

                {/* Watermark Download */}
                <motion.button
                  onClick={() => handleDownload('watermark')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center'>
                        <Video className='w-6 h-6 text-yellow-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>With Watermark</h4>
                        <p className='text-white/60 text-sm'>
                          Original quality • {formatFileSize(video.wm_size)}
                        </p>
                      </div>
                    </div>
                    {downloading === 'watermark' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-yellow-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>

                {/* Music Download */}
                <motion.button
                  onClick={() => handleDownload('music')}
                  disabled={downloading !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full glass-card p-6 text-left hover:bg-white/10 transition-all duration-300 disabled:opacity-50'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center'>
                        <Music className='w-6 h-6 text-purple-400' />
                      </div>
                      <div>
                        <h4 className='text-white font-semibold'>Audio Only</h4>
                        <p className='text-white/60 text-sm'>
                          {video.music_info.title} • MP3 format
                        </p>
                      </div>
                    </div>
                    {downloading === 'music' ? (
                      <Loader2 className='w-6 h-6 animate-spin text-purple-400' />
                    ) : (
                      <Download className='w-6 h-6 text-white/60' />
                    )}
                  </div>
                </motion.button>
              </>
            )}
          </div>
        </motion.div>

        {/* Reset Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center'>
          <button
            onClick={onReset}
            className='glass px-8 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300'>
            Download Another Video
          </button>
        </motion.div>
      </div>
    </section>
  );
}
