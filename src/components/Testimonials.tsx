import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { IconStar } from "./Icons";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Testimonios"
          title={
            <>
              Marcas que confían en{" "}
              <span className="text-gradient">nuestro trabajo</span>
            </>
          }
          description="La mejor publicidad es la de nuestros clientes. Esto es lo que dicen quienes ya trabajaron con nosotros."
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                <div className="flex gap-0.5 text-cyan-500" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-500 font-heading text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
