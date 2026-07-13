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

const seo = getPageSeo("/unhas-vila-real");

export const metadata: Metadata = {
  title: "Unhas de Gel em Vila Real",
  description: seo.description,
  alternates: { canonical: seo.path },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
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
          title="Unhas de gel em Vila Real"
          subtitle="Manicure e nail art"
          description="Gel, alongamentos e nail art com acabamento cuidado. Marca no WhatsApp e recebe orçamento personalizado."
          image="materials-03"
          imageAlt="Materiais e trabalho de unhas no estúdio"
          whatsappMessage="Olá! Gostaria de marcar unhas e receber orçamento."
          ctaLabel="Marcar unhas"
        />

        <section className="section-padding">
          <div className="container-tight grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
                Cuida das tuas mãos
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Unhas de gel e alongamentos com atenção à unha natural. Diz-nos
                o estilo que queres — minimal ou nail art — e adaptamos ao teu
                comprimento.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Alongamentos em gel",
                  "Gel polish e manicure",
                  "Nail art personalizada",
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
                  "Olá! Gostaria de marcar unhas e receber orçamento."
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
                src={imageSrc("materials-02", 800)}
                alt="Detalhe de materiais no estúdio JL e Extensões"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <Faq items={faqs.unhas} title="Perguntas sobre unhas" id="faq-unhas" />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
