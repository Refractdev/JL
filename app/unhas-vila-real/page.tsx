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

const includes = [
  "Unhas de gel e alongamentos",
  "Gel polish e manicure",
  "Nail art personalizada",
  "Manutenção e remoção cuidadosas",
];

const care = [
  {
    title: "Preparação",
    text: "A base é feita com calma: cutícula tratada e superfície preparada para o gel pegar bem.",
  },
  {
    title: "Acabamento",
    text: "Forma e comprimento à tua escolha, com um remate limpo que dura o tempo que deve durar.",
  },
  {
    title: "Remoção",
    text: "Remoção sem forçar a unha natural — é o que mantém a unha saudável entre marcações.",
  },
];

export default function UnhasPage() {
  return (
    <>
      <JsonLd seo={seo} />
      <SkipLink />
      <Header alwaysSolid />
      <main id="main-content">
        {/* Sem fotografias reais de unhas no arquivo — hero tipográfico */}
        <HeroService
          title="Unhas de gel e manicure em Vila Real"
          accentWord="gel"
          subtitle="Gel · Manicure · Nail art"
          description="Acabamento limpo e duradouro. Orçamento personalizado pelo WhatsApp."
          ctaMessage={WA_MESSAGES.unhas}
          ctaLabel="Marcar unhas"
        />

        <ServiceIntro
          eyebrow="Serviço"
          title="Cuidados com as tuas mãos"
          accentWord="mãos"
          description="Gel, manicure e nail art com atenção ao detalhe e à saúde da unha natural."
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
                  <span className="eyebrow">Método</span>
                  <h2 className="display mt-6 text-display-md text-balance">
                    O cuidado está nos{" "}
                    <em className="not-italic text-bronze-deep">passos</em>
                  </h2>
                </div>
                <ul className="mt-12 grid gap-4 md:grid-cols-3">
                  {care.map((item, i) => (
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
          title="Marca as tuas unhas"
          description="Diz-nos o que procuras — respondemos com disponibilidade e orçamento."
          message={WA_MESSAGES.unhas}
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
