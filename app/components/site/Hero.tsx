import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end md:items-center"
    >
      <Image
        src={imageSrc("hair-01", 1200)}
        alt="Resultado de extensões de cabelo no estúdio JL e Extensões em Vila Real"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/45 to-foreground/20" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 w-full pt-28 pb-16 md:pb-24">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-block text-xs tracking-[0.28em] uppercase text-primary-foreground/80 mb-4">
            Estúdio de beleza · Vila Real
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-5 text-balance">
            Extensões de cabelo natural em Vila Real
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 max-w-xl mb-8 leading-relaxed">
            Comprimento e volume com resultado natural. Avaliação gratuita e
            orçamento personalizado pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink(
                "Olá! Gostaria de uma avaliação gratuita para extensões de cabelo."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Marcar no WhatsApp
            </a>
            <Link
              href="/#resultados"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Ver transformações
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
