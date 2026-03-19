"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/domain/portfolio";

const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(vi|en)/, "") || "/";

  return (
    <div className="inline-flex rounded-xl border border-white/20 bg-slate-900/70 p-1">
      {(["vi", "en"] as const).map((item) => (
        <Link
          key={item}
          href={`/${item}${pathWithoutLocale}`}
          className={`rounded-lg px-2 py-1 text-xs font-semibold ${
            item === locale ? "bg-cyan-500 text-slate-900" : "text-slate-200 hover:text-white"
          }`}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
