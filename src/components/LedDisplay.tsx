import { Fragment } from "react";

/**
 * Display de siete segmentos vectorial, diseñado como extensión de la
 * identidad de 24/7 Impresión Digital (no es una copia del logotipo).
 *
 * Sistema:
 * - Cada segmento es una barra hexagonal con cortes diagonales a 45°.
 * - Los segmentos apagados permanecen visibles a muy baja opacidad,
 *   como en un display real: aporta profundidad y lectura tecnológica.
 * - La barra "/" comparte el lenguaje de cortes diagonales.
 * - Itálica mediante skewX, heredada del logotipo.
 *
 * Es SVG puro: nítido a cualquier resolución, sin dependencias.
 */

// --- Métrica del sistema -------------------------------------------------
const DW = 58; // ancho de dígito
const DH = 104; // alto de dígito
const T = 6.4; // media anchura del segmento
const K = 4; // separación en las uniones (corte diagonal)
const TRACK = 16; // interletraje
const SKEW = -11; // inclinación itálica en grados

type SegKey = "A" | "B" | "C" | "D" | "E" | "F" | "G";

/** Barra horizontal: dos puntas en diagonal a 45°. */
const hBar = (y0: number): string =>
  [
    [K, y0],
    [K + T, y0 - T],
    [DW - K - T, y0 - T],
    [DW - K, y0],
    [DW - K - T, y0 + T],
    [K + T, y0 + T],
  ]
    .map((p) => p.join(","))
    .join(" ");

/** Barra vertical: mismas puntas diagonales, girada 90°. */
const vBar = (x0: number, y1: number, y2: number): string =>
  [
    [x0, y1 + K],
    [x0 + T, y1 + K + T],
    [x0 + T, y2 - K - T],
    [x0, y2 - K],
    [x0 - T, y2 - K - T],
    [x0 - T, y1 + K + T],
  ]
    .map((p) => p.join(","))
    .join(" ");

const SEGMENTS: Record<SegKey, string> = {
  A: hBar(T),
  G: hBar(DH / 2),
  D: hBar(DH - T),
  F: vBar(T, 0, DH / 2),
  B: vBar(DW - T, 0, DH / 2),
  E: vBar(T, DH / 2, DH),
  C: vBar(DW - T, DH / 2, DH),
};

const SEG_ORDER: SegKey[] = ["A", "B", "C", "D", "E", "F", "G"];

const DIGITS: Record<string, SegKey[]> = {
  "0": ["A", "B", "C", "D", "E", "F"],
  "1": ["B", "C"],
  "2": ["A", "B", "G", "E", "D"],
  "3": ["A", "B", "G", "C", "D"],
  "4": ["F", "G", "B", "C"],
  "5": ["A", "F", "G", "C", "D"],
  "6": ["A", "F", "G", "E", "C", "D"],
  "7": ["A", "B", "C"],
  "8": ["A", "B", "C", "D", "E", "F", "G"],
  "9": ["A", "B", "C", "D", "F", "G"],
};

// --- Barra "/" con el mismo lenguaje de cortes ---------------------------
const SLASH_W = 29;
const SLASH = "16,0 24,0 28.24,4.94 13.76,99.06 8,104 0,104";

const glyphWidth = (ch: string) => (ch === "/" ? SLASH_W : DW);

interface LedDisplayProps {
  /** Dígitos 0-9 y "/". */
  value?: string;
  className?: string;
  /** Ignición escalonada al montar + respiración lenta del glow. */
  animated?: boolean;
  /** Id único si se renderizan varios en la misma página. */
  id?: string;
}

export function LedDisplay({
  value = "24/7",
  className = "",
  animated = true,
  id = "led",
}: LedDisplayProps) {
  const chars = value.split("");

  // Avance acumulado de cada glifo.
  const offsets: number[] = [];
  let cursor = 0;
  for (const ch of chars) {
    offsets.push(cursor);
    cursor += glyphWidth(ch) + TRACK;
  }
  const contentW = cursor - TRACK;

  // La itálica desplaza la base hacia la izquierda; se compensa al trasladar.
  const lean = Math.abs(Math.tan((SKEW * Math.PI) / 180)) * DH;
  const padX = 12;
  const padY = 10;
  const viewW = contentW + lean + padX * 2;
  const viewH = DH + padY * 2;

  const gradId = `${id}-grad`;

  let segIndex = 0;

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      role="img"
      aria-label={value}
      className={`${animated ? "led-display" : ""} ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="#7df3ff" />
          <stop offset="55%" stopColor="#22dff5" />
          <stop offset="100%" stopColor="#3183fb" />
        </linearGradient>
      </defs>

      <g transform={`translate(${padX + lean}, ${padY}) skewX(${SKEW})`}>
        {chars.map((ch, i) => {
          const x = offsets[i];

          if (ch === "/") {
            const delay = segIndex++ * 0.055;
            return (
              <g key={i} transform={`translate(${x}, 0)`}>
                <polygon
                  points={SLASH}
                  className="led-on"
                  fill={`url(#${gradId})`}
                  style={{ animationDelay: `${delay}s` }}
                />
              </g>
            );
          }

          const on = DIGITS[ch] ?? [];
          return (
            <g key={i} transform={`translate(${x}, 0)`}>
              {SEG_ORDER.map((seg) => {
                const isOn = on.includes(seg);
                const delay = isOn ? segIndex++ * 0.055 : 0;
                return (
                  <Fragment key={seg}>
                    {/* Segmento apagado: siempre presente, casi imperceptible. */}
                    {!isOn && <polygon points={SEGMENTS[seg]} className="led-off" />}
                    {isOn && (
                      <polygon
                        points={SEGMENTS[seg]}
                        className="led-on"
                        fill={`url(#${gradId})`}
                        style={{ animationDelay: `${delay}s` }}
                      />
                    )}
                  </Fragment>
                );
              })}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
