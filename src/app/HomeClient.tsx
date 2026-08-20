"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import CountUp from "@/components/CountUp";
import CtaBackground from "@/components/CtaBackground";
import ServiceIllustration from "@/components/ServiceIllustration";
import Reveal from "@/components/Reveal";
import { LayoutGrid, MessageSquare, ShieldCheck, Layers3 } from "lucide-react";
import { services, type Service } from "@/lib/services";
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

export default function HomeClient() {
  const prefersReduced = useReducedMotion();
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });
  const glowStrength = useTransform(scrollYProgress, (v) => (prefersReduced ? 0.25 : Math.sin(v * Math.PI)));
  const glowShadow = useTransform(glowStrength, (s) => {
    const a = 0.04 + s * 0.08;
    const b = 0.06 + s * 0.14;
    return `0 4px 10px -2px rgba(15,23,42,${a.toFixed(2)}), 0 12px 24px -8px rgba(15,23,42,${b.toFixed(2)})`;
  });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cardX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.5 });
  const cardY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.5 });

  function handleHeroPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(relX * -16);
    pointerY.set(relY * -12);
  }

  function handleHeroPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <>
      <section className="h-dvh p-2 md:p-2 overflow-hidden">
        <div
          className="relative w-full h-full rounded-xl md:rounded-2xl border border-white overflow-hidden"
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={handleHeroPointerLeave}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: prefersReduced ? 1 : 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "easeOut" }}
          >
            <Image
              src="/hero_bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/30" />

          <div className="relative z-10 w-full h-full px-4 md:pr-10 lg:pr-14 md:pl-4 lg:pl-6 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-10 lg:gap-12 md:pt-24 lg:pt-32">
            <div className="max-w-2xl lg:max-w-2xl lg:shrink-0">
              <h1 className="text-[clamp(2rem,6vw,6rem)] font-bold text-white tracking-tight leading-[0.9] sm:leading-[0.85] mb-3 md:mb-6">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
                    className="block"
                  >
                    AI-driven infrastructure.
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
                    className="block"
                  >
                    built for real business.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="text-[clamp(0.875rem,1.5vw,1.5rem)] text-white max-w-xl mb-8 md:mb-10 leading-relaxed"
              >
                From AI-powered cloud migrations and intelligent cybersecurity to smart ERP systems &mdash; we design, implement, and manage the technology that powers your growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="flex flex-wrap gap-4 pb-6 md:pb-0"
              >
                <MotionLink
                  href="/services"
                  {...ctaHover}
                  className="inline-block bg-brand text-white rounded-md font-medium text-[clamp(0.875rem,1.3vw,1.375rem)] px-6 py-2.5 md:px-8 md:py-3 hover:bg-brand-dark transition-colors duration-200"
                >
                  Explore Services
                </MotionLink>
                <MotionLink
                  href="/contact"
                  {...ctaHover}
                  className="inline-block border border-white/20 text-white rounded-lg text-[clamp(0.875rem,1.3vw,1.375rem)] px-6 py-2.5 md:px-8 md:py-3 hover:bg-white/5 transition-colors duration-200"
                >
                  Let&rsquo;s Talk
                </MotionLink>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
              className="hidden lg:block w-72 shrink-0"
            >
              <motion.div style={{ x: cardX, y: cardY }} className="flex flex-col gap-4">
                {[
                  { target: 98, suffix: "%", label: "Client retention rate" },
                  { target: 24, suffix: "/7", label: "Security monitoring" },
                  { target: 4, suffix: "hr", label: "Incident response time" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <p className="text-3xl font-mono font-semibold text-white">
                      <CountUp target={stat.target} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/65 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
            >
              <motion.div className="w-1 h-1 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
          </div>
      </section>

      <Reveal as="section" className="py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">
            About Us
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-2xl mb-6 leading-tight">
            Technology that works for your business.
          </h2>
          <p className="text-black/60 text-sm leading-relaxed max-w-3xl mb-12 md:mb-16">
            Founded in Leicester, Innowise Solutions has grown into a trusted technology partner for organisations across the UK and beyond. Our AI-driven approach helps businesses automate, optimise, and innovate across every layer of their IT stack.
          </p>

          <motion.div
            ref={featuresRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-2"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl shadow-card hover:shadow-card-hover hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 p-4 md:p-6"
              style={{ boxShadow: glowShadow }}
            >
              <div className="mb-4 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                <LayoutGrid size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-black font-semibold text-base mb-2">AI-powered delivery</h3>
              <p className="text-black/65 text-sm leading-relaxed">We combine AI-driven automation with deep engineering expertise to deliver faster, smarter, and with fewer surprises.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl shadow-card hover:shadow-card-hover hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 p-4 md:p-6 flex flex-col justify-center"
              style={{ boxShadow: glowShadow }}
            >
              <div className="mb-4 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                <MessageSquare size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-black font-semibold text-base mb-2">Intelligent Support</h3>
              <p className="text-black/65 text-sm leading-relaxed">Our AI-powered helpdesk resolves 80% of tickets without human escalation &mdash; average resolution time: 4 minutes.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl shadow-card hover:shadow-card-hover hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              style={{ boxShadow: glowShadow }}
            >
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center border-b border-gray-100">
                <div className="mb-4 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                  <ShieldCheck size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-black font-semibold text-base mb-2">AI-ready security</h3>
                <p className="text-black/65 text-sm leading-relaxed">Our AI-enhanced threat detection and response frameworks keep your infrastructure resilient and compliant.</p>
              </div>
              <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                <div className="mb-4 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                  <Layers3 size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-black font-semibold text-base mb-2">Continuous innovation</h3>
                <p className="text-black/65 text-sm leading-relaxed">We stay ahead of the curve so you do too &mdash; bringing AI capabilities and emerging tech into your roadmap.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Reveal>

      <Reveal as="section" id="stats" className="py-16 md:py-20 px-6 border-y border-gray-100 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-3xl mb-12 md:mb-16 leading-tight">
            Built on trust, proven in practice.
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {[
              { target: 98, suffix: "%", prefix: "", decimals: 0, desc: "Client retention rate year-on-year" },
              { target: 4, suffix: "hr", prefix: "", decimals: 0, desc: "Average critical incident response time" },
              { target: 24, suffix: "/7", prefix: "", decimals: 0, desc: "Security monitoring and SOC coverage" },
              { target: 0, suffix: "", prefix: "", decimals: 0, desc: "Cost overruns on fixed-scope projects" },
            ].map((stat) => (
              <motion.div
                key={stat.desc}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: "0 4px 10px -2px rgba(15,23,42,0.08), 0 12px 24px -8px rgba(15,23,42,0.10)",
                  borderColor: "rgba(209,213,219,1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20, mass: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl shadow-card p-4 md:p-6 group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-mono font-semibold text-brand-dark mb-2">
                  <CountUp target={stat.target} suffix={stat.suffix} prefix={stat.prefix || ""} decimals={stat.decimals || 0} />
                </div>
                <p className="text-black/55 group-hover:text-black/75 text-sm leading-relaxed transition-colors duration-300">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <MotionLink href="/contact" {...ctaHover} className={secondaryButton}>
            Start the Conversation &rarr;
          </MotionLink>
        </div>
      </Reveal>

      <Reveal as="section" id="services" className="py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-2xl mb-12 md:mb-16 leading-tight">
            AI-powered technology services that scale.
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </motion.div>
        </div>
      </Reveal>

      <Reveal as="section" id="cta" className="py-12 md:py-16 px-6">
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
          <CtaBackground />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-[1200px] mx-auto text-center px-6 py-10 md:py-14">
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
                Get in Touch
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors duration-300 cursor-pointer"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <ServiceIllustration slug={service.slug} colors={service.colors} />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <p className="text-white/90 text-xs uppercase tracking-widest font-medium">
            {service.title}
          </p>
        </div>
      </div>
      <div className="p-4 md:p-6 bg-white">
        <p className="text-black/65 text-sm leading-relaxed transition-colors duration-300">{service.shortDesc}</p>
      </div>
    </motion.div>
  );
}
