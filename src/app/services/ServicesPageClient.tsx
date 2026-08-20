"use client";

import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import CtaBackground from "@/components/CtaBackground";
import ServiceIllustration from "@/components/ServiceIllustration";
import ServicesScrollytelling from "@/components/ServicesScrollytelling";
import Reveal from "@/components/Reveal";
import { Layers3, ShieldCheck, Eye, Check } from "lucide-react";
import { services } from "@/lib/services";
import { secondaryButton } from "@/lib/buttonStyles";

const MotionLink = motion.create(Link);

const containerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ctaHover = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-6"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-[clamp(1.5rem,5vw,4.5rem)] font-bold text-black max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6"
          >
            Everything your stack needs to perform.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-sm md:text-base text-black/65 max-w-xl mb-10 md:mb-12 leading-relaxed"
          >
            We go deep on your infrastructure, data, and interfaces &mdash; identifying exactly where performance breaks down and building the systems that hold under real pressure.
          </motion.p>

          <AllServicesTabs />
        </div>
      </section>

      <Reveal as="section" className="py-12 md:py-16 px-6 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-3xl mb-12 md:mb-16 leading-tight">
            Precision at every layer, from architecture to output.
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
          >
            {[
              {
                title: "Tailored to Your Business",
                desc: "Every solution is built from scratch for your specific needs. We don't retrofit templates or apply one-size-fits-all approaches.",
                badge: "System audit complete",
                icon: <Layers3 size={20} strokeWidth={1.75} />,
              },
              {
                title: "Enterprise-Grade Reliability",
                desc: "We prioritise long-term maintainability, security, and performance over short-term speed. Built to last from day one.",
                badge: "99.9% uptime guarantee",
                icon: <ShieldCheck size={20} strokeWidth={1.75} />,
              },
              {
                title: "Full Visibility & Control",
                desc: "Weekly reviews, live staging environments, open documentation, and direct access to your engineering team.",
                badge: "Always transparent",
                icon: <Eye size={20} strokeWidth={1.75} />,
              },
            ].map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="flex flex-col gap-4">
                <div className="mb-1 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">{item.icon}</div>
                <h3 className="text-black font-semibold text-base">{item.title}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{item.desc}</p>
                <div className="inline-flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-black/45 font-mono text-xs">{item.badge}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      <ServicesScrollytelling />

      <Reveal as="section" id="cta-services" className="py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
            <CtaBackground />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center px-6 py-10 md:py-14">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-4"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
              >
                Ready to get started?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white/70 text-sm max-w-lg mx-auto mb-8 leading-relaxed"
                style={{ textShadow: "0 1px 16px rgba(0,0,0,0.4)" }}
              >
                Tell us about your challenge and one of our specialists will be in touch within one business day.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MotionLink
                  href="/contact"
                  {...ctaHover}
                  className="inline-block bg-brand text-white rounded-lg px-8 py-3 font-semibold hover:bg-brand-dark transition-colors duration-200"
                >
                  Book a Consultation
                </MotionLink>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function AllServicesTabs() {
  const [active, setActive] = useState(0);
  const activeService = services[active];

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 bg-gray-100 rounded-full p-1.5 mb-10 md:mb-14 w-fit max-w-full">
        {services.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              i === active
                ? "bg-white text-black shadow-sm"
                : "text-black/55 hover:text-black hover:bg-white/60"
            }`}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: s.colors[1] }}
              aria-hidden="true"
            />
            {s.title}
          </button>
        ))}
      </div>

      <motion.div layout transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            <div>
              <p className="text-black/65 text-sm leading-relaxed mb-6">
                {activeService.fullDesc}
              </p>
              <div className="space-y-3 mb-8">
                {activeService.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: activeService.colors[1] }}>
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-black/65 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <MotionLink href="/contact" {...ctaHover} className={secondaryButton}>
                Discuss Your Project
              </MotionLink>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-gray-900 border border-gray-200">
              <ServiceIllustration slug={activeService.slug} colors={activeService.colors} />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
