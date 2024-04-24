import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: "https://jobplanet-frontend-jungminlee.vercel.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  return routes;
}
