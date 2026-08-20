"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import ServiceIllustration from "./ServiceIllustration";
import { services, type Service } from "@/lib/services";

const cards = [services[1], services[4], services[5]];

function ScrollyCard({ card, index, total, scrollYProgress }: { card: Service; index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    isFirst ? [1, 0.92] : [0.92, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [0, 40]
  );

  return (
    <motion.div
      style={{ opacity, scale, y, willChange: "transform, opacity" }}
      className="absolute inset-0 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-card flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-[45%] h-[200px] md:h-auto shrink-0">
        <ServiceIllustration slug={card.slug} colors={card.colors} />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: card.colors[1] }}>{card.title}</p>
        <p className="text-black/65 text-sm leading-relaxed">{card.shortDesc}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesScrollytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative h-[160vh]">
      <div className="sticky top-0 h-dvh overflow-hidden bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-6 text-center">
            Built For Every Layer Of Your Stack
          </p>
          <div className="relative w-full" style={{ maxHeight: "min(60vh, 520px)", height: "60vh" }}>
            {cards.map((card, i) => (
              <ScrollyCard key={card.slug} card={card} index={i} total={cards.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
