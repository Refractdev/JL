import { useEffect } from "react";
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

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "JL e Extensões — Extensões de Cabelo e Beleza | Vila Real";
    const desc = "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação. Marca pelo WhatsApp.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
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
  );
};

export default Index;
