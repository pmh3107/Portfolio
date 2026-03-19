import { notFound } from "next/navigation";
import { getLocalizedPortfolio } from "@/application/portfolio/portfolio.service";
import type { Locale } from "@/domain/portfolio";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PortfolioPage } from "@/presentation/sections/PortfolioPage";

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const [profile, dictionary] = await Promise.all([getLocalizedPortfolio(locale), Promise.resolve(getDictionary(locale))]);

  return <PortfolioPage profile={profile} dictionary={dictionary} />;
}
