interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}

export function SectionTitle({ eyebrow, title, description, id }: SectionTitleProps) {
  return (
    <header className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 max-w-3xl text-slate-300">{description}</p> : null}
    </header>
  );
}
