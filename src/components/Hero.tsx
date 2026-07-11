"use client";

import { motion } from "framer-motion";
import { HeroCarousel } from "./HeroCarousel";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { IconArrowRight, IconCheck, IconWhatsapp } from "./Icons";
import { whatsappLink } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.08 },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Columna de texto */}
          <div className="max-w-2xl">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="kicker-invert block"
            >
              +12 años de experiencia · Colombia
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Publicidad visual que
              <br className="hidden sm:block" /> se ve{" "}
              <span className="text-gradient">profesional</span>
              <span className="mt-3 block font-display text-lg font-medium italic tracking-wide text-cyan-300/90 sm:text-xl">
                Impresión · Fabricación · Instalación
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80"
            >
              Gran formato, avisos luminosos LED, acrílico, señalización, vinilos y
              rotulación. Convertimos tu marca en piezas que se notan, con precisión
              y acabados que perduran.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#cotizar" variant="primary" size="lg">
                Solicitar cotización
                <IconArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button
                href={whatsappLink}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <IconWhatsapp className="h-5 w-5 text-cyan-300" />
                Escríbenos por WhatsApp
              </Button>
            </motion.div>

            <motion.ul
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap gap-x-6 gap-y-2"
            >
              {["Diseño propio", "Materiales premium", "Instalación incluida"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-brand-100/70">
                  <IconCheck className="h-4 w-4 text-cyan-400" />
                  {f}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Columna visual: evidencia del trabajo, sin tarjeta contenedora */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative w-full"
          >
            <HeroCarousel />
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
