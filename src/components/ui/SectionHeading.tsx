import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

/** Encabezado de seccion reutilizable: kicker + titulo + descripcion. */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  invert = false,
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {kicker && <span className={invert ? "kicker-invert" : "kicker"}>{kicker}</span>}
      <h2
        className={`font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          invert ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            invert ? "text-brand-100/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
