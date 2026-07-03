import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import Hero from "@/app/components/site/Hero";
import About from "@/app/components/site/About";
import Services from "@/app/components/site/Services";
import BeforeAfter from "@/app/components/site/BeforeAfter";
import Gallery from "@/app/components/site/Gallery";
import Contact from "@/app/components/site/Contact";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
