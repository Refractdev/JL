import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import Hero from "@/app/components/site/Hero";
import SocialProof from "@/app/components/site/SocialProof";
import Expertise from "@/app/components/site/Expertise";
import Services from "@/app/components/site/Services";
import BeforeAfter from "@/app/components/site/BeforeAfter";
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
        <SocialProof />
        <Expertise />
        <Services />
        <BeforeAfter />
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
