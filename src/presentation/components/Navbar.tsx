import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/domain/portfolio";
import { LocaleSwitcher } from "@/presentation/components/LocaleSwitcher";

interface NavbarProps {
  locale: Locale;
  dictionary: Dictionary;
  name: string;
}

export function Navbar({ locale, dictionary, name }: NavbarProps) {
  const links = [
    { label: dictionary.nav.about, href: "#about" },
    { label: dictionary.nav.projects, href: "#projects" },
    { label: dictionary.nav.experience, href: "#experience" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide text-white">
          {name}
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-slate-200">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-cyan-200">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-cyan-200" href={`/${locale}/admin`}>
                {dictionary.nav.admin}
              </Link>
            </li>
          </ul>
        </nav>
        <LocaleSwitcher locale={locale} />
      </div>
    </header>
  );
}
