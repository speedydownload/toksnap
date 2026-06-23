import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

import DynamicYear from '@/components/DynamicYear';

export const metadata: Metadata = {
  title: 'Terms of Service - TokSnap',
  description: 'TokSnap terms of service. Read the terms and conditions governing your use of the TokSnap TikTok video downloader.',
  alternates: { canonical: 'https://toksnap.io/terms' },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
      <article className="py-12 space-y-6 text-muted leading-relaxed">
        <h1 className="text-4xl font-bold text-foreground"><span className="gradient-text">Terms of Service</span></h1>
        <p><em>Last updated: January 1, <DynamicYear /></em></p>

        <p>Welcome to TokSnap.io. By accessing or using our website and services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service. These Terms constitute a legally binding agreement between you and TokSnap.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">1. Description of Service</h2>
        <p>TokSnap provides a free, web-based tool that allows users to download publicly available TikTok videos, extract audio in MP3 format, and save thumbnails and slideshow images. The Service is provided &quot;as is&quot; and is intended for personal, non-commercial use only. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without prior notice.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">2. Eligibility</h2>
        <p>You must be at least 13 years of age to use the Service. By using TokSnap, you represent and warrant that you meet this age requirement and that you have the legal capacity to enter into these Terms. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">3. Acceptable Use</h2>
        <p>When using TokSnap, you agree to the following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You will only download content that is publicly available on TikTok.</li>
          <li>You will respect the intellectual property rights of content creators and copyright holders.</li>
          <li>You will not use downloaded content for commercial purposes without obtaining proper authorization from the content owner.</li>
          <li>You will not use the Service to engage in any activity that is illegal, harmful, or violates the rights of others.</li>
          <li>You will not attempt to circumvent, disable, or interfere with any security or access-control features of the Service.</li>
          <li>You will not use automated scripts, bots, or other tools to access the Service in a manner that exceeds reasonable use.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground pt-4">4. Intellectual Property</h2>
        <p>All content downloaded through TokSnap remains the property of its respective creators and copyright holders. TokSnap does not claim ownership of any TikTok content processed through our Service. You are solely responsible for ensuring that your use of downloaded content complies with applicable copyright laws, TikTok&apos;s Terms of Service, and the rights of original creators. When sharing downloaded content, we strongly encourage you to credit the original creator.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">5. No Warranty</h2>
        <p>The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied. We do not warrant that the Service will be uninterrupted, error-free, secure, or available at all times. We do not guarantee the accuracy, completeness, or timeliness of any content processed through the Service. Download quality and availability depend on the original content and TikTok&apos;s platform.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, TokSnap and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service. This includes, but is not limited to, damages for loss of profits, data, goodwill, or other intangible losses, even if we have been advised of the possibility of such damages. Our total liability for any claims arising under these Terms shall not exceed the amount you paid to us (if any) for use of the Service.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">7. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless TokSnap, its operators, affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorney&apos;s fees) arising from or related to your use of the Service, your violation of these Terms, or your violation of any rights of third parties.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">8. Termination</h2>
        <p>We reserve the right to restrict or terminate your access to the Service at any time, for any reason, without prior notice or liability. All provisions of these Terms that by their nature should survive termination shall continue to apply, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">9. Changes to These Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting the updated Terms on this page with a revised &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">10. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through good-faith negotiation between the parties.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Contact</h2>
        <p>If you have questions about these Terms, please contact us at <strong className="text-foreground">contact@toksnap.io</strong>.</p>
      </article>
    </div>
  );
}
