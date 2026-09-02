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
import { getPageSeo } from "@/src/lib/seo";
import { WA_MESSAGES } from "@/src/lib/whatsapp";

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

const includes = [
  "Maquilhagem para noivas e convidadas",
  "Eventos e ocasiões especiais",
  "Sessões fotográficas",
  "Prova quando fizer sentido para o teu evento",
];

const occasions = [
  {
    title: "Noivas",
    text: "Look pensado para durar o dia inteiro e para se comportar bem em fotografia.",
  },
  {
    title: "Convidadas e eventos",
    text: "Do discreto ao marcado — alinhamos o resultado com o que a ocasião pede.",
  },
  {
    title: "Sessões fotográficas",
    text: "Acabamento pensado para luz forte e para o enquadramento da câmara.",
  },
];

export default function MaquilhagemPage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header alwaysSolid />
      <main id="main-content">
        {/* Sem fotografias reais de maquilhagem no arquivo — hero tipográfico */}
        <HeroService
          title="Maquilhagem em Vila Real"
          accentWord="Maquilhagem"
          subtitle="Casamentos · Eventos · Sessões"
          description="Look pensado para a ocasião e para ti. Orçamento personalizado pelo WhatsApp."
          ctaMessage={WA_MESSAGES.maquilhagem}
          ctaLabel="Marcar maquilhagem"
        />

        <ServiceIntro
          eyebrow="Para o teu dia"
          title="O look acompanha a ocasião"
          accentWord="ocasião"
          description="Seja casamento, festa ou sessão fotográfica, alinhamos o look com o teu estilo e com o que o dia pede."
          items={includes}
        />

        <section className="section relative">
          <div className="shell">
            <div className="relative overflow-hidden rounded-[2rem] bg-blush/45 px-6 py-16 sm:rounded-[3rem] sm:px-10 md:px-16 md:py-20">
              <div
                className="bloom bloom-bronze left-[-8rem] bottom-[-8rem] h-[28rem] w-[28rem]"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="mx-auto max-w-2xl text-center" data-reveal>
                  <span className="eyebrow">Ocasiões</span>
                  <h2 className="display mt-6 text-display-md text-balance">
                    Onde <em className="not-italic text-bronze-deep">entramos</em>
                  </h2>
                </div>
                <ul className="mt-12 grid gap-4 md:grid-cols-3">
                  {occasions.map((item, i) => (
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
                </ul>
              </div>
            </div>
          </div>
        </section>

        {seo.faqs && <Faq items={seo.faqs} />}

        <ServiceCta
          title="Marca a tua maquilhagem"
          description="Conta-nos a data e a ocasião — respondemos com disponibilidade e orçamento."
          message={WA_MESSAGES.maquilhagem}
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
