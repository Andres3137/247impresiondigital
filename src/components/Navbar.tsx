"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";
import { IconArrowRight } from "./Icons";
import { navLinks } from "@/lib/data";

/**
 * Umbrales con histeresis: el navbar se condensa al pasar CONDENSE_AT y solo
 * vuelve a expandirse por debajo de EXPAND_AT. La banda muerta entre ambos es
 * ancha a proposito: el estado se fija una sola vez y no reacciona al scroll
 * pixel a pixel, asi la transicion nunca se reinicia a mitad de camino.
 */
const CONDENSE_AT = 76;
const EXPAND_AT = 36;

export function Navbar() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const evaluate = () => {
      const y = window.scrollY;
      setCondensed((prev) => (prev ? y > EXPAND_AT : y > CONDENSE_AT));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menu movil esta abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/*
        Envoltorio propio en lugar de <Container>: necesita animar su
        max-width, y la clase base de Container ya fija una (ganaria por
        orden de hoja de estilo, no por orden en el atributo class).
        Al encogerse, justify-between recoge logo y boton hacia el menu.
      */}
      <div
        className={`nav-ease mx-auto w-full container-px transition-[max-width,padding-top] ${
          condensed ? "max-w-5xl pt-2 sm:pt-3" : "max-w-container pt-4 sm:pt-6"
        }`}
      >
        <nav
          className={`glass glass-nav flex items-center justify-between gap-4 rounded-2xl ${
            condensed
              ? "glass-nav--condensed px-3 py-2.5 sm:px-4"
              : "px-4 py-4 sm:px-7"
          }`}
          aria-label="Navegación principal"
        >
          <a
            href="#inicio"
            className="inline-flex cursor-pointer items-center"
            aria-label="24/7 Impresión Digital - Inicio"
          >
            <Logo
              priority
              className={`nav-ease transition-[height] ${
                condensed ? "h-9 sm:h-[2.625rem]" : "h-10 sm:h-12"
              }`}
            />
          </a>

          <ul
            className={`nav-ease hidden items-center transition-[gap] lg:flex ${
              condensed ? "gap-0.5" : "gap-2"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                {/* text-size fijo: animar font-size re-rasteriza el texto cada frame. */}
                <a
                  href={link.href}
                  className={`nav-ease block rounded-full text-[0.9375rem] font-medium text-brand-100/75 transition-[padding,background-color,color] hover:bg-white/10 hover:text-white ${
                    condensed ? "px-4 py-2" : "px-5 py-2.5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center lg:flex">
            {/*
              Altura explicita en vez de padding vertical: el boton comparte eje y
              medida con el logo (48px -> 42px), y su texto queda centrado por el
              propio flex en cualquier punto de la transicion.
            */}
            <Button
              href="#cotizar"
              variant="primary"
              size="none"
              className={`nav-ease text-[0.9375rem] leading-none ${
                condensed ? "h-[2.625rem] px-5" : "h-12 px-7"
              }`}
            >
              Cotizar ahora
              <IconArrowRight className="h-[1.15rem] w-[1.15rem] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-all duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div
              className={`nav-ease mx-auto mt-2 w-full container-px transition-[max-width] ${
                condensed ? "max-w-5xl" : "max-w-container"
              }`}
            >
              <div className="glass glass-nav glass-nav--condensed rounded-2xl p-3">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-brand-100/85 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <Button
                  href="#cotizar"
                  variant="primary"
                  size="lg"
                  className="mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  Cotizar ahora
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
