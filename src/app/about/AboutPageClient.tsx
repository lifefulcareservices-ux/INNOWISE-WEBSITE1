"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import CtaBackground from "@/components/CtaBackground";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";
import DitherGradient from "@/components/DitherGradient";
import { Users, Code2, Eye } from "lucide-react";

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

const cardClass =
  "bg-white border border-gray-200 rounded-xl shadow-card hover:shadow-card-hover hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function AboutPageClient() {
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 overflow-hidden">
        <SectionGlow />
        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-6"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="text-[clamp(1.5rem,5vw,4.5rem)] font-bold text-black max-w-3xl leading-[0.9] sm:leading-[0.85] mb-4 md:mb-6"
            >
              Technology partner built for growth.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-sm md:text-base text-black/65 max-w-xl mb-8 leading-relaxed"
            >
              Founded in Leicester, we help organisations across the UK automate, secure, and scale their IT operations with AI-driven solutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}>
              <MotionLink
                href="/contact"
                {...ctaHover}
                className="inline-block bg-brand text-white rounded-md px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-colors duration-200"
              >
                Get in touch
              </MotionLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-card">
              <DitherGradient colors={["#2E1047", "#4A236F", "#9333EA"]} />
              {!heroImageError && (
                <Image
                  src="/about/hero.png"
                  alt="Innowise Solutions team"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="absolute inset-0 object-cover"
                  onError={() => setHeroImageError(true)}
                />
              )}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl shadow-card-hover px-5 py-4">
              <p className="text-2xl font-mono font-semibold text-brand-dark">12+</p>
              <p className="text-black/55 text-xs">Years in business</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <Reveal as="section" className="py-12 md:py-16 px-6 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-2xl mb-6 leading-tight">
                From a simple idea to a trusted technology partner.
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-black/65 text-sm leading-relaxed">
                Innowise Solutions was founded in Leicester with a straightforward belief: technology should work for people, not the other way around. What started as a small IT consultancy has grown into a trusted partner for organisations across the UK, from local enterprises to national institutions.
              </p>
              <p className="text-black/65 text-sm leading-relaxed">
                We specialise in AI-powered cloud infrastructure, cyber security, data analytics, managed IT support, and Microsoft Dynamics ERP. Every engagement starts with understanding your business first and technology second.
              </p>
              <p className="text-black/65 text-sm leading-relaxed">
                Today we serve clients across healthcare, finance, education, local government, and the private sector. We remain independently owned and headquartered in Leicester, where we continue to invest in local talent and long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* VALUES */}
      <Reveal as="section" className="py-16 md:py-20 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">Our Values</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-3xl mb-12 md:mb-16 leading-tight">
            Built on trust, delivered with integrity.
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Client-First Approach",
                desc: "We measure success by outcomes, not hours. Every recommendation is made with your business objectives in mind.",
                icon: <Users size={20} strokeWidth={1.75} />,
              },
              {
                title: "Engineering Excellence",
                desc: "We hire for depth. Our team brings real engineering experience across cloud, security, data, and ERP. No shortcuts, no cookie-cutter solutions.",
                icon: <Code2 size={20} strokeWidth={1.75} />,
              },
              {
                title: "Transparency First",
                desc: "Weekly updates, live staging, clear documentation, and direct access to your engineering team. No black boxes, no surprises.",
                icon: <Eye size={20} strokeWidth={1.75} />,
              },
            ].map((value) => (
              <motion.div key={value.title} variants={itemVariants} className={`${cardClass} p-6 md:p-8`}>
                <div className="mb-4 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">{value.icon}</div>
                <h3 className="text-black font-semibold text-base mb-3">{value.title}</h3>
                <p className="text-black/65 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* TEAM */}
      <Reveal as="section" className="py-12 md:py-16 px-6 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">Leadership</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black max-w-2xl mb-6 leading-tight">
            Meet the team behind the technology.
          </h2>
          <p className="text-black/65 text-sm leading-relaxed max-w-2xl mb-12">
            Our leadership team brings together decades of experience across cloud engineering, cyber security, and enterprise systems.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Umakanth Reddy", role: "Director", image: "/team/umakanth-reddy.jpg" },
              { name: "Deepti Reddy", role: "Director", image: "/team/deepti-reddy.jpg" },
              { name: "Fahim Sahib", role: "Chief Manager", image: "/team/fahim-sahib.jpg" },
              { name: "Hulash Chand", role: "Principal Architect", image: null },
            ].map((person) => (
              <motion.div key={person.name} variants={itemVariants} className={`${cardClass} p-6 md:p-8 text-center`}>
                {person.image ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden relative mx-auto mb-4 ring-1 ring-black/5">
                    <Image src={person.image} alt={person.name} fill sizes="80px" className="object-cover" />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-brand/10 text-brand-dark font-mono font-semibold text-2xl flex items-center justify-center mx-auto mb-4">
                    {initials(person.name)}
                  </div>
                )}
                <p className="text-black font-semibold text-sm mb-1">{person.name}</p>
                <p className="text-black/55 text-sm">{person.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* STATS */}
      <Reveal as="section" className="py-16 md:py-20 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { number: "12+", label: "Years in business" },
              { number: "200+", label: "Projects delivered" },
              { number: "98%", label: "Client retention" },
              { number: "24/7", label: "Security monitoring" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className={`${cardClass} p-6 text-center`}>
                <p className="text-4xl md:text-5xl font-mono font-semibold text-brand-dark mb-2">{stat.number}</p>
                <p className="text-black/55 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal as="section" className="py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
            <CtaBackground />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center px-6 py-10 md:py-14">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
                Let&rsquo;s build something together.
              </h2>
              <p className="text-white/70 text-sm max-w-lg mx-auto mb-8 leading-relaxed" style={{ textShadow: "0 1px 16px rgba(0,0,0,0.4)" }}>
                Tell us about your challenge and one of our specialists will be in touch within one business day.
              </p>
              <MotionLink
                href="/contact"
                {...ctaHover}
                className="inline-block bg-brand text-white rounded-lg px-8 py-3 font-semibold hover:bg-brand-dark transition-colors duration-200"
              >
                Start a conversation
              </MotionLink>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
