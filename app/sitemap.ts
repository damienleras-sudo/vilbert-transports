import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vilbert-transports.fr";
  const routes = [
    "/",
    "/services",
    "/parc-vehicules",
    "/transport-exceptionnel",
    "/realisations",
    "/contact",
    "/a-propos",
    "/mentions-legales",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "/" ? 1 : 0.8,
  }));
}
