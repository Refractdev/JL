import type { Metadata } from "next";
import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import HeroService from "@/app/components/site/HeroService";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export const metadata: Metadata = {
  title: "Extensões de Cabelo",
  description:
    "Extensões de cabelo natural em Vila Real. Técnicas premium para volume e comprimento. Resultados naturais e duradouros.",
};

export default function ExtensoesCabeloPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Extensões de Cabelo"
          subtitle="Transforma o teu visual"
          description="Técnicas premium para adicionar volume e comprimento ao teu cabelo com resultados totalmente naturais."
        />
        <section className="section-padding">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                  Porquê escolher as nossas extensões?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Utilizamos apenas cabelo 100% natural e técnicas avançadas para
                  garantir um resultado imperceptível e duradouro.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Cabelo 100% natural e de alta qualidade",
                    "Técnicas personalizadas para cada tipo de cabelo",
                    "Resultados duradouros e de baixa manutenção",
                    "Aconselhamento profissional personalizado",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/10" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
