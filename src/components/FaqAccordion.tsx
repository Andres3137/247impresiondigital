"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Chevron dibujado, no icono importado: gira 180° al abrir. */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
      className={`shrink-0 transition-transform duration-300 ease-out ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M6 9.5l6 6 6-6" />
    </svg>
  );
}

export function FaqAccordion() {
  // Un solo panel abierto a la vez: la lectura no compite consigo misma.
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const uid = useId();

  return (
    <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-button-${i}`;

        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors duration-200"
              >
                <span
                  className={`font-heading text-base font-semibold transition-colors duration-200 sm:text-lg ${
                    isOpen ? "text-brand-600" : "text-navy-900 group-hover:text-brand-600"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                    isOpen
                      ? "border-brand-200 bg-brand-50 text-brand-600"
                      : "border-slate-200 text-slate-400 group-hover:border-brand-200 group-hover:text-brand-600"
                  }`}
                >
                  <Chevron open={isOpen} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : {
                          height: { duration: 0.42, ease: EASE },
                          // La opacidad entra despues y sale antes que la altura:
                          // evita ver el texto comprimido a mitad del recorrido.
                          opacity: { duration: 0.25, delay: isOpen ? 0.1 : 0 },
                        }
                  }
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pr-14 text-[0.95rem] leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
