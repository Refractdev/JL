import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import HeroService from "@/app/components/site/HeroService";
import Faq from "@/app/components/site/Faq";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";
import JsonLd from "@/app/components/site/JsonLd";
import { getPageSeo, faqs } from "@/src/lib/seo";
import { whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";

const seo = getPageSeo("/maquilhagem-vila-real");

export const metadata: Metadata = {
  title: "Maquilhagem em Vila Real",
  description: seo.description,
  alternates: { canonical: seo.path },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function MaquilhagemPage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Maquilhagem em Vila Real"
          subtitle="Casamentos e eventos"
          description="Looks para casamentos, festas e sessões. Conta-nos a ocasião no WhatsApp e recebes disponibilidade e orçamento personalizado."
          image="updo-01"
          imageAlt="Penteado e preparação para maquilhagem no estúdio"
          whatsappMessage="Olá! Gostaria de marcar maquilhagem e receber orçamento."
          ctaLabel="Marcar maquilhagem"
        />

        <section className="section-padding">
          <div className="container-tight grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
                Beleza à tua medida
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Do look natural ao mais elaborado: definimos juntas o resultado
                para a tua ocasião, com produtos adequados à tua pele.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Maquilhagem para casamentos e eventos",
                  "Sessões fotográficas e vídeo",
                  "Looks personalizados para cada ocasião",
                  "Orçamento personalizado pelo WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(
                  "Olá! Gostaria de marcar maquilhagem e receber orçamento."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium mt-8 hover:opacity-95"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={imageSrc("hair-05", 800)}
                alt="Ambiente do estúdio JL e Extensões"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <Faq
          items={faqs.maquilhagem}
          title="Perguntas sobre maquilhagem"
          id="faq-maquilhagem"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
