import { useEffect } from "react";
import SkipLink from "@/components/site/SkipLink";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";
import { MessageCircle, CheckCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import materials from "@/assets/materials-01.jpg";

export default function Unhas() {
  useReveal();

  useEffect(() => {
    document.title = "Manicure e Unhas de Gel em Vila Real | JL e Extensões";
    const desc = "Serviços de manicure, pedicure, unhas de gel e nail art em Vila Real. Cuidamos de ti com um design impecável e máxima higiene.";
    
    const setMeta = (selector: string, attr: string, value: string, name?: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta") as HTMLMetaElement;
        if (name) el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", desc, "description");
    setMeta('meta[property="og:title"]', "content", "Manicure e Unhas de Gel em Vila Real", "og:title");
    setMeta('meta[property="og:description"]', "content", desc, "og:description");
    setMeta('meta[property="og:url"]', "content", "https://jleextensoes.pt/unhas-vila-real", "og:url");
  }, []);

  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen bg-background pt-24">
        <Header />
        
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
                  Cuidado das Mãos e Pés
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Unhas <em className="text-gold not-italic">Impecáveis</em> e Elegantes
                </h1>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  As tuas mãos são o teu cartão de visita. No nosso estúdio em <strong>Vila Real</strong>, oferecemos serviços completos de manicure e pedicure, desde manutenção simples a unhas de gel com design detalhado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappLink("Olá! Gostaria de marcar o serviço de unhas.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-gold hover:scale-[1.03] transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Marcar Marcação
                  </a>
                </div>
              </div>
              <div className="reveal relative rounded-3xl overflow-hidden shadow-elegant h-[500px]">
                <img
                  src={materials}
                  alt="Estúdio de unhas em Vila Real"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="reveal font-serif text-3xl md:text-4xl text-foreground mb-4">
                Os Nossos Serviços de Unhas
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Unhas de Gel", desc: "Aplicação e manutenção de gel para maior resistência e durabilidade. Ideal para quem quer unhas longas." },
                { title: "Verniz Gel", desc: "Acabamento natural, fino e muito resistente que protege a unha natural durante semanas." },
                { title: "Nail Art", desc: "Desenhos personalizados, francesinha, brilhos ou pedras decorativas para um toque único." },
                { title: "Manicure Clássica", desc: "Limpeza, cutículas, hidratação e esmaltação tradicional para mãos suaves e bonitas." },
                { title: "Pedicure Completa", desc: "Spa de pés com esfoliação, remoção de calosidades e cuidado total com as tuas unhas." },
                { title: "Higiene e Segurança", desc: "Todos os nossos materiais são rigorosamente esterilizados para garantir a tua proteção." },
              ].map((benefit, i) => (
                <div key={i} className="reveal bg-card p-8 rounded-3xl border border-border shadow-soft">
                  <CheckCircle className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
