import { cn } from "@/components/ui/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-soft px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        variant === "primary"
          ? "bg-primary text-white hover:opacity-90"
          : "border border-slate-300 bg-white/60 text-slate-800 hover:border-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100",
        className,
      )}
      {...props}
    />
  );
}
