import { useEffect } from "react";
import SkipLink from "@/components/site/SkipLink";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";
import { MessageCircle, CheckCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import makeup1 from "@/assets/gallery-makeup-01.jpg";

export default function Maquilhagem() {
  useReveal();

  useEffect(() => {
    document.title = "Maquilhagem em Vila Real | JL e Extensões";
    const desc = "Serviços de maquilhagem profissional para casamentos, festas e eventos em Vila Real. Realça a tua beleza natural com os melhores produtos.";
    
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
    setMeta('meta[name="keywords"]', "content", "maquilhagem vila real, maquilhadora vila real, maquilhagem noivas vila real, makeup artist vila real", "keywords");
    setMeta('meta[property="og:title"]', "content", "Maquilhagem Profissional em Vila Real | JL e Extensões", "og:title");
    setMeta('meta[property="og:description"]', "content", desc, "og:description");
    setMeta('meta[property="og:url"]', "content", "https://xn--jlextenses-9bb.com/maquilhagem-vila-real", "og:url");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://xn--jlextenses-9bb.com/maquilhagem-vila-real");

  }, []);

  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen bg-background pt-24">
        <Header />
        
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-elegant h-[500px]">
                <img
                  src={makeup1}
                  alt="Maquilhagem profissional em Vila Real"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="reveal order-1 lg:order-2">
                <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
                  Beleza para Eventos
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Maquilhagem que <em className="text-gold not-italic">Ilumina</em> o teu rosto
                </h1>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Tens um casamento, uma festa de gala ou um evento especial em <strong>Vila Real</strong>? 
                  A nossa maquilhagem é desenhada para destacar os teus traços com um acabamento perfeito, duradouro e à prova de emoções.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappLink("Olá! Gostaria de saber preços e disponibilidade para maquilhagem.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-gold hover:scale-[1.03] transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Marcar Maquilhagem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="reveal font-serif text-3xl md:text-4xl text-foreground mb-4">
                Porquê escolher o nosso estúdio?
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Produtos Premium", desc: "Apenas utilizamos marcas de alta qualidade que garantem uma pele perfeita e sem brilhos indesejados durante horas." },
                { title: "Penteados & Make", desc: "Podemos conjugar a tua maquilhagem com um penteado incrível para que saias pronta do estúdio." },
                { title: "Estilo Personalizado", desc: "Desde um look super natural até ao glamour de Hollywood, adaptamos as técnicas ao que te faz sentir bem." },
                { title: "Noivas", desc: "Packs especiais de maquilhagem para noivas, com prova incluída para que o teu grande dia seja perfeito." },
              ].map((benefit, i) => (
                <div key={i} className="reveal bg-card p-8 rounded-3xl border border-border shadow-soft flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{benefit.desc}</p>
                  </div>
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
