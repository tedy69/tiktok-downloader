'use client';

import { motion } from 'framer-motion';
import { Heart, ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative py-20 px-4 border-t border-white/10'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'>
          <h3 className='text-3xl font-bold text-gradient mb-4'>TikTok Downloader</h3>
          <p className='text-white/70 max-w-2xl mx-auto'>
            Download TikTok videos without watermark. Fast, free, and easy to use. Save your
            favorite TikTok content in high quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {/* Features */}
          <div className='glass-card p-6 text-center'>
            <h4 className='text-lg font-semibold text-white mb-4'>Features</h4>
            <ul className='space-y-2 text-white/70'>
              <li>No Watermark</li>
              <li>HD Quality</li>
              <li>Fast Download</li>
              <li>100% Free</li>
            </ul>
          </div>

          {/* Supported Formats */}
          <div className='glass-card p-6 text-center'>
            <h4 className='text-lg font-semibold text-white mb-4'>Formats</h4>
            <ul className='space-y-2 text-white/70'>
              <li>MP4 Video</li>
              <li>MP3 Audio</li>
              <li>HD Quality</li>
              <li>No Ads</li>
            </ul>
          </div>

          {/* Legal */}
          <div className='glass-card p-6 text-center'>
            <h4 className='text-lg font-semibold text-white mb-4'>Legal</h4>
            <ul className='space-y-2 text-white/70'>
              <li>
                <a href='/privacy' className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='/terms' className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='/dmca' className='hover:text-white transition-colors'>
                  DMCA
                </a>
              </li>
              <li>
                <a href='/contact' className='hover:text-white transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='flex justify-center gap-6 mb-8'>
          {[
            {
              icon: ExternalLink,
              href: 'https://github.com/tedy69/tiktok-downloader',
              label: 'GitHub',
            },
            { icon: MessageCircle, href: 'https://twitter.com/tedy_fazrin', label: 'Twitter' },
            { icon: Mail, href: 'mailto:gmail@tedyfazrin.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='glass w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors'
              aria-label={social.label}>
              <social.icon className='w-5 h-5' />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='text-center text-white/60 border-t border-white/10 pt-8'>
          <p className='flex flex-col items-center justify-center gap-2'>
            © {currentYear} TikTok Downloader. Made with{' '}
            <Heart className='w-4 h-4 text-red-400 fill-current' /> for the community
          </p>
          <p className='mt-2 text-sm'>
            This tool is not affiliated with TikTok. Use responsibly and respect content creators.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
