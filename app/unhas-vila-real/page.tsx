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

const seo = getPageSeo("/unhas-vila-real");

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

export default function UnhasPage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Unhas de gel e manicure em Vila Real"
          subtitle="Gel · Manicure · Nail art"
          description="Acabamento limpo e duradouro. Orçamento personalizado pelo WhatsApp."
          imageBase="materials-02"
          imageAlt="Unhas de gel e manicure na JL e Extensões, Vila Real"
          ctaMessage={WA_MESSAGES.unhas}
          ctaLabel="Marcar unhas"
        />

        <section className="section-padding">
          <div className="container-tight grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Cuidados com as tuas mãos
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Gel, manicure e nail art com atenção ao detalhe e à saúde da
                unha natural.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Unhas de gel e alongamentos",
                  "Gel polish e manicure",
                  "Nail art personalizada",
                  "Manutenção e remoção cuidadosas",
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
                baseName="materials-04"
                alt="Materiais e acabamento de unhas no estúdio"
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
              Marca as tuas unhas
            </h2>
            <p className="text-muted-foreground mb-8">
              Diz-nos o que procuras — respondemos com disponibilidade e
              orçamento.
            </p>
            <a
              href={whatsappLink(WA_MESSAGES.unhas)}
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
