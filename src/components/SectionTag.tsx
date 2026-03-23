import { ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "success";
}

export default function SectionTag({ children, variant = "primary" }: SectionTagProps) {
  const colors = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full border ${colors[variant]}`}
    >
      {children}
    </span>
  );
}
