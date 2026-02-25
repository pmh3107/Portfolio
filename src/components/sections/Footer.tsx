import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {portfolioData.name}. Built with mindfulness.</p>
        <p>{portfolioData.contact.email} · {portfolioData.contact.phone}</p>
      </div>
    </footer>
  );
}
