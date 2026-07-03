import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink } from "@/src/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Estúdio Premium &middot; Vila Real
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.05] mb-6">
            Realça a tua beleza natural
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Extensões de cabelo de qualidade premium, cuidado capilar
            especializado e todos os serviços de beleza num só lugar.
            Transformamos a tua autoestima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink(
                "Olá! Gostaria de marcar um serviço na JL e Extensões."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-md hover:opacity-90 hover:scale-[1.03] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Marcar sessão
            </a>
            <Link
              href="/#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary hover:bg-primary/5 transition-colors"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.3em] uppercase">
          Descobre mais
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
