import { locales, type Locale } from "@/domain/portfolio";

export const defaultLocale: Locale = "vi";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
