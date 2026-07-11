import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul corporativo profundo (base marca)
        navy: {
          950: "#050e1c",
          900: "#0a1628",
          800: "#0e2038",
          700: "#0a2540",
        },
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bcdcff",
          300: "#8ec6ff",
          400: "#59a6ff",
          500: "#3183fb",
          600: "#1565c0",
          700: "#134fa0",
          800: "#164285",
          900: "#173a6e",
        },
        // Cian del logotipo (acento)
        cyan: {
          300: "#5ff0ff",
          400: "#22dff5",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-chakra)", "var(--font-sora)", "sans-serif"],
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,37,64,0.04), 0 12px 32px -12px rgba(10,37,64,0.18)",
        "card-hover": "0 4px 8px rgba(10,37,64,0.06), 0 24px 48px -16px rgba(21,101,192,0.28)",
        glow: "0 0 0 1px rgba(6,182,212,0.25), 0 20px 60px -20px rgba(6,182,212,0.45)",
      },
      keyframes: {
        // La pista se duplica: al recorrer la mitad, el bucle es invisible.
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 70s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
