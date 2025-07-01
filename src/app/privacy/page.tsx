import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | TikTok Downloader',
  description:
    'Privacy Policy for TikTok Downloader - Learn how we protect your privacy and handle your data.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title='Privacy Policy'>
      <div className='space-y-6 text-white/90 leading-relaxed'>
        <section>
          <p className='mb-6 text-lg'>
            Last updated: <strong>July 1, 2025</strong>
          </p>
          <p className='mb-6'>
            This Privacy Policy describes how TikTok Downloader (&ldquo;we&rdquo;,
            &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and protects your information
            when you use our service.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Information We Collect</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-xl font-semibold mb-2 text-white'>Information You Provide</h3>
              <ul className='list-disc list-inside space-y-2 text-white/80'>
                <li>TikTok video URLs that you submit for downloading</li>
                <li>Any contact information you voluntarily provide</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Automatically Collected Information
              </h3>
              <ul className='list-disc list-inside space-y-2 text-white/80'>
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>How We Use Your Information</h2>
          <ul className='list-disc list-inside space-y-2 text-white/80'>
            <li>To provide and maintain our service</li>
            <li>To process your download requests</li>
            <li>To improve our service and user experience</li>
            <li>To detect and prevent abuse or technical issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Data Storage and Security</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              We do not store TikTok videos on our servers. Our service processes download requests
              in real-time and does not retain copies of downloaded content.
            </p>
            <p>
              We implement appropriate security measures to protect your information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              TikTok URLs you submit are processed temporarily and are not permanently stored in our
              systems.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Third-Party Services</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              Our service may use third-party APIs to fetch TikTok video information. These services
              may have their own privacy policies and terms of service.
            </p>
            <p>
              We do not share your personal information with third parties except as necessary to
              provide our service or as required by law.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Cookies and Tracking</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              We may use cookies and similar technologies to enhance your browsing experience and
              analyze usage patterns.
            </p>
            <p>You can control cookie settings through your browser preferences.</p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Your Rights</h2>
          <ul className='list-disc list-inside space-y-2 text-white/80'>
            <li>Right to access your personal information</li>
            <li>Right to correct inaccurate information</li>
            <li>Right to delete your information</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Children&apos;s Privacy</h2>
          <p className='text-white/80'>
            Our service is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Changes to This Policy</h2>
          <p className='text-white/80'>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &ldquo;Last
            updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Contact Us</h2>
          <p className='text-white/80'>
            If you have any questions about this Privacy Policy, please contact us through our
            contact page.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
