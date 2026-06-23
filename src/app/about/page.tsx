import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About TokSnap - Free TikTok Video Downloader',
  description: 'Learn about TokSnap, the free online TikTok video downloader trusted by millions worldwide. Our mission, features, and commitment to quality.',
  alternates: { canonical: 'https://toksnap.io/about' },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      <article className="py-12 space-y-6 text-muted leading-relaxed">
        <h1 className="text-4xl font-bold text-foreground"><span className="gradient-text">About TokSnap</span></h1>

        <p>TokSnap is a free, web-based tool designed to help users download TikTok videos without watermark quickly, safely, and in the highest available quality. Since our launch, TokSnap has grown to serve millions of users across 195 countries, becoming one of the most trusted TikTok downloading tools on the internet.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Our Mission</h2>
        <p>We believe everyone should be able to save and enjoy their favorite TikTok content offline, without barriers. TokSnap was built from the ground up with a focus on simplicity, performance, and user privacy. Our mission is to provide the fastest, most reliable, and easiest-to-use TikTok download experience available anywhere online, and to keep it completely free for everyone.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">What We Offer</h2>
        <p>TokSnap provides a comprehensive suite of TikTok downloading features, all accessible through your browser with no registration or software installation required:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Watermark-Free Video Downloads:</strong> Save TikTok videos in HD and Full HD quality without the TikTok watermark overlay, giving you clean videos for personal use.</li>
          <li><strong className="text-foreground">MP3 Audio Extraction:</strong> Extract audio from any TikTok video and save it as a high-quality MP3 file. Perfect for saving trending songs, original sounds, and voiceovers.</li>
          <li><strong className="text-foreground">Slideshow & Carousel Downloads:</strong> Download all images from TikTok photo slideshows and carousels in their original high resolution.</li>
          <li><strong className="text-foreground">Thumbnail Downloads:</strong> Save video thumbnails in high quality for reference or personal use.</li>
          <li><strong className="text-foreground">Universal Device Support:</strong> TokSnap works on every device and browser, including iPhone (Safari), Android (Chrome), Windows, Mac, and Linux.</li>
          <li><strong className="text-foreground">Completely Free:</strong> No hidden costs, no premium tiers, no download limits. TokSnap is and always will be free for all users.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground pt-4">Our Commitment to Privacy</h2>
        <p>We take your privacy seriously. TokSnap does not store any of your personal data, downloaded videos, or browsing history. All downloads are processed in real-time, and no files are retained on our servers after your session. We use encrypted HTTPS connections to protect your data in transit. You can read our full <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for detailed information about our data practices.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Available in 9 Languages</h2>
        <p>TokSnap is available in 9 languages to serve our global user base: English, Spanish, Portuguese, Indonesian, Vietnamese, French, German, Arabic, and Turkish. We are committed to making TokSnap accessible to users worldwide, regardless of their language preference.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Get in Touch</h2>
        <p>We value feedback from our users. Whether you have a question about TokSnap, a feature suggestion, or need support, we are here to help. Visit our <Link href="/contact" className="text-primary hover:underline">Contact page</Link> to reach out to our team, or email us directly at <strong className="text-foreground">contact@toksnap.io</strong>.</p>
      </article>
    </div>
  );
}
