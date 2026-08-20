import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description: "AI-powered cloud, cybersecurity, ERP, data analytics and managed IT services for UK organisations. Scalable technology solutions tailored to your business.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
