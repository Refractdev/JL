import type { Metadata } from "next";
import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import HeroService from "@/app/components/site/HeroService";
import Faq from "@/app/components/site/Faq";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";
import JsonLd from "@/app/components/site/JsonLd";
import OptimizedImage from "@/app/components/site/OptimizedImage";
import { getPageSeo } from "@/src/lib/seo";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const seo = getPageSeo("/maquilhagem-vila-real");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.split(", "),
  alternates: { canonical: seo.path },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.path,
    images: [{ url: seo.ogImage, width: 1200, height: 630 }],
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
          subtitle="Casamentos · Eventos · Sessões"
          description="Look pensado para a ocasião e para ti. Orçamento personalizado pelo WhatsApp."
          imageBase="gallery-makeup-01"
          imageAlt="Maquilhagem profissional para eventos em Vila Real"
          ctaMessage={WA_MESSAGES.maquilhagem}
          ctaLabel="Marcar maquilhagem"
        />

        <section className="section-padding">
          <div className="container-tight grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Para o teu dia
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Seja casamento, festa ou sessão fotográfica, alinhamos o look
                com o teu estilo e com o que a ocasião pede.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Maquilhagem para noivas e convidadas",
                  "Eventos e ocasiões especiais",
                  "Sessões fotográficas",
                  "Prova quando fizer sentido para o teu evento",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <OptimizedImage
                baseName="gallery-makeup-01"
                alt="Detalhe de maquilhagem no estúdio JL e Extensões"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0"
                imgClassName="object-cover"
              />
            </div>
          </div>
        </section>

        {seo.faqs && <Faq items={seo.faqs} />}

        <section className="section-padding bg-muted/50">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground mb-4">
              Marca a tua maquilhagem
            </h2>
            <p className="text-muted-foreground mb-8">
              Conta-nos a data e a ocasião — respondemos com disponibilidade e
              orçamento.
            </p>
            <a
              href={whatsappLink(WA_MESSAGES.maquilhagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
