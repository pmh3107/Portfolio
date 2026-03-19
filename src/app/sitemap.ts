import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

  return [
    {
      url: `${siteUrl}${prefix}/vi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}${prefix}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
