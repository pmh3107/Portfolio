import type { Locale } from "@/domain/portfolio";
import vi from "@/i18n/dictionaries/vi";
import en from "@/i18n/dictionaries/en";

const dictionaries = { vi, en };

export type Dictionary = typeof vi;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
