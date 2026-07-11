import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { IconArrowRight } from "./Icons";
import { site } from "@/lib/data";

interface LegalPageProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

/** Marco compartido por las páginas legales: cabecera sobria y columna de lectura. */
export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <>
      <header className="bg-navy-900">
        <Container className="flex items-center justify-between py-6">
          <Link href="/" aria-label="Volver al inicio">
            <Logo className="h-9" />
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-100/70 transition-colors hover:text-white"
          >
            Volver al inicio
            <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </header>

      <main className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="kicker">Legal</p>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Última actualización: {updatedAt}
            </p>

            <div className="mt-12 space-y-10 text-[0.95rem] leading-relaxed text-slate-600 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-900 [&_li]:pl-1 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>

            <div className="mt-14 rounded-2xl border border-slate-200/80 bg-slate-50 p-6">
              <p className="text-sm text-slate-600">
                ¿Dudas sobre este documento? Escríbenos a{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-700"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
