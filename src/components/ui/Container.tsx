import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Ancho maximo y padding horizontal consistentes en toda la landing. */
export function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-container container-px ${className}`}>
      {children}
    </Tag>
  );
}
