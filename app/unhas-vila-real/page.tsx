import type { Metadata } from "next";
import SkipLink from "@/app/components/site/SkipLink";
import Header from "@/app/components/site/Header";
import HeroService from "@/app/components/site/HeroService";
import Footer from "@/app/components/site/Footer";
import FloatingWhatsApp from "@/app/components/site/FloatingWhatsApp";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export const metadata: Metadata = {
  title: "Unhas de Gel",
  description:
    "Unhas de gel e manicure em Vila Real. Alongamentos, gel polish e decoração. Unhas perfeitas para qualquer ocasião.",
};

export default function UnhasPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroService
          title="Unhas de Gel"
          subtitle="Mãos impecáveis"
          description="Alongamentos, gel polish e nail art. Unhas perfeitas e duradouras para qualquer ocasião."
        />
        <section className="section-padding">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                  Cuida das tuas mãos
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Especializamo-nos em unhas de gel e alongamentos, com
                  técnicas modernas para um resultado natural e elegante.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Alongamentos em gel",
                    "Gel polish e manicure",
                    "Nail art personalizada",
                    "Tratamento e fortalecimento",
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
