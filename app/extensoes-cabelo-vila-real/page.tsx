import type { Metadata } from "next";
import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import HeroService from "@/app/components/site/HeroService";
import ServiceIntro from "@/app/components/site/ServiceIntro";
import ServiceCta from "@/app/components/site/ServiceCta";
import Faq from "@/app/components/site/Faq";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";
import JsonLd from "@/app/components/site/JsonLd";
import OptimizedImage from "@/app/components/site/OptimizedImage";
import { getPageSeo } from "@/src/lib/seo";
import { WA_MESSAGES } from "@/src/lib/whatsapp";

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

const steps = [
  {
    title: "Avaliação",
    text: "Conversamos sobre o teu cabelo, rotina e objetivo. Definimos técnica e quantidade.",
  },
  {
    title: "Aplicação",
    text: "Aplicação cuidada, focada em conforto e num acabamento natural.",
  },
  {
    title: "Manutenção",
    text: "Revisões periódicas para manter densidade, conforto e o aspeto natural.",
  },
];

const comparison = [
  {
    base: "before-01",
    label: "Antes",
    caption: "Cabelo fino e sem densidade nos comprimentos",
    alt: "Antes: cabelo castanho fino, sem volume nos comprimentos",
  },
  {
    base: "hair-04",
    label: "Depois",
    caption: "Comprimento e densidade com aspeto natural",
    alt: "Depois: cabelo comprido e denso com extensões aplicadas",
  },
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
          accentWord="natural"
          subtitle="Especialidade · JL e Extensões"
          description="Comprimento, volume e densidade com resultado personalizado. Avaliação gratuita e orçamento pelo WhatsApp."
          imageBase="gallery-extensions-01"
          imageAlt="Extensões de cabelo natural — resultado na JL e Extensões, Vila Real"
          ctaMessage={WA_MESSAGES.extensoes}
          ctaLabel="Pedir avaliação gratuita"
        />

        <ServiceIntro
          eyebrow="O que inclui"
          title="Cada aplicação começa pelo teu cabelo"
          accentWord="teu cabelo"
          description="Percebemos o que queres no dia-a-dia antes de escolher a técnica — para o resultado parecer teu, não artificial."
          items={includes}
          imageBase="extension-process-02"
          imageAlt="Aplicação de extensões de cabelo fio a fio no estúdio"
        />

        <section className="section relative">
          <div className="shell">
            <div className="relative overflow-hidden rounded-[2rem] bg-blush/45 px-6 py-16 sm:rounded-[3rem] sm:px-10 md:px-16 md:py-20">
              <div
                className="bloom bloom-bronze right-[-8rem] bottom-[-8rem] h-[28rem] w-[28rem]"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="mx-auto max-w-2xl text-center" data-reveal>
                  <span className="eyebrow">O processo</span>
                  <h2 className="display mt-6 text-display-md text-balance">
                    Três etapas, sem{" "}
                    <em className="not-italic text-bronze-deep">surpresas</em>
                  </h2>
                </div>
                <ol className="mt-12 grid gap-4 md:grid-cols-3">
                  {steps.map((item, i) => (
                    <li
                      key={item.title}
                      className="card-soft p-7"
                      data-reveal
                      style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush font-serif text-lg text-bronze-deep">
                        {i + 1}
                      </span>
                      <h3 className="mt-5 font-serif text-2xl text-mocha">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cocoa text-pretty">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section relative overflow-hidden">
          <div
            className="bloom bloom-blush left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2"
            aria-hidden
          />
          <div className="shell relative z-10">
            <div className="mx-auto max-w-2xl text-center" data-reveal>
              <span className="eyebrow">Resultado</span>
              <h2 className="display mt-6 text-display-md">
                Antes e <em className="not-italic text-bronze-deep">depois</em>
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
              {comparison.map((item, i) => (
                <figure
                  key={item.base}
                  className={i === 1 ? "sm:translate-y-8" : ""}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 130}ms` }}
                >
                  <div className="relative">
                    <OptimizedImage
                      baseName={item.base}
                      alt={item.alt}
                      ratio="3 / 4"
                      widthHint={800}
                      sizes="(max-width: 640px) 90vw, 45vw"
                      className="frame-xl shadow-lift"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-medium ${
                        i === 0
                          ? "bg-paper/90 text-mocha backdrop-blur-sm"
                          : "bg-mocha text-cream"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <figcaption className="mt-4 text-sm text-cocoa">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {seo.faqs && <Faq items={seo.faqs} />}

        <ServiceCta
          title="Pronta para a avaliação?"
          description="Envia uma mensagem — explicamos o processo e enviamos um orçamento personalizado. Sem compromisso."
          message={WA_MESSAGES.extensoes}
          ctaLabel="Pedir avaliação no WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
