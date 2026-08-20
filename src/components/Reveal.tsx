"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  className?: string;
  id?: string;
}

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 30,
  duration = 0.6,
  once = true,
  margin = "-100px",
  className,
  id,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as as "div"];
  const transition: Transition = { duration, delay, ease: "easeOut" };

  return (
    <MotionTag
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once, margin }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
