import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions governing the use of the Innowise Solutions website and services.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-28 md:py-36 px-6">
      <div className="max-w-[800px] mx-auto">
        <Link href="/" className="inline-block text-brand text-sm font-semibold hover:opacity-70 transition-all duration-200 mb-8">&larr; Back to home</Link>
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-8 leading-tight">Terms &amp; Conditions</h1>
        <p className="text-black/45 text-xs mb-8">Last updated: January 2026</p>

        <div className="space-y-6 text-black/65 text-sm leading-relaxed">
          <section>
            <h2 className="text-black font-semibold text-base mb-3">1. Introduction</h2>
            <p>These Terms and Conditions govern your use of the Innowise Solutions website and the services we provide. By accessing our website or engaging our services, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">2. Our Services</h2>
            <p>Innowise Solutions Ltd provides technology consultancy, cloud infrastructure, cyber security, data analytics, managed IT support, and Microsoft Dynamics ERP services. All service engagements are governed by a separate Statement of Work (SoW) signed by both parties.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">3. Intellectual Property</h2>
            <p>All intellectual property rights in the deliverables produced during a project remain the property of Innowise Solutions Ltd until full payment is received. Upon receipt of payment, full ownership of deliverables is transferred to the client. Our pre-existing tools, methodologies, and frameworks remain our intellectual property.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">4. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of all proprietary information shared during the course of business. This obligation survives the termination of any agreement.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">5. Limitation of Liability</h2>
            <p>Innowise Solutions Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">6. Termination</h2>
            <p>Either party may terminate an engagement with 30 days written notice. In the event of a material breach, the non-breaching party may terminate immediately with written notice.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">7. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-black font-semibold text-base mb-3">8. Contact</h2>
            <p>For questions about these terms, contact us at Unit 112, The Dock, 75 Exploration Drive, Leicester LE4 5NU.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
