import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

import DynamicYear from '@/components/DynamicYear';

export const metadata: Metadata = {
  title: 'Disclaimer - TokSnap',
  description: 'TokSnap disclaimer and legal information. Understand the limitations and responsibilities when using our TikTok video downloader.',
  alternates: { canonical: 'https://toksnap.io/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />
      <article className="py-12 space-y-6 text-muted leading-relaxed">
        <h1 className="text-4xl font-bold text-foreground"><span className="gradient-text">Disclaimer</span></h1>
        <p><em>Last updated: January 1, <DynamicYear /></em></p>

        <h2 className="text-2xl font-bold text-foreground pt-4">No Affiliation with TikTok</h2>
        <p>TokSnap.io is an independent, third-party online tool and is <strong className="text-foreground">not affiliated with, endorsed by, sponsored by, or in any way officially connected with ByteDance Ltd., TikTok, or any of their subsidiaries or affiliates</strong>. The names &quot;TikTok&quot; and &quot;ByteDance&quot; as well as related names, marks, emblems, and images are registered trademarks of their respective owners. Any use of these trademarks on TokSnap.io is solely for identification and reference purposes.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">User Responsibility</h2>
        <p>Users are solely responsible for how they use the content downloaded through TokSnap. By using our Service, you acknowledge and agree that you will respect the intellectual property rights of all content creators and copyright holders. You should not reproduce, distribute, or commercially exploit downloaded content without obtaining explicit permission from the original creator. TokSnap is intended for personal, offline viewing and content backup purposes only.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Content Accuracy</h2>
        <p>The information provided on TokSnap.io, including blog posts, guides, and FAQ content, is provided for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of any information on the site.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Limitation of Liability</h2>
        <p>TokSnap and its operators shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our Service. This includes, but is not limited to, any loss or damage resulting from reliance on information provided on the site, any interruption or cessation of the Service, or any copyright claims arising from your use of downloaded content. You use the Service entirely at your own risk.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">External Links</h2>
        <p>TokSnap.io may contain links to external websites that are not operated by us. We have no control over the content, privacy policies, or practices of any third-party sites and assume no responsibility for them. We encourage you to review the terms and privacy policies of any external websites you visit through links on our site.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Service Availability</h2>
        <p>TokSnap does not guarantee uninterrupted or error-free operation of the Service. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without prior notice. Download availability and quality depend on TikTok&apos;s platform and the original content, which are outside our control.</p>
      </article>
    </div>
  );
}
