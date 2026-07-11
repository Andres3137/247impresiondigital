"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroProjects } from "@/lib/projects";
import { IconArrowRight } from "./Icons";

const AUTOPLAY_MS = 7000;
const COUNT = heroProjects.length;

/*
 * Coreografia en tres fases. Sin ella las seis tarjetas comparten transicion y
 * la entrante invade el centro mientras la saliente todavia lo ocupa.
 *
 *   0ms    260ms        360ms                    ~1080ms
 *   |------ sale -------|
 *          |----------- entra ------------------|
 *                  |--- resto se reacomoda -----|
 *
 * LEAD (260ms) es el tiempo que la saliente necesita para despejar el centro:
 * a esa altura de su curva ya recorrio ~45% del camino hacia el lateral.
 */
const LEAVE = { duration: 0.62, ease: [0.4, 0, 0.2, 1] } as const;
const ENTER = { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.26 } as const;
const REFLOW = { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.36 } as const;

/** Bloqueo de reentrada: hasta que la saliente despeje, un clic nuevo cortaria la fase. */
const LOCK_MS = 620;

/** Distancia con signo al slide activo, envuelta en el rango [-n/2, n/2]. */
function wrappedOffset(index: number, active: number) {
  let o = index - active;
  if (o > COUNT / 2) o -= COUNT;
  if (o < -COUNT / 2) o += COUNT;
  return o;
}

/**
 * Posicion 3D por distancia al centro.
 *
 * La central manda: escala 100%, opacidad plena y nitidez absoluta. Las laterales
 * retroceden en Z, asoman poco (x bajo), pierden opacidad y reciben un desenfoque
 * leve. El desenfoque es lo que convierte una pila de tarjetas en profundidad real:
 * el ojo lee lo borroso como lejano antes de procesar la escala.
 */
function depth(o: number) {
  const dir = Math.sign(o);
  const d = Math.abs(o);
  if (d === 0)
    return { x: "0%", rotateY: 0, scale: 1, z: 0, opacity: 1, filter: "blur(0px)" };
  if (d === 1)
    return {
      x: `${dir * 44}%`,
      rotateY: -dir * 22,
      scale: 0.83,
      z: -230,
      opacity: 0.42,
      filter: "blur(2.5px)",
    };
  if (d === 2)
    return {
      x: `${dir * 74}%`,
      rotateY: -dir * 28,
      scale: 0.66,
      z: -380,
      opacity: 0.12,
      filter: "blur(5px)",
    };
  return {
    x: `${dir * 96}%`,
    rotateY: -dir * 28,
    scale: 0.6,
    z: -460,
    opacity: 0,
    filter: "blur(6px)",
  };
}

function Caption({ title, description }: { title: string; description: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent p-5 pt-14 sm:p-6 sm:pt-16">
      <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">{title}</h3>
      <p className="mt-1 text-sm leading-snug text-brand-100/75">{description}</p>
    </div>
  );
}

