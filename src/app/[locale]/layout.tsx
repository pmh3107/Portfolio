import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalizedPortfolio } from "@/application/portfolio/portfolio.service";
import type { Locale } from "@/domain/portfolio";
import { locales } from "@/domain/portfolio";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Footer } from "@/presentation/components/Footer";
import { Navbar } from "@/presentation/components/Navbar";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);
  const profile = await getLocalizedPortfolio(locale);

  return {
    title: `${profile.name} | ${dictionary.seo.homeTitle}`,
    description: dictionary.seo.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        vi: "/vi",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale,
      title: `${profile.name} | ${profile.title}`,
      description: profile.tagline,
      images: [{ url: "/og-cover.svg", width: 1200, height: 630, alt: profile.avatar.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} | ${profile.title}`,
      description: profile.tagline,
      images: ["/og-cover.svg"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const profile = await getLocalizedPortfolio(locale);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-slate-800 focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Navbar locale={locale} dictionary={dictionary} name={profile.name} />
      {children}
      <Footer dictionary={dictionary} name={profile.name} email={profile.contact.email} phone={profile.contact.phone} />
    </>
  );
}
