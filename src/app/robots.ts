import type { MetadataRoute } from "next";

const siteUrl = "https://www.innowisesolutions.co.uk";
const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : undefined,
      disallow: isProduction ? undefined : "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
