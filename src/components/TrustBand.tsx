import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { clients } from "@/lib/clients";

/**
 * Banda de confianza: marquee CSS puro, sin JavaScript ni estado.
 *
 * La pista contiene la lista dos veces y se desplaza -50%: al llegar, el segundo
 * juego ocupa exactamente la posicion inicial del primero y el salto es invisible.
 * El duplicado va oculto a lectores de pantalla para no repetir cada nombre.
 */
function LogoTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
      aria-hidden={hidden || undefined}
    >
      {clients.map((client) => (
        <li key={client.name} className="shrink-0">
          <Image
            src={client.logo}
            alt={hidden ? "" : client.name}
            className="h-7 w-auto object-contain sm:h-8"
            sizes="160px"
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustBand() {
  return (
    <section
      aria-label="Empresas que han confiado en nuestro trabajo"
      className="relative border-t border-white/5 bg-navy-900 py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <h2 className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand-100/40">
            Empresas que han confiado en nuestro trabajo
          </h2>
        </Reveal>
      </Container>

      <Reveal delay={0.1}>
        {/*
          `group` habilita el hover de banda: sube la opacidad y detiene el
          desplazamiento para que los logos puedan leerse.
        */}
        <div className="group relative mt-10 overflow-hidden mask-fade-x sm:mt-12">
          <div className="flex w-max animate-marquee opacity-35 transition-opacity duration-500 [animation-play-state:running] group-hover:opacity-70 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <LogoTrack />
            <LogoTrack hidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
