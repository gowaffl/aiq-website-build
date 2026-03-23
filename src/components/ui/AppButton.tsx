import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-300 ease-out cursor-pointer border-0 font-sans tracking-wide select-none";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-[18px] text-base",
  };

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_4px_15px_rgba(27,77,110,0.25)] hover:bg-accent hover:shadow-[0_8px_25px_rgba(232,118,58,0.35)] hover:-translate-y-0.5 active:translate-y-0",
    accent:
      "bg-accent text-accent-foreground shadow-[0_4px_15px_rgba(232,118,58,0.25)] hover:bg-accent-light hover:shadow-[0_8px_25px_rgba(232,118,58,0.4)] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
    white:
      "bg-white text-primary shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-gray-50 hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-primary hover:bg-primary/8 hover:-translate-y-0.5",
  };

  return (
    <button
      className={cn(base, sizes[size], variants[variant], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}
