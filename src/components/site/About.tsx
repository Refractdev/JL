import { Sparkles, Heart, Award } from "lucide-react";
import img from "@/assets/hair-02.jpg";

const highlights = [
  { icon: Sparkles, title: "Qualidade Premium", text: "Extensões e produtos de excelência." },
  { icon: Heart, title: "Cuidado Personalizado", text: "Cada cliente, uma experiência única." },
  { icon: Award, title: "Experiência & Arte", text: "Profissionalismo e técnica apurada." },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-[2rem]" />
          <img
            src={img}
            alt="Trabalho de extensões na JL e Extensões"
            className="relative rounded-[2rem] shadow-elegant w-full h-[520px] object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl px-6 py-5 shadow-elegant border border-border hidden md:block">
            <p className="font-serif text-3xl text-gold">+10</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Anos a transformar
            </p>
          </div>
        </div>

        <div>
          <span className="reveal inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Sobre Nós
          </span>
          <h2 className="reveal font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">
            Beleza que transforma a tua{" "}
            <em className="text-gold not-italic">autoestima</em>
          </h2>
          <div className="reveal space-y-5 text-foreground/75 leading-relaxed">
            <p>
              A <strong className="text-foreground">JL e Extensões</strong> é um estúdio dedicado
              à beleza feminina, especialista em extensões de cabelo de alta qualidade. No nosso
              espaço acolhedor em Vila Real, cada cliente é tratada com atenção exclusiva.
            </p>
            <p>
              Mais do que serviços, oferecemos uma transformação completa — combinando técnica
              apurada, produtos premium e o cuidado que mereces para te sentires sempre
              radiante.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-3 gap-5 mt-10">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-gold transition-shadow"
              >
                <h.icon className="w-6 h-6 text-gold mb-3" />
                <p className="font-serif text-lg text-foreground mb-1">{h.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
