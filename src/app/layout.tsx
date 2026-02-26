import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ParticleFieldBackground } from "@/components/visual/ParticleFieldBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${portfolioData.name} | ${portfolioData.title}`,
  description: portfolioData.tagline,
  openGraph: {
    title: `${portfolioData.name} | Smart AI Portfolio`,
    description: portfolioData.tagline,
    images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: `${portfolioData.name} portfolio` }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.title,
    email: portfolioData.contact.email,
    address: { "@type": "PostalAddress", addressLocality: portfolioData.location },
    sameAs: portfolioData.links.map((item) => item.url),
  };

  return (
    <html lang="vi">
      <body className="bg-white text-slate-100 dark:bg-slate-950 dark:text-slate-100">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-soft focus:bg-slate-900 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <ParticleFieldBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
