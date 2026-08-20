import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Innowise Solutions",
    short_name: "Innowise",
    description:
      "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4A236F",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
