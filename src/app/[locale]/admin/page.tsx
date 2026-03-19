import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioProfile } from "@/application/portfolio/portfolio.service";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { AdminForm } from "@/presentation/admin/AdminForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.seo.adminTitle,
    description: dictionary.seo.adminDescription,
    robots: { index: false, follow: false },
  };
}

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const profile = await getPortfolioProfile();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold text-white">{dictionary.admin.title}</h1>
      <p className="mt-2 text-slate-300">{dictionary.admin.description}</p>
      <div className="mt-6">
        <AdminForm dictionary={dictionary} initialData={profile} />
      </div>
    </main>
  );
}
