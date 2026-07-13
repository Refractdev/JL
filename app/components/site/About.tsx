import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { business } from "@/src/lib/site";
import { whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";

export default function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-tight grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted order-2 lg:order-1">
          <Image
            src={imageSrc("hair-05", 800)}
            alt={`${business.owner} — trabalho de extensões no estúdio JL e Extensões`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 order-1 lg:order-2">
          <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Sobre
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            A Joice por trás da JL
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sou a {business.owner}. No estúdio em Vila Real, o foco são
            extensões de cabelo natural — e um atendimento claro, sem pressa,
            para chegares a um resultado que te reconheças.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Decidimos juntas o comprimento, o volume e a técnica. Explico o
            processo, a manutenção e o que faz sentido para o teu cabelo e o teu
            dia a dia. Também podes marcar maquilhagem, unhas e outros serviços
            de beleza no mesmo espaço.
          </p>
          <ul className="space-y-2 pt-1 text-sm text-foreground/85">
            <li>— Especialização em extensões</li>
            <li>— Atendimento em Vila Real</li>
            <li>— Avaliação gratuita e orçamento pelo WhatsApp</li>
          </ul>
          <a
            href={whatsappLink(
              "Olá Joice! Gostaria de falar contigo sobre uma marcação."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-95 mt-2"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com a Joice no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
