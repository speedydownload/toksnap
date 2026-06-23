import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - TokSnap',
  description: 'Get in touch with TokSnap for support, feedback, or business inquiries. We are here to help.',
  alternates: { canonical: 'https://toksnap.io/contact' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
      <article className="py-12 space-y-8 text-muted leading-relaxed">
        <h1 className="text-4xl font-bold text-foreground"><span className="gradient-text">Contact Us</span></h1>

        <p>We value your feedback and are here to help with any questions, concerns, or suggestions you may have about TokSnap. Whether you need technical support, want to report an issue, or have a business inquiry, please do not hesitate to reach out using the form below or through our direct email addresses.</p>

        {/* Visual Contact Form */}
        <div className="p-8 bg-card border border-border rounded-2xl space-y-6">
          <h2 className="text-xl font-bold text-foreground">Send Us a Message</h2>
          <form action="mailto:contact@toksnap.io" method="POST" encType="text/plain" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
              <select id="subject" name="subject" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback / Suggestion</option>
                <option value="business">Business Inquiry</option>
                <option value="dmca">DMCA / Copyright</option>
                <option value="bug">Bug Report</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-y" placeholder="Tell us how we can help..." />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#22D3EE] to-[#EC4899] rounded-xl hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 bg-card border border-border rounded-2xl">
            <h3 className="font-semibold text-foreground mb-2">General Inquiries</h3>
            <p className="text-primary text-sm">contact@toksnap.io</p>
            <p className="text-xs text-muted mt-2">For general questions, feedback, and support requests.</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-2xl">
            <h3 className="font-semibold text-foreground mb-2">DMCA & Copyright</h3>
            <p className="text-primary text-sm">dmca@toksnap.io</p>
            <p className="text-xs text-muted mt-2">For copyright takedown requests and IP-related concerns.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground pt-4">Response Time</h2>
        <p>We aim to respond to all inquiries within 24-48 hours during business days. For urgent copyright matters, please use the DMCA email address for faster processing. If you are experiencing a technical issue, please include details about your device, browser, and the TikTok URL you were trying to download to help us troubleshoot efficiently.</p>

        <h2 className="text-2xl font-bold text-foreground pt-4">Frequently Asked Questions</h2>
        <p>Before reaching out, you may find the answer to your question in our comprehensive <Link href="/faq" className="text-primary hover:underline">FAQ section</Link>. We cover common topics such as how to download videos, supported devices, MP3 extraction, and more.</p>

        <div className="pt-8 flex flex-wrap gap-3">
          <Link href="/" className="text-sm text-primary hover:underline">Home</Link>
          <Link href="/about" className="text-sm text-primary hover:underline">About Us</Link>
          <Link href="/faq" className="text-sm text-primary hover:underline">FAQ</Link>
          <Link href="/dmca" className="text-sm text-primary hover:underline">DMCA Policy</Link>
        </div>
      </article>
    </div>
  );
}
