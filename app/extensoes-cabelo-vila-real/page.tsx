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
import { extensionProcess } from "@/src/lib/site";

const seo = getPageSeo("/extensoes-cabelo-vila-real");

export const metadata: Metadata = {
  title: "Extensões de Cabelo em Vila Real",
  description: seo.description,
  alternates: { canonical: seo.path },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function ExtensoesCabeloPage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Extensões de cabelo natural em Vila Real"
          subtitle="JL e Extensões"
          description="Comprimento e volume com resultado natural. Avaliação gratuita e orçamento personalizado pelo WhatsApp."
          image="hair-02"
          imageAlt="Resultado de extensões de cabelo no estúdio em Vila Real"
          whatsappMessage="Olá! Gostaria de uma avaliação gratuita para extensões de cabelo."
          ctaLabel="Pedir avaliação gratuita"
        />

        <section className="section-padding">
          <div className="container-tight grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
                Porque escolher extensões connosco
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Trabalhamos cabelo natural e escolhemos contigo a técnica, o
                comprimento e o volume — para o resultado parecer teu, não
                artificial.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Cabelo natural em várias cores e comprimentos",
                  "Técnica adaptada ao teu cabelo e rotina",
                  "Manutenção e cuidados explicados com clareza",
                  "Avaliação gratuita antes do orçamento",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={imageSrc("extension-process-02", 800)}
                alt="Aplicação de extensões de cabelo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/40">
          <div className="container-tight">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-balance">
              Do pedido à aplicação
            </h2>
            <ol className="grid md:grid-cols-3 gap-8">
              {extensionProcess.map((step) => (
                <li key={step.step}>
                  <span className="font-display text-3xl text-primary">
                    {step.step}
                  </span>
                  <h3 className="font-medium text-foreground mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
              O valor depende do comprimento, volume, técnica e cabelo escolhido.
              Por isso o orçamento é sempre personalizado — depois da avaliação.
            </p>
            <a
              href={whatsappLink(
                "Olá! Gostaria de uma avaliação gratuita para extensões de cabelo."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium mt-6 hover:opacity-95"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </section>

        <Faq
          items={faqs.extensoes}
          title="Perguntas sobre extensões"
          id="faq-extensoes"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
