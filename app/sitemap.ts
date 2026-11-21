import type { MetadataRoute } from "next";
const base = "https://curakart.com";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/work", "/process", "/pricing", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
