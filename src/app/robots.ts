import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const prefix = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

  return {
    rules: [
      {
        userAgent: "*",
        allow: [`${prefix}/`, `${prefix}/vi`, `${prefix}/en`],
        disallow: [`${prefix}/vi/admin`, `${prefix}/en/admin`, `${prefix}/api/admin`],
      },
    ],
    sitemap: `${siteUrl}${prefix}/sitemap.xml`,
  };
}
