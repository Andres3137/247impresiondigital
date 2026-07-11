import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { Button } from "./ui/Button";
import {
  IconArrowRight,
  IconLed,
  IconLargeFormat,
  IconLettering,
  IconVinyl,
  IconAcrylic,
  IconMural,
} from "./Icons";

interface Project {
  title: string;
  category: string;
  className: string;
  gradient: string;
  icon: typeof IconLed;
}

/**
 * Galeria bento. Cada pieza es una composicion de marca (degradado) que hace de
 * imagen del proyecto. Los tonos se mantienen por encima del fondo navy-900 de
 * la seccion para que cada tarjeta flote como superficie, no se funda con el fondo.
 */
const projects: Project[] = [
  {
    title: "Aviso luminoso de fachada",
    category: "Avisos LED",
    className: "sm:col-span-2 sm:row-span-2",
    gradient: "from-brand-700 via-brand-600 to-cyan-700",
    icon: IconLed,
  },
  {
    title: "Valla en gran formato",
    category: "Gran Formato",
    className: "",
    gradient: "from-brand-600 to-brand-800",
    icon: IconLargeFormat,
  },
  {
    title: "Rotulación de flota",
    category: "Rotulación",
    className: "",
    gradient: "from-cyan-600 to-brand-700",
    icon: IconLettering,
  },
  {
    title: "Vinilos para vitrina",
    category: "Vinilos",
    className: "",
    gradient: "from-brand-700 to-brand-900",
    icon: IconVinyl,
  },
  {
    title: "Letras corporativas en acrílico",
    category: "Acrílico",
    className: "sm:col-span-2",
    gradient: "from-brand-700 via-cyan-700 to-brand-800",
    icon: IconAcrylic,
  },
  {
    title: "Fotomural corporativo",
    category: "Fotomurales",
    className: "",
    gradient: "from-cyan-700 to-brand-800",
    icon: IconMural,
  },
];

export function Portfolio() {
  // Fondo navy-900 solido, coherente con Beneficios y CTA. La galeria es el foco.
  return (
    <section
      id="proyectos"
      className="relative scroll-mt-24 bg-navy-900 py-28 text-white sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            invert
            kicker="Proyectos"
            title={
              <>
                Trabajos que ya están{" "}
                <span className="text-gradient">en la calle</span>
              </>
            }
            description="Una muestra del tipo de piezas que fabricamos e instalamos para empresas de todos los tamaños."
            className="max-w-xl"
          />
          <Button
            href="#cotizar"
            variant="ghost"
            size="md"
            className="shrink-0 border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"
          >
            Cotizar mi proyecto
            <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>

        <RevealGroup
          className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-3"
          stagger={0.09}
        >
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <RevealItem key={p.title} className={p.className}>
                <article
                  className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 ring-1 ring-white/10 shadow-[0_18px_40px_-24px_rgba(2,8,20,0.9)] transition-all duration-300 hover:-translate-y-1 hover:ring-white/25 hover:shadow-[0_30px_60px_-28px_rgba(2,8,20,0.95)] ${p.gradient}`}
                >
                  <Icon
                    className="absolute -right-4 -top-4 h-28 w-28 text-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/[0.16]"
                    aria-hidden
                  />
                  {/* Velo inferior: asegura contraste del texto sobre cualquier tono */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-950/70 to-transparent"
                    aria-hidden
                  />
                  <div className="relative">
                    <span className="font-display text-[0.7rem] font-semibold italic uppercase tracking-[0.18em] text-cyan-200">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
