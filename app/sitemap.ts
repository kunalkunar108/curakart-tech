import type { MetadataRoute } from "next";
const base = "https://curakart.com";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/services/website-development", "/technologies", "/portfolio", "/blog", "/process", "/pricing", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/services" || route === "/portfolio" ? 0.8 : 0.7 }));
}