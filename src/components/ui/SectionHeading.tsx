export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? <p className="max-w-3xl text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
