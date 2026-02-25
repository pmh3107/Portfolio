import { cn } from "@/components/ui/cn";
import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "rounded-strong border border-white/50 bg-white/60 p-6 shadow-frosted backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60",
        className,
      )}
    >
      {children}
    </article>
  );
}
