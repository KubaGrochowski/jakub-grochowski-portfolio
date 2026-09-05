import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Process />
      <Faq />
      <Pricing />
      <Contact />
    </>
  );
}
