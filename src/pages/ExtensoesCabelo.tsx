import { useEffect } from "react";
import SkipLink from "@/components/site/SkipLink";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import ext1 from "@/assets/extension-process-01.jpg";
import ext2 from "@/assets/extension-process-02.jpg";
import ext3 from "@/assets/extension-process-03.jpg";

export default function ExtensoesCabelo() {
  useReveal();

  useEffect(() => {
    document.title = "Extensões de Cabelo em Vila Real | JL e Extensões";
    const desc = "Especialistas em extensões de cabelo natural em Vila Real. Ganha volume e comprimento com resultados naturais. Marca no WhatsApp!";
    
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
    setMeta('meta[name="keywords"]', "content", "extensões de cabelo vila real, colocar extensões vila real, cabelo natural vila real, extensões de nó italiano, extensões de queratina", "keywords");
    setMeta('meta[property="og:title"]', "content", "Extensões de Cabelo em Vila Real | JL e Extensões", "og:title");
    setMeta('meta[property="og:description"]', "content", desc, "og:description");
    setMeta('meta[property="og:url"]', "content", "https://xn--jlextenses-9bb.com/extensoes-cabelo-vila-real", "og:url");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://xn--jlextenses-9bb.com/extensoes-cabelo-vila-real");

  }, []);

  return (
    <>
      <SkipLink />
      <main id="main-content" className="min-h-screen bg-background pt-24">
        <Header />
        
        {/* Hero Section for Extensions */}
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
                  Especialistas em Vila Real
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Extensões de Cabelo com Efeito <em className="text-gold not-italic">Natural</em>
                </h1>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Queres ter aquele cabelo longo e com volume, mas mantendo um aspeto 100% natural? 
                  No nosso estúdio em <strong>Vila Real</strong>, somos especialistas na aplicação de extensões de cabelo de alta qualidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappLink("Olá! Gostaria de saber mais sobre as extensões de cabelo e marcar uma avaliação.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-gold hover:scale-[1.03] transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Marcar Avaliação
                  </a>
                </div>
              </div>
              <div className="reveal relative rounded-3xl overflow-hidden shadow-elegant h-[500px]">
                <img
                  src={ext2}
                  alt="Aplicação de extensões de cabelo em Vila Real"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-tight">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="reveal font-serif text-3xl md:text-4xl text-foreground mb-4">
                Porquê colocar extensões connosco?
              </h2>
              <p className="reveal text-foreground/70">
                Garantimos um serviço premium no coração de Vila Real, pensado para a tua confiança.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Cabelo 100% Natural", desc: "Utilizamos cabelo humano da mais alta qualidade para garantir um toque e brilho perfeitos." },
                { title: "Aplicação Segura", desc: "A nossa técnica protege o teu cabelo natural, sem o danificar ou enfraquecer." },
                { title: "Durabilidade", desc: "Com a manutenção correta, as tuas extensões vão acompanhar-te perfeitamente durante meses." },
              ].map((benefit, i) => (
                <div key={i} className="reveal bg-card p-8 rounded-3xl border border-border shadow-soft">
                  <CheckCircle className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-serif text-xl mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery / Process */}
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="reveal order-2 lg:order-1 flex flex-col sm:flex-row gap-4">
                <img src={ext1} alt="Processo" className="rounded-2xl shadow-soft w-full sm:w-1/2 object-cover h-64" />
                <img src={ext3} alt="Resultado final" className="rounded-2xl shadow-soft w-full sm:w-1/2 object-cover h-64 sm:mt-12" />
              </div>
              <div className="reveal order-1 lg:order-2">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Transformações Reais
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Cada cabelo é único. Analisamos a cor, a textura e a densidade do teu cabelo para encontrar o tom exato e o método mais indicado para ti.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  As nossas clientes em Vila Real sabem que podem contar com uma transição invisível e um resultado de fazer inveja.
                </p>
                <a
                  href={whatsappLink("Olá! Gostaria de enviar fotos do meu cabelo para um orçamento das extensões.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-medium hover:opacity-80 transition-opacity text-lg"
                >
                  Pede o teu orçamento agora <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
