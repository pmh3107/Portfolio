import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/vi", "/en"],
        disallow: ["/vi/admin", "/en/admin", "/api/admin"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
