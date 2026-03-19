import type { Dictionary } from "@/i18n/get-dictionary";

interface FooterProps {
  dictionary: Dictionary;
  name: string;
  email: string;
  phone: string;
}

export function Footer({ dictionary, name, email, phone }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:px-6">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <p>{dictionary.footer.builtWith}</p>
        <p>
          {email} · {phone}
        </p>
      </div>
    </footer>
  );
}
