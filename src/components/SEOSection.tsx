'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, Zap, Download, Heart } from 'lucide-react';

export function SEOSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'No Watermark Downloads',
      description:
        'Remove TikTok watermarks automatically and get clean, professional-looking videos perfect for reposting or personal use.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description:
        'Our advanced servers process your TikTok video downloads in seconds, not minutes. Get your content instantly.',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description:
        "Your privacy matters. We don't store your videos or personal data. All downloads are processed securely.",
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description:
        'Download TikTok videos anytime, anywhere. Our service works around the clock with 99.9% uptime.',
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description:
        'Download in MP4 video format or extract MP3 audio. Choose the format that works best for you.',
    },
    {
      icon: Heart,
      title: 'Creator Friendly',
      description:
        'Respect content creators by using downloads responsibly. Perfect for personal use and fair use scenarios.',
    },
  ];

  const stats = [
    { number: '1M+', label: 'Videos Downloaded' },
    { number: '50K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '< 10s', label: 'Average Processing Time' },
  ];

  return (
    <section className='py-20 px-4 relative overflow-hidden'>
      <div className='container mx-auto'>
        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            How to Download TikTok Videos
          </h2>
          <p className='text-xl text-white/80 max-w-3xl mx-auto'>
            Download any TikTok video in just 3 simple steps. No software installation required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {[
            {
              step: '1',
              title: 'Copy TikTok URL',
              description:
                'Find the TikTok video you want to download and copy its URL from the share button.',
            },
            {
              step: '2',
              title: 'Paste & Process',
              description:
                'Paste the URL into our downloader and click the download button to process.',
            },
            {
              step: '3',
              title: 'Download Video',
              description:
                'Choose your preferred quality and format, then download the video without watermark.',
            },
          ].map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className='glass-card p-8 text-center relative'>
              <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6'>
                {step.step}
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>{step.title}</h3>
              <p className='text-white/70'>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Why Choose Our TikTok Downloader?
          </h2>
          <p className='text-xl text-white/80 max-w-3xl mx-auto'>
            The most reliable and feature-rich TikTok video downloader available online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='glass-card p-6 hover:scale-105 transition-all duration-300'>
              <benefit.icon className='w-12 h-12 text-purple-400 mb-4' />
              <h3 className='text-lg font-bold text-white mb-3'>{benefit.title}</h3>
              <p className='text-white/70 text-sm'>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='glass-card p-12 mb-20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Trusted by Millions Worldwide
            </h2>
            <p className='text-white/80'>
              Join millions of users who trust our TikTok downloader for their video needs.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-gradient mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Frequently Asked Questions
          </h2>
          <p className='text-white/80 mb-8 max-w-2xl mx-auto'>
            Got questions? We&apos;ve got answers. Learn more about how our TikTok downloader works.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {[
              {
                question: 'Is it free to use?',
                answer:
                  'Yes! Our TikTok downloader is completely free with no hidden costs or registration required.',
              },
              {
                question: 'What quality can I download?',
                answer:
                  'You can download videos in the best available quality, typically HD (720p-1080p).',
              },
              {
                question: 'Do you remove watermarks?',
                answer:
                  'Yes, we automatically remove TikTok watermarks to give you clean video files.',
              },
              {
                question: 'Is it safe to use?',
                answer:
                  "Absolutely! We don't store your data and all downloads are processed securely.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='glass-card p-6 text-left'>
                <h3 className='font-bold text-white mb-3'>{faq.question}</h3>
                <p className='text-white/70 text-sm'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
