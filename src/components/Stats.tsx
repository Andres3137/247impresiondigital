"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "./ui/Container";
import { stats, type Stat } from "@/lib/data";

/** Cuenta ascendente accesible; solo anima valores puramente numericos. */
function CountUp({ value, active }: { value: string; active: boolean }) {
  const reduce = useReducedMotion();
  const numeric = /^\d+$/.test(value);
  const target = numeric ? parseInt(value, 10) : 0;
  const [display, setDisplay] = useState(numeric && !reduce ? 0 : target);

  useEffect(() => {
    if (!numeric || reduce || !active) return;
    let raf = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, numeric, reduce, target]);

  if (!numeric) return <>{value}</>;
  return <>{display}</>;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  return (
    <div className="relative flex flex-col items-center gap-1 px-4 py-6 text-center sm:items-start sm:text-left">
      <div className="flex items-baseline gap-1.5">
        <span
          className={
            stat.led
              ? "led led-glow text-5xl text-cyan-300 sm:text-6xl"
              : "font-heading text-5xl font-bold text-white sm:text-6xl"
          }
        >
          <CountUp value={stat.value} active={active} />
        </span>
        {stat.suffix && (
          <span className="font-display text-lg font-semibold italic text-cyan-300/90">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="max-w-[16ch] text-sm leading-snug text-brand-100/70">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative -mt-px bg-navy-900 pb-16 sm:pb-20">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-800"
        >
          <dl className="grid grid-cols-2 divide-white/10 sm:divide-x lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} active={inView} />
            ))}
          </dl>
        </motion.div>
      </Container>
    </section>
  );
}
