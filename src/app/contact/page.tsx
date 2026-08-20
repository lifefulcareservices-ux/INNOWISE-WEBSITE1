"use client";

import { useActionState } from "react";
import { Check } from "lucide-react";

type State = {
  success?: boolean;
  error?: string;
  errors?: Record<string, string>;
};

const initialState: State = {};

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(
    async (_prev: State, formData: FormData) => {
      const { submitEnquiry } = await import("@/app/actions/submitEnquiry");
      return submitEnquiry(_prev, {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        company: formData.get("company") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
        honeypot: formData.get("website") as string,
      });
    },
    initialState
  );

  if (state.success) {
    return (
      <div className="min-h-screen">
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="lg:col-span-3">
              <div className="bg-brand border border-brand/20 rounded-xl p-8 md:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} strokeWidth={2} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Thank you</h2>
                <p className="text-white/65 text-sm max-w-md mx-auto leading-relaxed">
                  Your message has been received. One of our specialists will be in touch within one business day.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-block text-sm text-white/80 font-semibold hover:text-white transition-all duration-200"
                >
                  Send another message &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-6">Contact</p>
          <h1 className="text-[clamp(1.5rem,5vw,4.5rem)] font-bold text-black max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6">
            Let&rsquo;s talk about your next project.
          </h1>
          <p className="text-sm md:text-base text-black/65 max-w-xl mb-8 leading-relaxed">
            Tell us about your challenge. We&rsquo;ll listen, ask the right questions, and get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <form action={formAction} className="space-y-6">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs text-black/55 uppercase tracking-widest mb-2">Full Name *</label>
                    <input id="name" name="name" type="text" required
                      className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-black/50 outline-none focus:border-brand transition-all duration-200"
                      placeholder="Your name" />
                    {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-black/55 uppercase tracking-widest mb-2">Email *</label>
                    <input id="email" name="email" type="email" required
                      className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-black/50 outline-none focus:border-brand transition-all duration-200"
                      placeholder="your@email.com" />
                    {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs text-black/55 uppercase tracking-widest mb-2">Phone</label>
                    <input id="phone" name="phone" type="tel"
                      className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-black/50 outline-none focus:border-brand transition-all duration-200"
                      placeholder="+44" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-black/55 uppercase tracking-widest mb-2">Company</label>
                    <input id="company" name="company" type="text"
                      className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-black/50 outline-none focus:border-brand transition-all duration-200"
                      placeholder="Your company" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs text-black/55 uppercase tracking-widest mb-2">Service Interested In</label>
                  <select id="service" name="service"
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-black/65 outline-none focus:border-brand transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Partnered Services</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="data">Data & Analytics</option>
                    <option value="managed">Managed IT Support</option>
                    <option value="security">Cyber Security</option>
                    <option value="erp">Microsoft Dynamics ERP</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-black/55 uppercase tracking-widest mb-2">Message *</label>
                  <textarea id="message" name="message" rows={5} required
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-black/50 outline-none focus:border-brand transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, timeline, and budget..." />
                  {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>}
                </div>
                {state.error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
                    <p className="text-red-600 text-sm">{state.error}</p>
                  </div>
                )}
                <button type="submit" disabled={pending}
                  className="inline-block bg-brand text-white rounded-lg px-8 py-3 font-semibold text-sm hover:bg-brand-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pending ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-brand border border-brand/20 rounded-xl p-6 md:p-8 space-y-8">
                <div>
                  <p className="text-xs text-white/55 uppercase tracking-widest mb-3">Address</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Unit 112, The Dock<br />
                    75 Exploration Drive<br />
                    Leicester LE4 5NU
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/55 uppercase tracking-widest mb-3">Phone</p>
                  <a href="tel:+441162257865" className="text-white/90 text-sm font-semibold hover:text-white transition-all duration-200">
                    +44 116 225 7865
                  </a>
                </div>
                <div>
                  <p className="text-xs text-white/55 uppercase tracking-widest mb-3">Email</p>
                  <a href="mailto:hello@innowisesolutions.co.uk" className="text-white/90 text-sm font-semibold hover:text-white transition-all duration-200">
                    hello@innowisesolutions.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-xs text-white/55 uppercase tracking-widest mb-3">Response Time</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    We aim to respond to all enquiries within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
