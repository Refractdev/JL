import { useEffect } from "react";
import SkipLink from "@/components/site/SkipLink";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import BeforeAfter from "@/components/site/BeforeAfter";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "JL e Extensões",
  description: "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação.",
  url: "https://jleextensoes.pt",
  telephone: "+351935449306",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua de Santo António, Bloco A, 3º andar, porta CJ",
    addressLocality: "Vila Real",
    postalCode: "5000-607",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "41.3004",
    longitude: "-7.7458",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  image: "https://jleextensoes.pt/og-image.jpg",
  priceRange: "€€",
  sameAs: [
    "https://instagram.com/jleextensoes",
    "https://facebook.com/jleextensoes",
  ],
};

const Index = () => {
  useReveal();

  useEffect(() => {
    // Title and meta
    document.title = "JL e Extensões — Extensões de Cabelo e Beleza | Vila Real";
    const desc = "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação. Marca pelo WhatsApp.";

    // Helper to set meta
    const setMeta = (selector: string, attr: string, value: string, name?: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta") as HTMLMetaElement;
        if (name) el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", desc, "description");

    // Open Graph
    setMeta('meta[property="og:title"]', "content", "JL e Extensões — Extensões de Cabelo e Beleza", "og:title");
    setMeta('meta[property="og:description"]', "content", desc, "og:description");
    setMeta('meta[property="og:type"]', "content", "website", "og:type");
    setMeta('meta[property="og:url"]', "content", "https://jleextensoes.pt", "og:url");
    setMeta('meta[property="og:image"]', "content", "https://jleextensoes.pt/og-image.jpg", "og:image");
    setMeta('meta[property="og:locale"]', "content", "pt_PT", "og:locale");

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image", "twitter:card");
    setMeta('meta[name="twitter:title"]', "content", "JL e Extensões", "twitter:title");
    setMeta('meta[name="twitter:description"]', "content", desc, "twitter:description");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://jleextensoes.pt/");

    // Structured Data
    let script = document.getElementById("structured-data") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script") as HTMLScriptElement;
      script.id = "structured-data";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Preconnect to external domains
    const preconnectDomains = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
    preconnectDomains.forEach((domain) => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement("link");
        link.setAttribute("rel", "preconnect");
        link.setAttribute("href", domain);
        if (domain.includes("gstatic")) link.setAttribute("crossorigin", "");
        document.head.appendChild(link);
      }
    });

    return () => {
      // Cleanup not needed for SSR-hydrated app
    };
  }, []);

  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Index;
