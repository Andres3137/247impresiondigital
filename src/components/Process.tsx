import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="proceso" className="relative scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Cómo trabajamos"
          title={
            <>
              De la idea al montaje, en{" "}
              <span className="text-gradient">tres pasos claros</span>
            </>
          }
          description="Un proceso ordenado y transparente para que sepas exactamente qué esperar en cada etapa."
        />

        <RevealGroup className="relative mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {/* Linea conectora en desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block"
            aria-hidden
          />

          {process.map((step) => (
            <RevealItem key={step.n}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center gap-4">
                  <span className="led relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-navy-900 text-2xl text-cyan-300 shadow-glow">
                    {step.n}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
