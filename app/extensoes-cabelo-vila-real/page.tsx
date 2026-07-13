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

const seo = getPageSeo("/extensoes-cabelo-vila-real");

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

const includes = [
  "Avaliação do cabelo e do resultado pretendido",
  "Escolha de comprimento, volume e tom",
  "Aplicação com técnica adequada ao teu cabelo",
  "Orientações de cuidado e manutenção",
];

export default function ExtensoesCabeloPage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Extensões de cabelo natural em Vila Real"
          subtitle="Especialidade · JL e Extensões"
          description="Comprimento, volume e densidade com resultado personalizado. Avaliação gratuita e orçamento pelo WhatsApp."
          imageBase="gallery-extensions-01"
          imageAlt="Extensões de cabelo natural — resultado na JL e Extensões, Vila Real"
          ctaMessage={WA_MESSAGES.extensoes}
          ctaLabel="Pedir avaliação gratuita"
        />

        <section className="section-padding">
          <div className="container-tight grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight text-balance">
                O que inclui
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cada aplicação começa por perceber o teu cabelo e o que queres
                no dia-a-dia — para o resultado parecer teu, não artificial.
              </p>
              <ul className="mt-8 space-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <OptimizedImage
                baseName="extension-process-02"
                alt="Aplicação de extensões de cabelo no estúdio"
                fill
                widthHint={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={68}
                className="absolute inset-0"
                imgClassName="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/40">
          <div className="container-tight">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-balance">
              O processo
            </h2>
            <ol className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Avaliação",
                  text: "Conversamos sobre o teu cabelo, rotina e objetivo. Definimos técnica e quantidade.",
                },
                {
                  step: "2",
                  title: "Aplicação",
                  text: "Aplicação cuidada, focada em conforto e num acabamento natural.",
                },
                {
                  step: "3",
                  title: "Manutenção",
                  text: "Revisões periódicas para manter densidade, conforto e o aspeto natural.",
                },
              ].map((item) => (
                <li key={item.step}>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-primary mb-2">
                    Passo {item.step}
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight grid md:grid-cols-2 gap-4">
            <figure className="relative aspect-[3/4] overflow-hidden bg-muted">
              <OptimizedImage
                baseName="before-01"
                alt="Antes: cabelo fino sem volume"
                fill
                widthHint={400}
                sizes="50vw"
                quality={65}
                className="absolute inset-0"
                imgClassName="object-cover"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-foreground/70 text-primary-foreground p-4 text-sm">
                Antes: cabelo fino sem volume
              </figcaption>
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden bg-muted">
              <OptimizedImage
                baseName="gallery-hair-before-after-01"
                alt="Depois: comprimento e densidade natural"
                fill
                widthHint={400}
                sizes="50vw"
                quality={65}
                className="absolute inset-0"
                imgClassName="object-cover"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-foreground/70 text-primary-foreground p-4 text-sm">
                Depois: comprimento e densidade natural
              </figcaption>
            </figure>
          </div>
        </section>

        {seo.faqs && <Faq items={seo.faqs} />}

        <section className="section-padding bg-muted/50">
          <div className="container-tight text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Pronta para a avaliação?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Envia uma mensagem — explicamos o processo e enviamos um orçamento
              personalizado. Sem compromisso.
            </p>
            <a
              href={whatsappLink(WA_MESSAGES.extensoes)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Pedir avaliação no WhatsApp
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
