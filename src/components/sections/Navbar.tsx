"use client";

import { Menu, MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["AI Assistant", "ai-assistant"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const initial = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", initial);
    setDark(initial);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#hero" className="font-semibold text-primary">Phan Minh Hiển</a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {links.map(([label, id]) => (
              <li key={id}><a className="hover:text-primary" href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="rounded-soft border border-slate-300 p-2 dark:border-slate-700">
            {dark ? <Sun size={16} /> : <MoonStar size={16} />}
          </button>
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-soft border border-slate-300 p-2 md:hidden dark:border-slate-700">
            <Menu size={16} />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-800" aria-label="Mobile navigation">
          <ul className="space-y-2 text-sm">
            {links.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
