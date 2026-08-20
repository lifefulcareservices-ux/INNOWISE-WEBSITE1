import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Innowise Solutions — how we use cookies and your choices.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-28 md:py-36 px-6">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="inline-block text-brand text-sm font-semibold hover:opacity-70 transition-all duration-200 mb-8">&larr; Back to home</Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-8 leading-tight">Cookie Policy</h1>
        <p className="text-black/45 text-xs mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-black/65 text-sm leading-relaxed">
          <section>
            <h2 className="text-black font-semibold text-base mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the site function properly, improve your experience, and provide analytics to the site owner.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">2. How We Use Cookies</h2>
            <p>We currently only use essential cookies required for the website to function. If we introduce analytics or other non-essential cookies in future, this policy will be updated in advance and your consent will be requested where required.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">3. Types of Cookies We Use</h2>
            <p><strong>Essential cookies:</strong> These are necessary for the website to work and cannot be switched off. They include session cookies and security cookies.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">4. Managing Cookies</h2>
            <p>Most browsers allow you to control cookies through your settings. You can block or delete cookies, but this may affect the functionality of our website. Instructions are typically found in your browser&rsquo;s Help section.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">5. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">6. Contact</h2>
            <p>If you have questions about our use of cookies, contact us at Innowise Solutions Ltd, Unit 112, The Dock, 75 Exploration Drive, Leicester LE4 5NU.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
