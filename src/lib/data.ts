import type { ComponentType, SVGProps } from "react";
import {
  IconLargeFormat,
  IconLed,
  IconAcrylic,
  IconSignage,
  IconVinyl,
  IconMural,
  IconSticker,
  IconFrame,
  IconTextile,
  IconLaminate,
  IconLettering,
  IconPrecision,
  IconBolt,
  IconShield,
  IconChip,
} from "@/components/Icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/** Datos de contacto reutilizados en CTA, footer y JSON-LD. */
export const site = {
  name: "24/7 Impresión Digital",
  phoneDisplay: "+57 300 000 0000",
  phoneHref: "tel:+573000000000",
  whatsapp: "573000000000",
  whatsappMsg:
    "Hola 24/7 Impresión Digital, quiero solicitar una cotización.",
  email: "cotizaciones@247impresiondigital.com",
  address: "Colombia",
  hours: "Lun a Sáb · 8:00 a.m. – 6:00 p.m.",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMsg,
)}`;

export interface Service {
  title: string;
  description: string;
  icon: Icon;
  tag?: string;
}

export const services: Service[] = [
  {
    title: "Gran Formato",
    description:
      "Impresión de alta resolución en lonas, backlights, pendones y vallas con color fiel y acabados profesionales.",
    icon: IconLargeFormat,
    tag: "Gran Formato",
  },
  {
    title: "Avisos Luminosos",
    description:
      "Avisos y letras corporativas iluminadas con tecnología LED de bajo consumo y alto impacto visual día y noche.",
    icon: IconLed,
    tag: "LED",
  },
  {
    title: "Avisos en Acrílico",
    description:
      "Piezas en acrílico cortado a láser con relieve y montaje limpio para recepciones, oficinas y fachadas.",
    icon: IconAcrylic,
  },
  {
    title: "Señalización",
    description:
      "Sistemas de señalética interior y exterior claros, normalizados y coherentes con tu identidad de marca.",
    icon: IconSignage,
  },
  {
    title: "Vinilos Corporativos",
    description:
      "Vinilos decorativos y corporativos para vitrinas, muros y vehículos, con corte de precisión e instalación sin burbujas.",
    icon: IconVinyl,
  },
  {
    title: "Fotomurales",
    description:
      "Murales fotográficos de gran escala que transforman espacios con nitidez y colores vibrantes.",
    icon: IconMural,
  },
  {
    title: "Stickers Personalizados",
    description:
      "Stickers troquelados en cualquier forma y material, resistentes y perfectos para branding y empaques.",
    icon: IconSticker,
  },
  {
    title: "Retablos Decorativos",
    description:
      "Retablos y cuadros decorativos que aportan carácter y elevan la percepción de cualquier ambiente.",
    icon: IconFrame,
  },
  {
    title: "Sublimación Textil",
    description:
      "Estampado textil por sublimación con durabilidad y detalle para uniformes, merchandising y línea corporativa.",
    icon: IconTextile,
  },
  {
    title: "Laminados",
    description:
      "Laminado protector mate o brillante que prolonga la vida de tus impresos y realza el acabado final.",
    icon: IconLaminate,
  },
  {
    title: "Rotulación",
    description:
      "Rotulación de vehículos, locales y fachadas que convierte cada superficie en un medio publicitario.",
    icon: IconLettering,
  },
];

export interface Differentiator {
  title: string;
  description: string;
  icon: Icon;
}

export const differentiators: Differentiator[] = [
  {
    title: "Precisión milimétrica",
    description:
      "Corte, montaje e instalación calibrados. Cada pieza sale como fue diseñada, sin sorpresas.",
    icon: IconPrecision,
  },
  {
    title: "Tecnología de punta",
    description:
      "Equipos de última generación y tintas de alta durabilidad para color estable y máxima resolución.",
    icon: IconChip,
  },
  {
    title: "Entrega ágil",
    description:
      "Procesos optimizados y capacidad de producción para cumplir tiempos ajustados sin sacrificar calidad.",
    icon: IconBolt,
  },
  {
    title: "Calidad garantizada",
    description:
      "12 años respaldando cada proyecto con materiales premium y acabados que perduran a la intemperie.",
    icon: IconShield,
  },
];

export interface Step {
  n: string;
  title: string;
  description: string;
}

export const process: Step[] = [
  {
    n: "01",
    title: "Diseño",
    description:
      "Escuchamos tu objetivo y creamos la propuesta visual: bocetos, materiales y medidas exactas para aprobar con confianza.",
  },
  {
    n: "02",
    title: "Fabricación",
    description:
      "Producimos con tecnología de gran formato y control de calidad en cada etapa, cuidando color, corte y acabados.",
  },
  {
    n: "03",
    title: "Instalación",
    description:
      "Nuestro equipo instala en sitio con precisión y limpieza, dejando tu aviso o gráfica listo para brillar.",
  },
];

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  led?: boolean;
}

/** Cifras verificables. Nada de porcentajes decorativos ni metricas inventadas. */
export const stats: Stat[] = [
  { value: "12", suffix: "años", label: "fabricando publicidad visual", led: true },
  { value: "11", suffix: "servicios", label: "bajo un mismo techo" },
  { value: "3", suffix: "etapas", label: "diseño, fabricación e instalación" },
  { value: "24/7", label: "tu marca, siempre visible", led: true },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "El aviso luminoso quedó impecable y se instaló en el tiempo prometido. La fachada de nuestro local cambió por completo.",
    name: "Carolina Méndez",
    role: "Gerente · Restaurante La Terraza",
    initials: "CM",
  },
  {
    quote:
      "Manejan el gran formato con un nivel de detalle y color que otros no logran. Ya son nuestro proveedor fijo de publicidad.",
    name: "Andrés Rojas",
    role: "Director de Marketing · GrupoNova",
    initials: "AR",
  },
  {
    quote:
      "Rotularon toda nuestra flota de vehículos con acabados perfectos. Profesionales de principio a fin.",
    name: "Diana Castaño",
    role: "Coordinadora Logística · TransAndes",
    initials: "DC",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

/** El orden refleja el de la página. "Contacto" se omite: el botón "Cotizar ahora" apunta al mismo ancla. */
export const navLinks: NavLink[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué nosotros", href: "#por-que-nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Preguntas", href: "#faq" },
];

export const legalLinks: NavLink[] = [
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
];

export interface Faq {
  question: string;
  answer: string;
}

/** Alimenta la sección FAQ y el JSON-LD de tipo FAQPage. */
export const faqs: Faq[] = [
  {
    question: "¿Qué tipo de archivos reciben para imprimir?",
    answer:
      "Trabajamos con PDF, AI, EPS, PSD y TIFF. Para gran formato pedimos el archivo en escala real o proporcional, a 100 ppp como mínimo, en modo CMYK y con las tipografías convertidas a curvas. Si tu archivo llega en otro formato lo revisamos y te decimos si sirve antes de producir.",
  },
  {
    question: "¿Realizan instalación de avisos?",
    answer:
      "Sí. La instalación está incluida en nuestros proyectos de avisos luminosos, acrílicos, señalización y rotulación. Nuestro equipo se desplaza al sitio, monta la pieza y deja el área limpia. En trabajos en altura o con requisitos eléctricos especiales coordinamos los permisos contigo.",
  },
  {
    question: "¿Qué tiempos de entrega manejan?",
    answer:
      "Depende del material y del volumen. La impresión de gran formato y los vinilos suelen salir entre 2 y 4 días hábiles. Los avisos luminosos y las piezas en acrílico requieren de 5 a 10 días hábiles por el corte, el armado y el montaje. Al cotizar te confirmamos una fecha concreta y la cumplimos.",
  },
  {
    question: "¿Diseñan desde cero o puedo enviar mi diseño?",
    answer:
      "Las dos cosas. Si ya tienes el arte listo lo producimos tal cual, previa revisión técnica sin costo. Si no lo tienes, nuestro equipo lo diseña desde cero a partir de tu marca y del espacio donde irá la pieza, y no entramos a producción hasta que apruebes la propuesta.",
  },
  {
    question: "¿Qué materiales utilizan?",
    answer:
      "Lonas y vinilos de alta durabilidad con tintas resistentes a rayos UV, acrílico de primera calidad, aluminio compuesto, PVC espumado y módulos LED de bajo consumo. Para exteriores usamos siempre materiales tratados para intemperie y aplicamos laminado protector cuando la pieza lo requiere.",
  },
  {
    question: "¿Atienden empresas y particulares?",
    answer:
      "Sí. Producimos desde una pieza única hasta la señalización completa de un edificio o la rotulación de una flota. El proceso es el mismo sin importar el tamaño del proyecto: asesoría, propuesta, fabricación e instalación.",
  },
];
