import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Innowise Solutions — how we collect, use, and protect your personal data.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-28 md:py-36 px-6">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="inline-block text-brand text-sm font-semibold hover:opacity-70 transition-all duration-200 mb-8">&larr; Back to home</Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-8 leading-tight">Privacy Policy</h1>
        <p className="text-black/45 text-xs mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-black/65 text-sm leading-relaxed">
          <section>
            <h2 className="text-black font-semibold text-base mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email address, phone number, company name, and any details you share via our contact form. We do not currently use analytics or tracking cookies; this policy will be updated in advance if that changes.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">2. How We Use Your Information</h2>
            <p>We use your information to respond to enquiries, deliver services, send relevant communications about your projects, and improve our website. We do not sell personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">3. Data Storage and Security</h2>
            <p>Your data is stored securely within the UK and European Economic Area. We implement appropriate technical measures to protect your personal information against unauthorised access, alteration, or disclosure.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">4. Your Rights</h2>
            <p>Under UK data protection law, you have the right to access, rectify, or erase your personal data. You may also restrict or object to processing. To exercise these rights, contact us at the address below.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">5. Cookies</h2>
            <p>Our website currently uses only essential cookies for functionality. You can manage cookie preferences through your browser settings. See our Cookie Policy for details.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">6. Third-Party Links</h2>
            <p>Our website may link to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">7. Contact</h2>
            <p>Innowise Solutions Ltd, Unit 112, The Dock, 75 Exploration Drive, Leicester LE4 5NU. Email: hello@innowisesolutions.co.uk</p>
          </section>
        </div>
      </div>
    </div>
  );
}
