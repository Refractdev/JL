import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import OptimizedImage from "@/app/components/site/OptimizedImage";

const steps = [
  {
    title: "Avaliação",
    description:
      "Analisamos o teu cabelo, o objetivo e a rotina. Definimos técnica, comprimento e volume.",
    image: "extension-process-01",
    alt: "Avaliação de cabelo para extensões na JL e Extensões",
  },
  {
    title: "Aplicação",
    description:
      "Aplicação cuidada, focada num resultado natural que se integra com o teu cabelo.",
    image: "extension-process-02",
    alt: "Processo de aplicação de extensões de cabelo",
  },
  {
    title: "Manutenção",
    description:
      "Revisões periódicas para manter conforto, densidade e o aspeto natural ao longo do tempo.",
    image: "extension-process-03",
    alt: "Manutenção de extensões de cabelo em Vila Real",
  },
] as const;

const benefits = [
  "Comprimento e volume à tua medida",
  "Resultado que parece teu no dia-a-dia",
  "Orientação clara sobre cuidados e manutenção",
];

export default function Expertise() {
  return (
    <section
      id="especialidade"
      className="section-padding"
      aria-labelledby="expertise-heading"
    >
      <div className="container-tight">
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
            Especialidade
          </p>
          <h2
            id="expertise-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance"
          >
            Especialista em extensões
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Comprimento, volume e densidade com aplicação cuidada — para um
            resultado que parece teu.
          </p>
        </div>

        <ul className="grid sm:grid-cols-3 gap-4 mb-12">
          {benefits.map((item) => (
            <li
              key={item}
              className="border-l-2 border-primary/40 pl-4 py-1 text-sm md:text-base text-foreground/85"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, i) => (
            <article key={step.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                <OptimizedImage
                  baseName={step.image}
                  alt={step.alt}
                  fill
                  widthHint={800}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={68}
                  className="absolute inset-0"
                  imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-primary mb-1">
                Passo {i + 1}
              </p>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href={whatsappLink(WA_MESSAGES.expertise)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span className="sm:hidden">Será para mim?</span>
            <span className="hidden sm:inline">
              Quero saber se as extensões são para mim
            </span>
          </a>
          <Link
            href="/extensoes-cabelo-vila-real"
            className="text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Saber mais sobre extensões em Vila Real
          </Link>
        </div>
      </div>
    </section>
  );
}
