import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { IconArrowRight, IconCheck } from "./Icons";
import { differentiators } from "@/lib/data";

const guarantees = [
  "Asesoría de diseño incluida en cada proyecto",
  "Materiales resistentes a intemperie y rayos UV",
  "Cumplimiento de tiempos de entrega pactados",
  "Instalación profesional en sitio",
];

export function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      className="relative scroll-mt-24 bg-navy-900 py-24 text-white sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Texto + garantias */}
          <div>
            <SectionHeading
              align="left"
              invert
              kicker="Por qué elegirnos"
              title={
                <>
                  12 años convirtiendo ideas en{" "}
                  <span className="text-gradient">marca visible</span>
                </>
              }
              description="No entregamos impresiones: entregamos confianza. Cada proyecto pasa por control de calidad para que el resultado hable por tu negocio."
            />

            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {guarantees.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-brand-100/85">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>

              <Button href="#cotizar" variant="primary" size="lg" className="mt-9">
                Quiero trabajar con ustedes
                <IconArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Reveal>
          </div>

          {/* Grilla de diferenciadores */}
          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div
                    className={`group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08] ${
                      i % 2 === 1 ? "sm:mt-8" : ""
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-100/70">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
