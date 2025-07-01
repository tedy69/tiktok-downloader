import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | TikTok Downloader',
  description:
    'Terms of Service for TikTok Downloader - Rules and conditions for using our service.',
};

export default function TermsPage() {
  return (
    <LegalLayout title='Terms of Service'>
      <div className='space-y-6 text-white/90 leading-relaxed'>
        <section>
          <p className='mb-6 text-lg'>
            Last updated: <strong>July 1, 2025</strong>
          </p>
          <p className='mb-6'>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of TikTok Downloader
            (&ldquo;Service&rdquo;) operated by us (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;).
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Acceptance of Terms</h2>
          <p className='text-white/80'>
            By accessing and using our service, you accept and agree to be bound by the terms and
            provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Use of the Service</h2>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold mb-2 text-white'>Permitted Use</h3>
            <ul className='list-disc list-inside space-y-2 text-white/80'>
              <li>Download TikTok videos for personal, non-commercial use</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Respect intellectual property rights of content creators</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 text-white'>Prohibited Use</h3>
            <ul className='list-disc list-inside space-y-2 text-white/80'>
              <li>Using the service for commercial purposes without permission</li>
              <li>Downloading copyrighted content without authorization</li>
              <li>Attempting to reverse engineer or hack the service</li>
              <li>Using automated scripts or bots to access the service</li>
              <li>Redistributing downloaded content without proper rights</li>
              <li>Using the service to violate any laws or regulations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Intellectual Property</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              The service and its original content, features, and functionality are owned by us and
              are protected by international copyright, trademark, patent, trade secret, and other
              intellectual property laws.
            </p>
            <p>
              Downloaded TikTok videos remain the property of their respective creators. Users are
              responsible for ensuring they have the right to download and use any content.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Content Responsibility</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              You are solely responsible for the content you choose to download using our service.
              We do not monitor, verify, or control the content that users download.
            </p>
            <p>
              You agree to only download content that you have the legal right to access and use
              according to applicable laws and TikTok&apos;s terms of service.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Service Availability</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              We strive to maintain the service but cannot guarantee 100% uptime. The service may be
              temporarily unavailable due to maintenance, updates, or technical issues.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue the service at any time
              without prior notice.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Disclaimers</h2>
          <div className='space-y-4 text-white/80'>
            <p>
              The service is provided &ldquo;as is&rdquo; without any warranties, express or
              implied. We do not warrant that the service will meet your requirements or be
              error-free.
            </p>
            <p>
              We are not affiliated with TikTok or ByteDance Ltd. TikTok is a trademark of ByteDance
              Ltd.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Limitation of Liability</h2>
          <p className='text-white/80'>
            In no event shall we be liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or
            other intangible losses resulting from your use of the service.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Indemnification</h2>
          <p className='text-white/80'>
            You agree to defend, indemnify, and hold us harmless from and against any claims,
            damages, obligations, losses, liabilities, costs, or debt, and expenses (including but
            not limited to attorney&apos;s fees) resulting from your use of the service.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Termination</h2>
          <p className='text-white/80'>
            We may terminate or suspend your access immediately, without prior notice or liability,
            for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Changes to Terms</h2>
          <p className='text-white/80'>
            We reserve the right to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days notice prior to any new terms taking
            effect.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Governing Law</h2>
          <p className='text-white/80'>
            These Terms shall be interpreted and governed by the laws of the jurisdiction in which
            we operate, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold text-gradient mb-4'>Contact Information</h2>
          <p className='text-white/80'>
            If you have any questions about these Terms, please contact us through our contact page.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
