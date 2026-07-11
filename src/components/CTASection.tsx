import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { QuoteForm } from "./QuoteForm";
import { IconPhone, IconMail, IconClock, IconWhatsapp } from "./Icons";
import { site, whatsappLink } from "@/lib/data";

const contactItems = [
  { icon: IconPhone, label: "Llámanos", value: site.phoneDisplay, href: site.phoneHref },
  { icon: IconMail, label: "Escríbenos", value: site.email, href: `mailto:${site.email}` },
  { icon: IconClock, label: "Horario", value: site.hours },
];

export function CTASection() {
  return (
    <section
      id="cotizar"
      className="relative scroll-mt-24 bg-navy-900 py-24 text-white sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          {/* Copy + datos de contacto */}
          <Reveal>
            <span className="kicker-invert block">Cotización sin costo</span>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Hagamos que tu marca se{" "}
              <span className="text-gradient">vea profesional</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-100/80">
              Cuéntanos qué necesitas y recibe una propuesta a la medida. Diseño,
              fabricación e instalación con la calidad de 24/7 Impresión Digital.
            </p>

            <ul className="mt-9 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-brand-100/60">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-white">{item.value}</span>
                    </span>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="inline-flex rounded-xl transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
            >
              <IconWhatsapp className="h-5 w-5" />
              O escríbenos directo por WhatsApp
            </a>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1} direction="left">
            <QuoteForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
