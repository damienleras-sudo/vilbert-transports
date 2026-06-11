import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const base = "https://www.vilbert-transports.fr";

// Use a stable recent date for static pages rather than new Date() to avoid
// unnecessary cache busting on every build.
const SITE_UPDATED = new Date("2025-06-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const priority1: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const priority09: MetadataRoute.Sitemap = [
    "/transport-exceptionnel",
    "/parc-vehicules",
    "/services",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const priority09geo: MetadataRoute.Sitemap = [
    "/transport-hauts-de-france",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const priority085: MetadataRoute.Sitemap = [
    "/transport-amiens",
    "/transport-abbeville",
    "/transport-peronne",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const priority08: MetadataRoute.Sitemap = [
    "/contact",
    "/realisations",
    "/a-propos",
    "/blog",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const priority03: MetadataRoute.Sitemap = [
    "/sitemap-html",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  const priority06: MetadataRoute.Sitemap = [
    "/mentions-legales",
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // /politique-de-confidentialite and /conditions-generales are noindex — excluded from sitemap

  return [...priority1, ...priority09, ...priority09geo, ...priority085, ...priority08, ...blogEntries, ...priority06, ...priority03];
}
