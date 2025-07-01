import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Contact Us | TikTok Downloader',
  description:
    'Contact TikTok Downloader - Get in touch with our team for support, feedback, or inquiries.',
};

export default function ContactPage() {
  return (
    <LegalLayout title='Contact Us'>
      <div className='space-y-8 text-white/90 leading-relaxed'>
        <section>
          <p className='mb-6 text-lg'>
            We&rsquo;d love to hear from you! Whether you have questions, feedback, or need support,
            our team is here to help.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6 text-white'>Get In Touch</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-xl font-semibold mb-4 text-white'>General Support</h3>
              <p className='mb-4'>Need help with downloads or have technical questions?</p>
              <div className='space-y-2'>
                <p>
                  <strong>Email:</strong> gmail@tedyfazrin.com
                </p>
                <p>
                  <strong>Response Time:</strong> Usually within 24 hours
                </p>
              </div>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-xl font-semibold mb-4 text-white'>Business Inquiries</h3>
              <p className='mb-4'>Partnerships, collaborations, or business-related questions?</p>
              <div className='space-y-2'>
                <p>
                  <strong>Email:</strong> gmail@tedyfazrin.com
                </p>
                <p>
                  <strong>Response Time:</strong> Usually within 2-3 business days
                </p>
              </div>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-xl font-semibold mb-4 text-white'>Legal Matters</h3>
              <p className='mb-4'>DMCA notices, copyright issues, or legal concerns?</p>
              <div className='space-y-2'>
                <p>
                  <strong>Email:</strong> gmail@tedyfazrin.com
                </p>
                <p>
                  <strong>Response Time:</strong> Usually within 48 hours
                </p>
              </div>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-xl font-semibold mb-4 text-white'>Bug Reports</h3>
              <p className='mb-4'>Found a bug or experiencing technical issues?</p>
              <div className='space-y-2'>
                <p>
                  <strong>Email:</strong> gmail@tedyfazrin.com
                </p>
                <p>
                  <strong>Response Time:</strong> Usually within 12-24 hours
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6 text-white'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                How do I download a TikTok video?
              </h3>
              <p>
                Simply paste the TikTok video URL into our download form on the homepage and click
                &ldquo;Download&rdquo;. Our tool will process the video and provide you with
                download options.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-lg font-semibold mb-3 text-white'>Is this service free?</h3>
              <p>
                Yes! Our TikTok downloader is completely free to use. There are no hidden fees,
                subscriptions, or premium features.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                What video quality options are available?
              </h3>
              <p>
                We provide the best available quality from the original TikTok video, typically in
                HD (720p or 1080p) when available.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                Can I download videos without watermarks?
              </h3>
              <p>
                Yes, our service provides options to download TikTok videos without the TikTok
                watermark when available.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                Is it legal to download TikTok videos?
              </h3>
              <p>
                You should only download videos for personal use and respect the original
                creator&rsquo;s copyright. Make sure you have permission for any commercial use.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
              <h3 className='text-lg font-semibold mb-3 text-white'>
                Why isn&rsquo;t my video downloading?
              </h3>
              <p>
                Make sure the TikTok URL is correct and the video is public. Private videos cannot
                be downloaded. If issues persist, contact our support team.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6 text-white'>Submit Feedback</h2>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <p className='mb-4'>
              We&rsquo;re constantly working to improve our service. Your feedback helps us make
              TikTok Downloader better for everyone.
            </p>
            <div className='space-y-2'>
              <p>
                <strong>Email:</strong> gmail@tedyfazrin.com
              </p>
              <p>
                <strong>Subject suggestions:</strong>
              </p>
              <ul className='list-disc pl-6 space-y-1 mt-2'>
                <li>Feature Request: [Your suggestion]</li>
                <li>UI/UX Feedback: [Your thoughts]</li>
                <li>General Feedback: [Your message]</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6 text-white'>Response Times</h2>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <p className='mb-4'>We strive to respond to all inquiries promptly:</p>
            <ul className='space-y-2'>
              <li>
                <strong>Critical Issues:</strong> Within 12 hours
              </li>
              <li>
                <strong>General Support:</strong> Within 24 hours
              </li>
              <li>
                <strong>Business Inquiries:</strong> Within 2-3 business days
              </li>
              <li>
                <strong>Feature Requests:</strong> Within 3-5 business days
              </li>
            </ul>
            <p className='mt-4 text-sm text-white/70'>
              <em>Note: Response times may be longer during weekends and holidays.</em>
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6 text-white'>Before You Contact Us</h2>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <p className='mb-4'>To help us assist you faster, please include:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>A clear description of your issue or question</li>
              <li>The TikTok URL you&rsquo;re trying to download (if applicable)</li>
              <li>Your browser and operating system information</li>
              <li>Any error messages you&rsquo;ve encountered</li>
              <li>Steps you&rsquo;ve already tried to resolve the issue</li>
            </ul>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
