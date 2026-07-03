import type { Metadata } from "next";
import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import HeroService from "@/app/components/site/HeroService";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export const metadata: Metadata = {
  title: "Maquilhagem",
  description:
    "Maquilhagem profissional em Vila Real. Para ocasiões especiais, casamentos, eventos e sessões fotográficas. Realça a tua beleza.",
};

export default function MaquilhagemPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Maquilhagem"
          subtitle="Realça a tua beleza"
          description="Maquilhagem profissional para todas as ocasiões. Do look natural ao sofisticado, criamos a make perfeita para ti."
        />
        <section className="section-padding">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                  Beleza à tua medida
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Seja para um casamento, uma sessão fotográfica ou um evento
                  especial, temos a experiência para criar o look ideal.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Maquilhagem para casamentos e eventos",
                    "Sessões fotográficas e vídeo",
                    "Looks personalizados para cada ocasião",
                    "Produtos premium hipoalergénicos",
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
