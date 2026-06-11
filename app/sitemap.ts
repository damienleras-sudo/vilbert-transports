import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vilbert-transports.fr";
  const routes = [
    "/",
    "/services",
    "/parc-vehicules",
    "/transport-exceptionnel",
    "/realisations",
    "/blog",
    "/contact",
    "/a-propos",
    "/mentions-legales",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "/" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
