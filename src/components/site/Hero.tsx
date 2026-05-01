import { MessageCircle, ArrowDown } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import video from "@/assets/video-01.mp4";
import poster from "@/assets/hair-04.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden flex items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="relative z-10 container-tight w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-[hsl(var(--gold-light))] mb-6 reveal">
            Estúdio Premium · Vila Real
          </span>
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl text-white leading-[1.05] mb-6">
            Realça a tua beleza com{" "}
            <em className="text-[hsl(var(--gold-light))] not-italic font-normal">JL e Extensões</em>
          </h1>
          <p className="reveal text-base md:text-lg text-white/85 max-w-xl mb-10 leading-relaxed">
            Extensões de cabelo de qualidade premium, cuidado capilar especializado e
            todos os serviços de beleza num só lugar. Transformamos a tua autoestima.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink("Olá! Gostaria de marcar um serviço na JL e Extensões.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-gold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Marcar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-colors"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Descobre mais</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
