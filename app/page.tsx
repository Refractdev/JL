import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import Hero from "@/app/components/site/Hero";
import Manifesto from "@/app/components/site/Manifesto";
import Expertise from "@/app/components/site/Expertise";
import BeforeAfter from "@/app/components/site/BeforeAfter";
import Gallery from "@/app/components/site/Gallery";
import Services from "@/app/components/site/Services";
import AboutJoice from "@/app/components/site/AboutJoice";
import Faq from "@/app/components/site/Faq";
import Contact from "@/app/components/site/Contact";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";
import JsonLd from "@/app/components/site/JsonLd";
import { homeFaqs } from "@/src/lib/site";
import { pageSeo } from "@/src/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd seo={pageSeo["/"]} />
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <Expertise />
        <BeforeAfter />
        <Gallery />
        <Services />
        <AboutJoice />
        <Faq items={homeFaqs} />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
