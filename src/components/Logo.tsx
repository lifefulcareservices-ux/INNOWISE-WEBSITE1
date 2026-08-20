"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";

interface LogoProps {
  progress: MotionValue<number>;
  size?: number;
  className?: string;
}

export default function Logo({ progress, size = 28, className = "" }: LogoProps) {
  const whiteOpacity = useTransform(progress, [0, 1], [1, 0]);
  const purpleOpacity = useTransform(progress, [0, 1], [0, 1]);

  return (
    <span className={`relative inline-block shrink-0 ${className}`} style={{ width: size, height: size }}>
      <motion.span className="absolute inset-0" style={{ opacity: whiteOpacity }}>
        <Image src="/brand/logo-white.png" alt="" fill sizes={`${size}px`} className="object-contain" priority />
      </motion.span>
      <motion.span className="absolute inset-0" style={{ opacity: purpleOpacity }}>
        <Image src="/brand/logo-purple.png" alt="" fill sizes={`${size}px`} className="object-contain" priority />
      </motion.span>
    </span>
  );
}
