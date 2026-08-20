"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
