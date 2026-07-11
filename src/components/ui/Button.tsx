import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";
/** "none" cede el control de padding/tipografia/duracion al consumidor. */
type Size = "md" | "lg" | "none";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-[0_10px_30px_-8px_rgba(21,101,192,0.55)] hover:shadow-[0_16px_40px_-10px_rgba(21,101,192,0.7)] hover:brightness-[1.05]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-card",
  white:
    "bg-white text-navy-900 shadow-card hover:shadow-card-hover",
  ghost:
    "border border-brand-200 bg-white/60 text-brand-700 hover:border-brand-300 hover:bg-brand-50 backdrop-blur",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm duration-200",
  lg: "px-7 py-3.5 text-base duration-200",
  none: "",
};

/** Boton/enlace de accion. Usado como <a> para navegacion y CTAs. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  );
}
