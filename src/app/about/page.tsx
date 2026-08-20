import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description: "Founded in Leicester, Innowise Solutions is a trusted technology partner specialising in AI-powered cloud, cyber security, and ERP services.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
