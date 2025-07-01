'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

interface LegalLayoutProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className='min-h-screen py-20 px-4'>
      <div className='container mx-auto max-w-4xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='text-gradient'>{title}</span>
          </h1>

          {/* Navigation */}
          <div className='flex justify-center gap-4 mb-8'>
            <Link
              href='/'
              className='glass-card-contrast px-6 py-3 rounded-xl text-white hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2'>
              <Home className='w-4 h-4' />
              Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className='glass-card-contrast px-6 py-3 rounded-xl text-white hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2'>
              <ArrowLeft className='w-4 h-4' />
              Back
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='glass-card-contrast p-8 md:p-12 prose prose-invert max-w-none'>
          {children}
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-12 text-center'>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='/privacy'
              className='text-white/70 hover:text-white transition-colors text-sm'>
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-white/70 hover:text-white transition-colors text-sm'>
              Terms of Service
            </Link>
            <Link href='/dmca' className='text-white/70 hover:text-white transition-colors text-sm'>
              DMCA
            </Link>
            <Link
              href='/contact'
              className='text-white/70 hover:text-white transition-colors text-sm'>
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
