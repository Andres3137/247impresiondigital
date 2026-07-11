import type { Metadata, Viewport } from "next";
import { Inter, Sora, Chakra_Petch } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-chakra",
  display: "swap",
});

const SITE_URL = "https://247impresiondigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "24/7 Impresión Digital | Gran Formato, Avisos Luminosos y Señalización",
    template: "%s | 24/7 Impresión Digital",
  },
  description:
    "Más de 12 años fabricando impresión digital de gran formato, avisos luminosos LED, acrílico, señalización, vinilos y rotulación. Diseño, fabricación e instalación con precisión. Solicita tu cotización.",
  keywords: [
    "impresión digital",
    "gran formato",
    "avisos luminosos",
    "avisos LED",
    "acrílico",
    "señalización",
    "vinilos corporativos",
    "fotomurales",
    "rotulación",
    "publicidad visual",
    "sublimación textil",
  ],
  authors: [{ name: "24/7 Impresión Digital" }],
  creator: "24/7 Impresión Digital",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "24/7 Impresión Digital",
    title: "24/7 Impresión Digital | Publicidad visual que se ve profesional",
    description:
      "Impresión de gran formato, avisos luminosos LED, señalización y rotulación. 12 años de experiencia en diseño, fabricación e instalación.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "24/7 Impresión Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Impresión Digital",
    description:
      "Gran formato, avisos luminosos LED, señalización y rotulación. 12 años de experiencia.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2540",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "24/7 Impresión Digital",
  description:
    "Empresa con más de 12 años de experiencia en impresión digital de gran formato, avisos luminosos, señalización, vinilos y rotulación.",
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  areaServed: "Colombia",
  slogan: "Publicidad visual que se ve profesional",
  knowsAbout: [
    "Impresión digital de gran formato",
    "Avisos luminosos LED",
    "Avisos en acrílico",
    "Señalización",
    "Vinilos decorativos y corporativos",
    "Rotulación",
    "Sublimación textil",
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Servicios de publicidad visual",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impresión de gran formato" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Avisos luminosos LED" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Señalización y rotulación" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable} ${chakra.variable}`}>
      <body>
        <a
          href="#servicios"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
