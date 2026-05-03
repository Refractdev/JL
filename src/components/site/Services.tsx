import { whatsappLink } from "@/lib/whatsapp";
import { ArrowRight, Scissors, Sparkles, Eye, Hand, Eraser } from "lucide-react";
import ext1 from "@/assets/extension-process-02.jpg";
import ext2 from "@/assets/materials-01.jpg";
import ext3 from "@/assets/hair-03.jpg";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  message?: string;
  link?: string;
};

const others: Service[] = [
  {
    title: "Cabeleireiro",
    description: "Cortes, cor, mechas, hidratação e tratamentos personalizados.",
    icon: Scissors,
    message: "Olá! Gostaria de marcar um serviço de cabeleireiro.",
  },
  {
    title: "Maquilhagem",
    description: "Maquilhagem para casamentos, eventos e ocasiões especiais.",
    icon: Sparkles,
    link: "/maquilhagem-vila-real",
  },
  {
    title: "Cílios",
    description: "Extensões de cílios fio a fio, volume russo e lifting.",
    icon: Eye,
    message: "Olá! Gostaria de marcar um serviço de cílios.",
  },
  {
    title: "Unhas",
    description: "Manicure, pedicure, gel e nail art com acabamento impecável.",
    icon: Hand,
    link: "/unhas-vila-real",
  },
  {
    title: "Depilação",
    description: "Depilação com cera quente e fria, suave e duradoura.",
    icon: Eraser,
    message: "Olá! Gostaria de marcar depilação.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Os Nossos Serviços
          </span>
          <h2 className="reveal font-serif text-3xl md:text-5xl text-foreground leading-tight mb-5">
            Tudo o que precisas, num{" "}
            <em className="text-gold not-italic">só lugar</em>
          </h2>
          <p className="reveal text-foreground/70">
            Especialistas em extensões de cabelo e dedicados a cada detalhe da tua beleza.
          </p>
        </div>

        {/* Featured: Extensões */}
        <div className="reveal grid lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-elegant group min-h-[420px]">
            <img
              src={ext1}
              alt="Extensões de cabelo"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[hsl(var(--gold-light))] mb-3">
                Especialidade da Casa
              </span>
              <h3 className="font-serif text-3xl md:text-4xl mb-3">Extensões de Cabelo</h3>
              <p className="text-white/85 max-w-md mb-6 leading-relaxed">
                Cabelo natural premium, em diversas cores e comprimentos. Aplicação profissional
                que respeita o teu cabelo e garante um resultado deslumbrante e duradouro.
              </p>
              <a
                href="/extensoes-cabelo-vila-real"
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-medium w-fit hover:scale-[1.03] transition-transform"
              >
                Saber mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-rows-2 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img src={ext2} alt="Variedade de cores de extensões" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img src={ext3} alt="Resultado de extensões" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((s) => (
            <a
              key={s.title}
              href={s.link || whatsappLink(s.message!)}
              target={s.link ? undefined : "_blank"}
              rel={s.link ? undefined : "noopener noreferrer"}
              className="reveal group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="relative h-32 sm:h-48 flex items-center justify-center bg-muted/30 group-hover:bg-muted/50 transition-colors">
                <s.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold/40 group-hover:text-gold/60 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-gold font-medium">
                  Marcar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
