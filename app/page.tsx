import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import Hero from "@/app/components/site/Hero";
import TrustBar from "@/app/components/site/TrustBar";
import ExtensionsSpecialty from "@/app/components/site/ExtensionsSpecialty";
import Services from "@/app/components/site/Services";
import BeforeAfter from "@/app/components/site/BeforeAfter";
import Gallery from "@/app/components/site/Gallery";
import About from "@/app/components/site/About";
import Faq from "@/app/components/site/Faq";
import Contact from "@/app/components/site/Contact";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";
import JsonLd from "@/app/components/site/JsonLd";
import { getPageSeo } from "@/src/lib/seo";
import { homeFaqs } from "@/src/lib/site";

const seo = getPageSeo("/");

export default function HomePage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <ExtensionsSpecialty />
        <Services />
        <BeforeAfter />
        <Gallery />
        <About />
        <Faq items={homeFaqs} title="Antes de marcares" />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
