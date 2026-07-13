import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";
import OptimizedImage from "@/app/components/site/OptimizedImage";

const HERO_IMAGE = "gallery-extensions-01";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end md:items-center"
    >
      {/* Preload LCP for instant first paint on mobile */}
      <link
        rel="preload"
        as="image"
        href={imageSrc(HERO_IMAGE, 800)}
        imageSrcSet={`${imageSrc(HERO_IMAGE, 400)} 400w, ${imageSrc(HERO_IMAGE, 800)} 800w, ${imageSrc(HERO_IMAGE, 1200)} 1200w`}
        imageSizes="100vw"
      />

      <OptimizedImage
        baseName={HERO_IMAGE}
        alt="Resultado de extensões de cabelo natural na JL e Extensões, Vila Real"
        fill
        priority
        widthHint={800}
        sizes="100vw"
        quality={75}
        className="absolute inset-0"
        imgClassName="object-cover object-[center_20%] sm:object-center motion-safe:md:animate-[heroZoom_18s_ease-out_forwards]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/45 to-foreground/25"
        aria-hidden
      />

      <div className="relative z-10 container-tight w-full pt-24 pb-28 md:pt-28 md:pb-24">
        <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-foreground/85 mb-3 sm:mb-4">
          JL e Extensões · Vila Real
        </p>
        <h1 className="font-serif text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground max-w-3xl text-balance mb-4 sm:mb-5">
          Extensões de cabelo natural em Vila Real
        </h1>
        <p className="text-[0.95rem] sm:text-base md:text-lg text-primary-foreground/90 max-w-xl mb-7 sm:mb-8 leading-relaxed text-pretty">
          Transformações elegantes com resultado natural e personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={whatsappLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-[48px] bg-primary-foreground text-foreground hover:opacity-95 text-center"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden />
            <span className="sm:hidden">Avaliação gratuita</span>
            <span className="hidden sm:inline">
              Pedir avaliação gratuita no WhatsApp
            </span>
          </a>
          <Link
            href="/#resultados"
            className="btn-secondary min-h-[48px] border-primary-foreground/40 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground"
          >
            Ver resultados
          </Link>
        </div>
      </div>
    </section>
  );
}
