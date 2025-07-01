'use client';

import { motion } from 'framer-motion';
import { Download, Sparkles, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Floating Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full floating'
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-40 right-20 w-16 h-16 bg-purple-400/10 rounded-full floating'
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className='absolute bottom-40 left-1/4 w-12 h-12 bg-pink-400/10 rounded-full floating'
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className='absolute top-1/2 right-1/4 w-8 h-8 bg-yellow-400/10 rounded-full floating'
          animate={{
            y: [0, -25, 0],
            rotate: [0, -360, -720],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      <div className='container mx-auto px-4 text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='max-w-4xl mx-auto'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center gap-2 glass-card-contrast px-6 py-3 rounded-full my-8'>
            <Sparkles className='w-5 h-5 text-yellow-400' />
            <span className='text-white font-medium text-shadow-lg'>
              Free & Fast TikTok Downloader
            </span>
            <div className='flex gap-1'>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className='w-4 h-4 text-yellow-400 fill-current' />
              ))}
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight'>
            <span className='text-white font-extrabold'>Download TikTok</span> <br />
            <span className='text-gradient font-extrabold'>Videos & Photos</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed text-shadow-lg'>
            Free TikTok video & photo downloader with{' '}
            <span className='text-gradient font-semibold'>no watermark</span> and{' '}
            <span className='text-gradient font-semibold'>HD quality</span>. Save TikTok content
            instantly - no registration required!
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            {[
              {
                icon: Download,
                title: 'Remove Watermark',
                description: 'Download clean videos without TikTok watermark',
                color: 'text-emerald-400',
              },
              {
                icon: Sparkles,
                title: 'HD Quality',
                description: 'Get videos in best available quality up to 1080p',
                color: 'text-cyan-400',
              },
              {
                icon: Star,
                title: '100% Free',
                description: 'No registration, no limits, completely free forever',
                color: 'text-amber-400',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className='glass-card-contrast p-6 hover:scale-105 transition-all duration-300'>
                <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
                <h3 className='text-white font-semibold text-shadow-lg mb-2'>{feature.title}</h3>
                <p className='text-white/80 text-sm text-shadow-sm'>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-1 h-3 bg-white/50 rounded-full mt-2'
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
