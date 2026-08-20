import type { Metadata } from "next";
import { Raleway, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.innowisesolutions.co.uk";
const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Innowise Solutions — Technology with purpose.",
    template: "%s | Innowise Solutions",
  },
  description: "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Innowise Solutions — Technology with purpose.",
    description: "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
    url: siteUrl,
    siteName: "Innowise Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innowise Solutions — Technology with purpose.",
    description: "AI-powered cloud, cybersecurity, ERP, and managed IT services for forward-thinking organisations.",
  },
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Innowise Solutions",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-116-225-7865",
      contactType: "sales",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 112, The Dock, 75 Exploration Drive",
    addressLocality: "Leicester",
    postalCode: "LE4 5NU",
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <BackToTop />
      </body>
    </html>
  );
}
