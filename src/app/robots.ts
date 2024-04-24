import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Yeti",
        allow: "/",
      },
    ],
    sitemap: "https://jobplanet-frontend-jungminlee.vercel.app/sitemap.xml",
  };
}
