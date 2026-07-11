import Link from "next/link";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { LedDisplay } from "./LedDisplay";
import { IconPhone, IconMail, IconPin } from "./Icons";
import { legalLinks, navLinks, services, site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-navy-950 text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div className="max-w-sm">
            <Logo className="h-10" />
            <p className="mt-5 text-sm leading-relaxed text-brand-100/70">
              Más de 12 años en impresión digital, publicidad visual y fabricación de
              avisos. Diseño, fabricación e instalación con precisión y calidad.
            </p>
            <LedDisplay id="footer-led" value="24/7" className="mt-7 w-28" />
          </div>

          {/* Navegacion */}
          <nav aria-label="Enlaces del sitio">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-100/70 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios + contacto */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {services.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicios"
                    className="text-sm text-brand-100/70 transition-colors hover:text-cyan-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-6 space-y-2.5 text-sm text-brand-100/70">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-cyan-300">
                  <IconPhone className="h-4 w-4 text-cyan-400" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-cyan-300">
                  <IconMail className="h-4 w-4 text-cyan-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconPin className="h-4 w-4 text-cyan-400" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-brand-100/50">
              © {year} {site.name}. Todos los derechos reservados.
            </p>

            <nav aria-label="Enlaces legales">
              <ul className="flex items-center gap-5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-brand-100/50 transition-colors hover:text-cyan-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-6 text-center text-xs text-brand-100/35">
            Diseñado y desarrollado por{" "}
            <a
              href="https://construyendoconandres.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-100/60 underline decoration-white/15 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300/50"
            >
              CAndres
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
