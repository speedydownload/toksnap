import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

import DynamicYear from '@/components/DynamicYear';

export const metadata: Metadata = {
  title: 'Privacy Policy - TokSnap',
  description: 'TokSnap privacy policy. Learn how we handle your data when using our TikTok video downloader. GDPR and CCPA compliant.',
  alternates: { canonical: 'https://toksnap.io/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <article className="py-12 space-y-6 text-muted leading-relaxed">
        <h1 className="text-4xl font-bold text-foreground"><span className="gradient-text">Privacy Policy</span></h1>
        <p><em>Last updated: January 1, <DynamicYear /></em></p>

        <p>At TokSnap (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting the privacy and security of every user who visits toksnap.io (the &quot;Service&quot;). This Privacy Policy explains in detail what information we collect, how we use it, and what rights you have regarding your data. By using our Service, you agree to the collection and use of information in accordance with this policy.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Information We Collect</h2>
        <p><strong className="text-foreground">URLs Submitted for Processing:</strong> When you use TokSnap, you submit TikTok video URLs for download processing. These URLs are used solely to fetch the requested content from TikTok&apos;s servers and generate download links for you. We do not permanently store the URLs you submit, the videos you download, or any related content. All processing happens in real-time, and no data is retained after your download session ends.</p>

        <p><strong className="text-foreground">Automatically Collected Log Data:</strong> Like most web services, our servers automatically collect certain technical information when you visit TokSnap. This may include your IP address, browser type and version, operating system, referring page URL, pages visited on our site, time and date of your visit, and time spent on each page. This data is collected for analytics, security monitoring, and service improvement purposes.</p>

        <p><strong className="text-foreground">Cookies and Similar Technologies:</strong> TokSnap uses essential cookies to maintain your preferences, such as your selected theme (light or dark mode). We may also use analytics cookies from third-party providers (such as Google Analytics) to understand how visitors interact with our website. These analytics cookies help us identify popular features, detect usability issues, and improve our service. You can control cookie settings through your browser preferences at any time.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and operate the TokSnap download service</li>
          <li>To process your video download requests in real-time</li>
          <li>To analyze website traffic and usage patterns for service improvements</li>
          <li>To detect and prevent abuse, fraud, or security threats</li>
          <li>To maintain and improve the performance of our servers and infrastructure</li>
          <li>To comply with applicable laws and legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground pt-4">Data Storage and Retention</h2>
        <p>TokSnap does not permanently store any downloaded videos, audio files, images, or user-submitted URLs on our servers. All content is processed in real-time and delivered directly to your device. Server log data (IP addresses, access logs) may be retained for up to 30 days for security and analytics purposes before being automatically deleted.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Third-Party Services</h2>
        <p>We may use third-party services for analytics (such as Google Analytics), content delivery (CDN providers), and advertising. These third-party providers may collect information about your visits to our site through their own cookies and tracking technologies. We encourage you to review the privacy policies of any third-party services that may be active on our site.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Your Rights Under GDPR</h2>
        <p>If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These rights include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Right of Access:</strong> You can request information about the personal data we hold about you.</li>
          <li><strong className="text-foreground">Right to Rectification:</strong> You can request correction of inaccurate or incomplete data.</li>
          <li><strong className="text-foreground">Right to Erasure:</strong> You can request deletion of your personal data.</li>
          <li><strong className="text-foreground">Right to Restrict Processing:</strong> You can request that we limit how we use your data.</li>
          <li><strong className="text-foreground">Right to Data Portability:</strong> You can request a copy of your data in a machine-readable format.</li>
          <li><strong className="text-foreground">Right to Object:</strong> You can object to our processing of your personal data.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground pt-4">Your Rights Under CCPA</h2>
        <p>If you are a California resident, the California Consumer Privacy Act (CCPA) grants you additional rights, including the right to know what personal information is collected, the right to request deletion of personal information, and the right to opt out of the sale of personal information. TokSnap does not sell personal information to third parties.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Children&apos;s Privacy</h2>
        <p>TokSnap is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information promptly.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Security Measures</h2>
        <p>We implement industry-standard security measures to protect your data, including HTTPS encryption for all data transmission, secure server infrastructure, and regular security audits. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify users of significant changes by updating the &quot;Last updated&quot; date at the top of this page. We encourage you to review this Privacy Policy periodically.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at <strong className="text-foreground">contact@toksnap.io</strong>. We will respond to all legitimate inquiries within 30 days.</p>
      </article>
    </div>
  );
}
