import { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'DMCA Policy | TikTok Downloader',
  description:
    'DMCA Policy for TikTok Downloader - Copyright takedown procedures and intellectual property protection.',
};

export default function DMCAPage() {
  return (
    <LegalLayout title='DMCA Policy'>
      <div className='space-y-6 text-white/90 leading-relaxed'>
        <section>
          <p className='mb-6 text-lg'>
            Last updated: <strong>July 1, 2025</strong>
          </p>
          <p className='mb-6'>
            TikTok Downloader respects the intellectual property rights of others and expects its
            users to do the same. We comply with the Digital Millennium Copyright Act
            (&ldquo;DMCA&rdquo;) and will respond to valid copyright infringement notices.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Copyright Infringement Notice</h2>
          <p className='mb-4'>
            If you believe that your copyrighted work has been copied in a way that constitutes
            copyright infringement and is accessible via our service, please notify us by providing
            the following information:
          </p>
          <ul className='list-disc pl-6 space-y-2 mb-6'>
            <li>A physical or electronic signature of the copyright owner or authorized agent</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>
              Identification of the material that is claimed to be infringing, including its
              location
            </li>
            <li>Your contact information (address, telephone number, and email address)</li>
            <li>A statement that you have a good faith belief that the use is not authorized</li>
            <li>
              A statement that the information is accurate and that you are authorized to act on
              behalf of the copyright owner
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Counter-Notification</h2>
          <p className='mb-4'>
            If you believe that your content was removed or access was disabled by mistake or
            misidentification, you may file a counter-notification containing:
          </p>
          <ul className='list-disc pl-6 space-y-2 mb-6'>
            <li>Your physical or electronic signature</li>
            <li>Identification of the material that was removed and its location before removal</li>
            <li>
              A statement under penalty of perjury that you have a good faith belief that the
              material was removed or disabled as a result of mistake or misidentification
            </li>
            <li>
              Your name, address, and telephone number, and a statement that you consent to the
              jurisdiction of the federal district court
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Designated Copyright Agent</h2>
          <p className='mb-4'>
            Please send DMCA notices and counter-notifications to our designated copyright agent:
          </p>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6'>
            <p className='mb-2'>
              <strong>Email:</strong> gmail@tedyfazrin.com
            </p>
            <p className='mb-2'>
              <strong>Subject Line:</strong> DMCA Notice - [Description]
            </p>
            <p>
              <strong>Response Time:</strong> We typically respond within 24-48 hours
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Repeat Infringers</h2>
          <p className='mb-6'>
            We reserve the right to terminate access to our service for users who are found to be
            repeat infringers of copyright. We may also remove content that we believe, in our sole
            discretion, infringes upon the intellectual property rights of others.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Fair Use</h2>
          <p className='mb-6'>
            Our service is designed to facilitate fair use of content, including but not limited to
            purposes such as criticism, comment, parody, news reporting, teaching, scholarship, or
            research. Users are responsible for ensuring their use of downloaded content complies
            with applicable copyright laws.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Limitation of Liability</h2>
          <p className='mb-6'>
            TikTok Downloader is a tool that allows users to download publicly available content. We
            do not host, store, or control the content that users access through our service. Users
            are solely responsible for their use of downloaded content and must comply with all
            applicable laws and platform terms of service.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Changes to This Policy</h2>
          <p className='mb-6'>
            We may update this DMCA Policy from time to time. Any changes will be posted on this
            page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4 text-white'>Contact Information</h2>
          <p className='mb-4'>
            If you have any questions about this DMCA Policy, please contact us:
          </p>
          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6'>
            <p className='mb-2'>
              <strong>Email:</strong> gmail@tedyfazrin.com
            </p>
            <p>
              <strong>Subject Line:</strong> DMCA Policy Inquiry
            </p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
