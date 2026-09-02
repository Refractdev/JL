import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc, imageWebp, imageWebpSrcset } from "@/src/lib/images";
import OptimizedImage from "@/app/components/site/OptimizedImage";

interface HeroServiceProps {
  title: string;
  subtitle: string;
  description: string;
  /** Sem foto real do serviço, o hero cai para a versão tipográfica em creme */
  imageBase?: string;
  imageAlt?: string;
  ctaMessage?: string;
  ctaLabel?: string;
  /** Palavra do título a destacar */
  accentWord?: string;
}

export default function HeroService({
  title,
  subtitle,
  description,
  imageBase,
  imageAlt = "",
  ctaMessage = WA_MESSAGES.generic,
  ctaLabel = "Pedir avaliação no WhatsApp",
  accentWord,
}: HeroServiceProps) {
  const parts = accentWord ? title.split(accentWord) : null;

  const heading =
    parts && parts.length === 2 ? (
      <>
        {parts[0]}
        <em className="not-italic text-champagne">{accentWord}</em>
        {parts[1]}
      </>
    ) : (
      title
    );

  const headingLight =
    parts && parts.length === 2 ? (
      <>
        {parts[0]}
        <em className="not-italic text-bronze-deep">{accentWord}</em>
        {parts[1]}
      </>
    ) : (
      title
    );

  const cta = (
    <a
      href={whatsappLink(ctaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={imageBase ? "btn btn-cream" : "btn btn-primary"}
    >
      <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden />
      {ctaLabel}
    </a>
  );

  if (!imageBase) {
    return (
      <section className="relative overflow-hidden px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative flex min-h-[62svh] flex-col justify-end overflow-hidden rounded-[2rem] bg-blush/60 px-6 pb-16 pt-32 sm:rounded-[3rem] sm:px-12 sm:pb-20 sm:pt-40 md:px-16">
          <div
            className="bloom bloom-bronze right-[-8rem] top-[-8rem] h-[32rem] w-[32rem]"
            aria-hidden
          />
          <div
            className="bloom bloom-blush left-[-10rem] bottom-[-10rem] h-[30rem] w-[30rem]"
            aria-hidden
          />

          <div className="relative z-10 max-w-3xl">
            <span
              className="eyebrow bg-paper/80 motion-safe:animate-rise-in"
              style={{ animationDelay: "100ms" }}
            >
              {subtitle}
            </span>
            <h1
              className="display mt-7 text-display-lg text-mocha text-balance motion-safe:animate-rise-in"
              style={{ animationDelay: "200ms" }}
            >
              {headingLight}
            </h1>
            <p
              className="lede mt-6 max-w-measure-lg text-pretty motion-safe:animate-rise-in"
              style={{ animationDelay: "300ms" }}
            >
              {description}
            </p>
            <div
              className="mt-9 motion-safe:animate-rise-in"
              style={{ animationDelay: "400ms" }}
            >
              {cta}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden px-3 pt-3 sm:px-5 sm:pt-5">
      <link
        rel="preload"
        as="image"
        href={imageWebp(imageBase, 1200)}
        imageSrcSet={imageWebpSrcset(imageBase)}
        imageSizes="100vw"
        type="image/webp"
      />
      <link rel="preload" as="image" href={imageSrc(imageBase, 1200)} />

      <div className="relative flex min-h-[70svh] items-end overflow-hidden rounded-[2rem] bg-espresso shadow-deep sm:rounded-[3rem]">
        <OptimizedImage
          baseName={imageBase}
          alt={imageAlt}
          fill
          priority
          widthHint={1200}
          sizes="100vw"
          className="absolute inset-0 !rounded-none"
          imgClassName="object-[center_22%] sm:object-center"
        />
        <div className="scrim-soft absolute inset-0" aria-hidden />

        <div className="relative z-10 w-full px-6 pb-14 pt-32 sm:px-10 sm:pb-16 md:px-16 md:pb-20">
          <div className="max-w-3xl">
            <span
              className="eyebrow motion-safe:animate-rise-in"
              style={{ animationDelay: "100ms" }}
            >
              {subtitle}
            </span>
            <h1
              className="display mt-7 text-display-lg text-cream text-balance motion-safe:animate-rise-in"
              style={{ animationDelay: "200ms" }}
            >
              {heading}
            </h1>
            <p
              className="mt-6 max-w-measure-lg text-base leading-relaxed text-cream/80 text-pretty motion-safe:animate-rise-in"
              style={{ animationDelay: "300ms" }}
            >
              {description}
            </p>
            <div
              className="mt-9 motion-safe:animate-rise-in"
              style={{ animationDelay: "400ms" }}
            >
              {cta}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
