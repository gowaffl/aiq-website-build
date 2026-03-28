import { ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "success";
}

const variantStyles = {
  primary: {
    text: "text-primary",
    strongLine: "bg-accent",
    mutedLine: "bg-primary/20",
  },
  accent: {
    text: "text-accent",
    strongLine: "bg-primary",
    mutedLine: "bg-accent/20",
  },
  success: {
    text: "text-success",
    strongLine: "bg-success",
    mutedLine: "bg-success/20",
  },
};

export default function SectionTag({ children, variant = "primary" }: SectionTagProps) {
  const cv = variantStyles[variant];

  return (
    <span className="inline-flex items-center gap-3">
      <span className={`block h-[1.5px] w-6 rounded-full flex-shrink-0 ${cv.strongLine}`} />
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.22em] leading-none whitespace-nowrap ${cv.text}`}
      >
        {children}
      </span>
      <span className={`block h-[1.5px] w-3 rounded-full flex-shrink-0 ${cv.mutedLine}`} />
    </span>
  );
}
