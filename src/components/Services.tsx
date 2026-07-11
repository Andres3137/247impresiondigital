import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { IconArrowRight } from "./Icons";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Nuestros servicios"
          title={
            <>
              Todo lo que tu marca necesita para{" "}
              <span className="text-gradient">hacerse ver</span>
            </>
          }
          description="Una sola empresa para diseñar, fabricar e instalar tus piezas publicitarias. Calidad consistente en cada material y formato."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <RevealItem key={service.title}>
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    {service.tag && (
                      <span className="font-display text-[0.7rem] font-semibold italic uppercase tracking-widest text-cyan-600">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </article>
              </RevealItem>
            );
          })}

          {/* Card CTA que cierra la grilla */}
          <RevealItem>
            <article className="group flex h-full flex-col justify-between gap-6 rounded-2xl bg-navy-900 p-6 text-white shadow-card">
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  ¿No ves lo que buscas?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100/85">
                  Fabricamos soluciones a la medida. Cuéntanos tu idea y la hacemos
                  realidad.
                </p>
              </div>
              <Button
                href="#cotizar"
                variant="white"
                size="md"
                className="w-full sm:w-auto"
              >
                Pedir cotización
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </article>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
