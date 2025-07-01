'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TikTokService } from '@/lib/tiktok-service';
import { TikTokVideo } from '@/lib/types';
import { isValidTikTokUrl } from '@/lib/utils';

const formSchema = z.object({
  url: z
    .string()
    .min(1, 'Please enter a TikTok URL')
    .refine(isValidTikTokUrl, 'Please enter a valid TikTok URL'),
});

type FormData = z.infer<typeof formSchema>;

interface DownloadFormProps {
  readonly onVideoFound: (video: TikTokVideo) => void;
}

export function DownloadForm({ onVideoFound }: DownloadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const video = await TikTokService.getVideoInfo(data.url);
      onVideoFound(video);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch video information');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='py-20 px-4'>
      <div className='container mx-auto max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg'>
            <span className='text-gradient drop-shadow-sm'>Start Downloading</span>
          </h2>
          <p className='text-xl text-white max-w-2xl mx-auto drop-shadow-md'>
            Paste any TikTok video or photo slideshow URL below and get instant access to
            high-quality downloads
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='glass-card-contrast p-8 md:p-12'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='relative'>
              <div className='relative'>
                <LinkIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 w-5 h-5' />
                <input
                  {...register('url')}
                  type='text'
                  placeholder='Paste TikTok video or photo slideshow URL here...'
                  className='glass-input w-full pl-12 pr-4 py-4 md:py-6 text-lg rounded-2xl focus:ring-2 focus:ring-purple-400 transition-all duration-300'
                  disabled={isLoading}
                />
              </div>

              {errors.url && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 mt-2 text-red-400'>
                  <AlertCircle className='w-4 h-4' />
                  <span className='text-sm'>{errors.url.message}</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 mt-2 text-red-400'>
                  <AlertCircle className='w-4 h-4' />
                  <span className='text-sm'>{error}</span>
                </motion.div>
              )}
            </div>

            <motion.button
              type='submit'
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='btn-modern w-full py-4 md:py-6 text-lg font-bold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? (
                <div className='flex items-center justify-center gap-3'>
                  <Loader2 className='w-6 h-6 animate-spin' />
                  <span>Processing...</span>
                </div>
              ) : (
                <div className='flex items-center justify-center gap-3'>
                  <Download className='w-6 h-6' />
                  <span>Get</span>
                </div>
              )}
            </motion.button>
          </form>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='mt-8 pt-8 border-t border-white/10'>
            <h3 className='text-lg font-semibold text-white mb-4'>How to use:</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {[
                { step: 1, text: 'Copy TikTok video URL' },
                { step: 2, text: 'Paste URL in the field above' },
                { step: 3, text: "Click 'Get Video' to download" },
              ].map((instruction) => (
                <div key={instruction.step} className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                    {instruction.step}
                  </div>
                  <span className='text-white/80'>{instruction.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