export function HeroCarousel() {
  /** `prev` guarda quien ocupaba el centro: define que tarjeta hace la fase de salida. */
  const [nav, setNav] = useState({ active: 0, prev: -1 });
  const { active, prev } = nav;
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const busyUntil = useRef(0);

  const advance = useCallback((step: number) => {
    setNav((s) => ({ active: (s.active + step + COUNT) % COUNT, prev: s.active }));
  }, []);

  /** Navegacion manual: ignora clics que cortarian la fase de salida en curso. */
  const go = useCallback((next: number) => {
    const now = performance.now();
    if (now < busyUntil.current) return;
    busyUntil.current = now + LOCK_MS;
    setNav((s) => {
      const target = ((next % COUNT) + COUNT) % COUNT;
      return target === s.active ? s : { active: target, prev: s.active };
    });
  }, []);

  // Autoplay: se detiene con hover, foco, pestaña oculta o Hero fuera de vista.
  useEffect(() => {
    if (paused || !visible || reduce) return;
    const id = setInterval(() => advance(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, visible, reduce, advance]);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(node);

    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  /**
   * Cada tarjeta recibe la transicion de su papel en ESTE cambio, no una global.
   * Asi la saliente arranca sola, la entrante espera a que despeje el centro y
   * el resto cierra la reacomodacion.
   */
  const transitionFor = (i: number) => {
    if (reduce || prev < 0) return { duration: 0 }; // sin movimiento / primer render
    if (i === prev) return LEAVE;
    if (i === active) return ENTER;
    return REFLOW;
  };

  // El desplazamiento lateral vive en esta <section> y no en el <motion.div> que
  // la envuelve en Hero.tsx: framer escribe `transform` en linea para animar
  // scale/y, y aplastaria cualquier translate-x que viniera de una clase.
  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Trabajos realizados"
      className="relative w-full lg:translate-x-[5.5rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      {/* ---------- Escenario 3D (escritorio) ---------- */}
      <div
        ref={stageRef}
        className="relative mx-auto hidden aspect-[4/3] w-full max-w-[25rem] lg:block"
        style={{ perspective: "1500px" }}
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {heroProjects.map((project, i) => {
            const o = wrappedOffset(i, active);
            const isActive = o === 0;
            const pose = depth(o);

            // Apilado por papel: la entrante manda, la saliente viaja por encima
            // del resto mientras despeja, y las demas se ordenan por distancia.
            // El zIndex nunca se anima: cambia de golpe, sin solape visible.
            return (
              <motion.div
                key={project.slug}
                className="absolute inset-0"
                style={{
                  zIndex: isActive
                    ? COUNT + 1
                    : i === prev
                      ? COUNT
                      : COUNT - Math.abs(o),
                }}
                animate={pose}
                transition={transitionFor(i)}
              >
                <button
                  type="button"
                  onClick={() => !isActive && go(i)}
                  tabIndex={isActive ? -1 : 0}
                  aria-label={isActive ? undefined : `Ver ${project.title}`}
                  aria-hidden={Math.abs(o) > 2}
                  className={`relative block h-full w-full overflow-hidden rounded-3xl ring-1 ring-white/10 ${
                    isActive
                      ? "cursor-default shadow-[0_40px_90px_-40px_rgba(2,8,20,0.9)]"
                      : "cursor-pointer shadow-[0_30px_70px_-40px_rgba(2,8,20,0.8)]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    placeholder="blur"
                    sizes="25rem"
                    className="object-cover"
                  />
                  {/* Reflejo discreto en el borde superior */}
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent"
                    aria-hidden
                  />
                  {/* Velo tenue: la profundidad ya la dan el desenfoque y la opacidad */}
                  {!isActive && (
                    <span className="pointer-events-none absolute inset-0 bg-navy-950/25" aria-hidden />
                  )}
                  <Caption title={project.title} description={project.description} />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/*
        ---------- Carrusel horizontal (movil / tablet) ----------
        Lista aparte en vez de detectar el viewport en JS: asi no hay desajuste
        de hidratacion. Cada lista se oculta con CSS en el otro breakpoint y sus
        imagenes, al quedar en display:none, no llegan a descargarse.
      */}
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
        aria-label="Trabajos realizados"
      >
        {heroProjects.map((project) => (
          <article
            key={project.slug}
            className="relative aspect-[4/3] w-[82%] shrink-0 snap-center overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_30px_70px_-40px_rgba(2,8,20,0.9)] sm:w-[62%]"
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              placeholder="blur"
              sizes="(max-width: 640px) 82vw, 62vw"
              className="object-cover"
            />
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent"
              aria-hidden
            />
            <Caption title={project.title} description={project.description} />
          </article>
        ))}
      </div>

      {/* ---------- Controles ---------- */}
      <div className="mt-7 flex items-center justify-center gap-5 lg:mt-9">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Trabajo anterior"
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 backdrop-blur transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white lg:flex"
        >
          <IconArrowRight className="h-5 w-5 rotate-180" />
        </button>

        <div className="flex items-center gap-2.5">
          {heroProjects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              aria-current={i === active}
              aria-label={project.title}
              onClick={() => go(i)}
              className="group cursor-pointer p-1.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-7 bg-cyan-400"
                    : "w-1.5 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Trabajo siguiente"
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 backdrop-blur transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white lg:flex"
        >
          <IconArrowRight className="h-5 w-5" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {heroProjects[active].title}
      </p>
    </section>
  );
}
