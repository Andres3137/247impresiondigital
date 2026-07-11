import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { FaqAccordion } from "./FaqAccordion";
import { IconArrowRight } from "./Icons";
import { faqs } from "@/lib/data";

/** Schema.org FAQPage: habilita el resultado enriquecido de preguntas en Google. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              kicker="Preguntas frecuentes"
              title={
                <>
                  Lo que suelen <span className="text-gradient">preguntarnos</span>
                </>
              }
              description="Si tu duda no está aquí, escríbenos: respondemos rápido y sin compromiso."
            />
            <Reveal delay={0.1}>
              <Button href="#cotizar" variant="ghost" size="md" className="mt-8">
                Hablar con un asesor
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <FaqAccordion />
          </Reveal>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
