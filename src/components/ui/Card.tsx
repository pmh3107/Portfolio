import { cn } from "@/components/ui/cn";
import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-white/20 bg-black/25 p-6 text-slate-100 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/35",
        className,
      )}
    >
      {children}
    </article>
  );
}
