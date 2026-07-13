import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";
import OptimizedImage from "@/app/components/site/OptimizedImage";

interface HeroServiceProps {
  title: string;
  subtitle: string;
  description: string;
  imageBase: string;
  imageAlt: string;
  ctaMessage?: string;
  ctaLabel?: string;
}

export default function HeroService({
  title,
  subtitle,
  description,
  imageBase,
  imageAlt,
  ctaMessage = WA_MESSAGES.generic,
  ctaLabel = "Pedir avaliação no WhatsApp",
}: HeroServiceProps) {
  return (
    <section className="relative min-h-[52svh] sm:min-h-[55vh] md:min-h-[60vh] flex items-end overflow-hidden">
      <link
        rel="preload"
        as="image"
        href={imageSrc(imageBase, 800)}
        imageSrcSet={`${imageSrc(imageBase, 400)} 400w, ${imageSrc(imageBase, 800)} 800w`}
        imageSizes="100vw"
      />
      <OptimizedImage
        baseName={imageBase}
        alt={imageAlt}
        fill
        priority
        widthHint={800}
        sizes="100vw"
        quality={75}
        className="absolute inset-0"
        imgClassName="object-cover object-[center_25%] sm:object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/45 to-foreground/25"
        aria-hidden
      />

      <div className="relative z-10 container-tight py-14 sm:py-16 md:py-20 w-full pb-28 md:pb-20">
        <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-primary-foreground/80 mb-3">
          {subtitle}
        </p>
        <h1 className="font-serif text-[1.85rem] sm:text-3xl md:text-5xl text-primary-foreground leading-tight max-w-3xl text-balance mb-3 sm:mb-4">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-primary-foreground/90 max-w-xl leading-relaxed mb-6 sm:mb-8 text-pretty">
          {description}
        </p>
        <a
          href={whatsappLink(ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary min-h-[48px] bg-primary-foreground text-foreground hover:opacity-95"
        >
          <MessageCircle className="w-5 h-5" aria-hidden />
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
