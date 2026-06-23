import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

import DynamicYear from '@/components/DynamicYear';

export const metadata: Metadata = {
  title: 'DMCA Policy - TokSnap',
  description: 'TokSnap DMCA policy for copyright takedown requests. Learn how to file a DMCA notice.',
  alternates: { canonical: 'https://toksnap.io/dmca' },
};

export default function DMCAPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'DMCA Policy' }]} />
      <article className="py-12 space-y-6 text-muted leading-relaxed">
        <h1 className="text-4xl font-bold text-foreground"><span className="gradient-text">DMCA Policy</span></h1>
        <p><em>Last updated: January 1, <DynamicYear /></em></p>

        <p>TokSnap respects the intellectual property rights of content creators and complies with the Digital Millennium Copyright Act (DMCA). This policy outlines how copyright holders can report alleged infringement and how TokSnap responds to valid DMCA notices.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">How TokSnap Works</h2>
        <p>TokSnap is a web-based tool that processes publicly available TikTok content in real-time. We do not host, store, or cache any TikTok videos, audio files, or images on our servers. When a user requests a download, TokSnap retrieves the content directly from TikTok&apos;s public servers, processes it, and delivers it to the user&apos;s device. No copies are retained on our infrastructure after the download is complete.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Filing a DMCA Takedown Notice</h2>
        <p>If you are a copyright owner or an authorized agent and believe that content accessible through TokSnap infringes your copyright, you may submit a DMCA takedown notice to our designated agent. Your notice must include the following information:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>A physical or electronic signature of the copyright owner or authorized agent.</li>
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Identification of the material that is claimed to be infringing, including the specific URL(s) or sufficient information to locate the material.</li>
          <li>Your contact information, including your name, mailing address, telephone number, and email address.</li>
          <li>A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground pt-4">Where to Send DMCA Notices</h2>
        <p>Send your DMCA takedown notices to our designated agent at: <strong className="text-foreground">dmca@toksnap.io</strong></p>
        <p>Please use the subject line &quot;DMCA Takedown Notice&quot; for efficient processing. We aim to review and respond to all valid DMCA notices within 48 hours of receipt.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Counter-Notification</h2>
        <p>If you believe that content was removed or disabled as a result of a mistake or misidentification, you may submit a counter-notification to our designated agent. Your counter-notification must include your contact information, identification of the material removed, a statement under penalty of perjury that you have a good faith belief the material was removed by mistake, and your consent to the jurisdiction of the applicable federal court.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Repeat Infringers</h2>
        <p>TokSnap maintains a policy of terminating access for users who are determined to be repeat infringers in appropriate circumstances. We take copyright infringement seriously and will act promptly on valid complaints.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Good Faith</h2>
        <p>Please note that under the DMCA, any person who knowingly misrepresents that material is infringing may be subject to liability for damages. Before filing a DMCA notice, please consider whether fair use, fair dealing, or a similar exception to copyright applies to the use in question.</p>
      </article>
    </div>
  );
}
