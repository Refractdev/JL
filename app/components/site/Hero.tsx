import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc, imageWebp, imageWebpSrcset } from "@/src/lib/images";
import { business } from "@/src/lib/site";
import OptimizedImage from "@/app/components/site/OptimizedImage";

const HERO_IMAGE = "gallery-extensions-01";

const facts = [
  { label: "Onde", value: business.address.city },
  { label: "Especialidade", value: "Extensões de cabelo" },
  { label: "Avaliação", value: "Gratuita, sem compromisso" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 md:pb-28">
      <link
        rel="preload"
        as="image"
        href={imageWebp(HERO_IMAGE, 1200)}
        imageSrcSet={imageWebpSrcset(HERO_IMAGE)}
        imageSizes="100vw"
        type="image/webp"
      />
      <link rel="preload" as="image" href={imageSrc(HERO_IMAGE, 1200)} />

      {/* Brilhos quentes por trás da moldura */}
      <div
        className="bloom bloom-blush -left-40 -top-24 h-[36rem] w-[36rem]"
        aria-hidden
      />
      <div
        className="bloom bloom-bronze -right-32 top-1/3 h-[30rem] w-[30rem]"
        aria-hidden
      />

      <div className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative min-h-[86svh] overflow-hidden rounded-[2rem] bg-espresso shadow-deep sm:rounded-[3rem] md:min-h-[90svh]">
          <OptimizedImage
            baseName={HERO_IMAGE}
            alt="Resultado de extensões de cabelo natural na JL e Extensões, Vila Real"
            fill
            priority
            widthHint={1200}
            sizes="100vw"
            className="absolute inset-0 !rounded-none"
            imgClassName="object-[center_20%] sm:object-center motion-safe:animate-[heroFloat_24s_cubic-bezier(0.33,1,0.68,1)_forwards]"
          />
          <div className="scrim-soft absolute inset-0" aria-hidden />

          <div className="relative z-10 flex min-h-[86svh] flex-col justify-end px-6 pb-14 pt-32 sm:px-10 md:min-h-[90svh] md:px-16 md:pb-20">
            <div className="max-w-3xl">
              <span
                className="eyebrow motion-safe:animate-rise-in"
                style={{ animationDelay: "150ms" }}
              >
                Atelier de beleza · Vila Real
              </span>

              <h1
                className="display mt-7 text-display-xl text-cream text-balance motion-safe:animate-rise-in"
                style={{ animationDelay: "260ms" }}
              >
                Extensões de cabelo{" "}
                <em className="font-normal not-italic text-champagne">natural</em>{" "}
                em Vila Real
              </h1>

              <p
                className="mt-7 max-w-measure text-base leading-relaxed text-cream/80 text-pretty motion-safe:animate-rise-in"
                style={{ animationDelay: "360ms" }}
              >
                Comprimento, volume e densidade desenhados para o teu cabelo — com
                uma conversa antes de qualquer decisão.
              </p>

              <div
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 motion-safe:animate-rise-in"
                style={{ animationDelay: "460ms" }}
              >
                <a
                  href={whatsappLink(WA_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-cream"
                >
                  <MessageCircle className="h-[1.125rem] w-[1.125rem] shrink-0" aria-hidden />
                  Pedir avaliação gratuita
                </a>
                <Link href="/#resultados" className="btn btn-ghost-light">
                  Ver resultados
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cartão que rompe a moldura — o gesto de camadas da casa */}
      <div className="shell -mt-10 md:-mt-14">
        <div
          className="card-soft mx-auto grid max-w-4xl gap-6 px-7 py-7 sm:grid-cols-3 sm:px-10 motion-safe:animate-rise-in"
          style={{ animationDelay: "620ms" }}
        >
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-bronze-deep">
                {f.label}
              </p>
              <p className="mt-1.5 font-serif text-xl text-mocha">{f.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
