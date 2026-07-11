import type { StaticImageData } from "next/image";

import avisosLuminosos from "../../public/proyectos/avisos-luminosos.jpg";
import granFormato from "../../public/proyectos/gran-formato.jpg";
import acrilicos from "../../public/proyectos/acrilicos.jpg";
import vinilos from "../../public/proyectos/vinilos.jpg";
import fotomurales from "../../public/proyectos/fotomurales.jpg";
import senalizacion from "../../public/proyectos/senalizacion.jpg";

/**
 * Proyectos del carrusel del Hero.
 *
 * Las imagenes viven en public/proyectos/ y se importan de forma estatica para
 * que Next genere dimensiones y blurDataURL en build. Para publicar fotografias
 * reales basta con sobrescribir cada archivo conservando su nombre.
 */
export interface HeroProject {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  /** Texto alternativo: describe la pieza, no el servicio. */
  alt: string;
}

export const heroProjects: HeroProject[] = [
  {
    slug: "avisos-luminosos",
    title: "Avisos Luminosos",
    description: "Letras corporativas iluminadas con LED de bajo consumo.",
    image: avisosLuminosos,
    alt: "Aviso luminoso LED instalado en la fachada de un local comercial",
  },
  {
    slug: "gran-formato",
    title: "Gran Formato",
    description: "Lonas, vallas y backlights con color fiel y alta resolución.",
    image: granFormato,
    alt: "Valla publicitaria impresa en gran formato",
  },
  {
    slug: "acrilicos",
    title: "Acrílicos",
    description: "Piezas cortadas a láser con relieve y montaje limpio.",
    image: acrilicos,
    alt: "Letras corporativas en acrílico montadas sobre muro de recepción",
  },
  {
    slug: "vinilos",
    title: "Vinilos",
    description: "Corte de precisión e instalación sin burbujas.",
    image: vinilos,
    alt: "Vinilo corporativo aplicado sobre vitrina de cristal",
  },
  {
    slug: "fotomurales",
    title: "Fotomurales",
    description: "Murales de gran escala que transforman el espacio.",
    image: fotomurales,
    alt: "Fotomural de gran escala cubriendo la pared de una oficina",
  },
  {
    slug: "senalizacion",
    title: "Señalización",
    description: "Señalética interior y exterior clara y normalizada.",
    image: senalizacion,
    alt: "Sistema de señalización interior instalado en un pasillo",
  },
];
