"use client";

import Image from "next/image";

interface ServiceIllustrationProps {
  slug: string;
  colors: [string, string, string];
  className?: string;
}

const PHOTOS: Record<string, string> = {
  ai: "/services/ai.png",
  cloud: "/services/cloud.png",
  data: "/services/data.png",
  "managed-it": "/services/managed-it.png",
  security: "/services/security.png",
  erp: "/services/erp.png",
};

export default function ServiceIllustration({ slug, colors, className = "" }: ServiceIllustrationProps) {
  const [c0, , c2] = colors;
  const photo = PHOTOS[slug];

  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${c0} 0%, ${c2} 100%)` }}
    >
      {photo && (
        <Image
          src={photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      )}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ background: `linear-gradient(160deg, ${c0}66 0%, ${c2}33 100%)` }}
      />
    </div>
  );
}
