import before from "@/assets/before-01.jpg";
import after from "@/assets/extension-process-03.jpg";

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="reveal inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Transformação
          </span>
          <h2 className="reveal font-serif text-3xl md:text-5xl text-foreground leading-tight">
            Antes e <em className="text-gold not-italic">Depois</em>
          </h2>
          <p className="reveal text-foreground/70 mt-4">
            Resultados reais de clientes que confiaram na nossa arte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="reveal relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={before} alt="Antes" className="w-full h-full object-cover" loading="lazy" />
            <span className="absolute top-5 left-5 bg-background/95 backdrop-blur px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase font-medium text-foreground">
              Antes
            </span>
          </div>
          <div className="reveal relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={after} alt="Depois" className="w-full h-full object-cover" loading="lazy" />
            <span className="absolute top-5 left-5 bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase font-medium shadow-gold">
              Depois
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
