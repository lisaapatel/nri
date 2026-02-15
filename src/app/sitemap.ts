import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nrisolutions.us";
  const base = baseUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

