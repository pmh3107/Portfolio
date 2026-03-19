export function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-2xl border border-cyan-100/25 bg-white/10 px-2.5 py-1 text-xs font-medium text-cyan-100 transition hover:border-cyan-100/45 hover:text-white">
      {text}
    </span>
  );
}
