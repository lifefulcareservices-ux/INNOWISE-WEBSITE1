import type { MetadataRoute } from "next";

const siteUrl = "https://www.innowisesolutions.co.uk";

const routes = [
  "",
  "/about",
  "/services",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
