export function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-soft border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
      {text}
    </span>
  );
}
