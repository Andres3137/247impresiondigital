import type { SVGProps } from "react";

/**
 * Iconos de linea consistentes (viewBox 24x24, stroke 1.5).
 * Estilo unificado tipo Lucide para toda la interfaz.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** Gran formato: plotter de impresion con el pliego saliendo. */
export function IconLargeFormat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 7.5V5h11v2.5" />
      <rect x="2.5" y="7.5" width="19" height="6" rx="1.5" />
      <path d="M6 13.5V19h12v-5.5" />
      <path d="M8.5 16.5h7" />
    </svg>
  );
}

/** Avisos luminosos: caja de aviso sobre poste, emitiendo luz. */
export function IconLed(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.2 3.6l.9 1.5M12 2.4v1.9M17.8 3.6l-.9 1.5" />
      <rect x="3" y="7" width="18" height="8.5" rx="1.5" />
      <path d="M7.5 11.2h9" />
      <path d="M12 15.5V20M9 20h6" />
    </svg>
  );
}

/** Acrilico: placa con separadores en las esquinas y brillo diagonal. */
export function IconAcrylic(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <circle cx="7" cy="7" r="1.1" />
      <circle cx="17" cy="7" r="1.1" />
      <circle cx="7" cy="17" r="1.1" />
      <circle cx="17" cy="17" r="1.1" />
      <path d="M9.5 18.5L18 8" opacity="0.45" />
    </svg>
  );
}

export function IconSignage(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18" />
      <path d="M12 5h7l2.5 2.5L19 10h-7" />
      <path d="M12 12H5l-2.5 2.5L5 17h7" />
    </svg>
  );
}

/** Vinilos: vitrina de cristal con la grafica ya aplicada. */
export function IconVinyl(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="4" width="17" height="14" rx="1.5" />
      <path d="M12 4v14" opacity="0.35" />
      <path d="M5.5 18v2M18.5 18v2" />
      <path d="M6 14l2.5-3 1.8 2.2" />
      <path d="M14 14l2-2.4 2 2.4" />
    </svg>
  );
}

/** Fotomural: imagen a escala de muro, sin caballete ni marco. */
export function IconMural(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1" />
      <circle cx="7.5" cy="9" r="1.5" />
      <path d="M2.5 16.5l5-4.5 3.5 3 3.5-4 6 5.5" />
    </svg>
  );
}

export function IconSticker(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 12a8 8 0 1 0-8 8" />
      <path d="M20 12h-4a4 4 0 0 0-4 4v4" />
      <path d="M12 20c2-.5 6-2.2 8-8" opacity="0.5" />
    </svg>
  );
}

export function IconFrame(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <rect x="7.5" y="6.5" width="9" height="11" rx="0.5" />
    </svg>
  );
}

export function IconTextile(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8 3l4 2 4-2 4 3-3 3v10H7V9L4 6l4-3Z" />
    </svg>
  );
}

export function IconLaminate(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="9" width="18" height="6" rx="1" />
      <path d="M3 9l3-4h12l3 4M3 15l3 4h12l3-4" opacity="0.7" />
    </svg>
  );
}

/** Rotulacion: vehiculo con grafica aplicada en el costado. */
export function IconLettering(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2.5 16.5V9a1 1 0 0 1 1-1h8.5l3 3h6a.5.5 0 0 1 .5.5v5" />
      <path d="M2.5 16.5h1.7M7.8 16.5h6.4M17.8 16.5h3.7" />
      <circle cx="6" cy="16.8" r="1.8" />
      <circle cx="16" cy="16.8" r="1.8" />
      <path d="M5 12.2h4.5" opacity="0.55" />
    </svg>
  );
}

export function IconTools(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L4 17v3h3l5.4-5.3a4 4 0 0 0 5.3-5.4l-2.4 2.4-2-2 2.4-2.4Z" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconPrecision(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
    </svg>
  );
}

export function IconBolt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconChip(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

export function IconStar(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconWhatsapp(p: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 5 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3Z" />
      <path d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}
