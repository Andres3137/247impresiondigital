import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTASection />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
