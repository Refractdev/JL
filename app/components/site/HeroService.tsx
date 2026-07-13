import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";

interface HeroServiceProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  ctaLabel?: string;
}

export default function HeroService({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  whatsappMessage,
  ctaLabel = "Marcar no WhatsApp",
}: HeroServiceProps) {
  return (
    <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-end overflow-hidden">
      <Image
        src={imageSrc(image, 1200)}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-foreground/25" />

      <div className="relative z-10 container-tight w-full pt-28 pb-12 md:pb-16 text-primary-foreground">
        <span className="inline-block text-xs tracking-[0.28em] uppercase text-primary-foreground/80 mb-3">
          {subtitle}
        </span>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 max-w-3xl text-balance">
          {title}
        </h1>
        <p className="text-primary-foreground/90 max-w-2xl leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-95"
          >
            <MessageCircle className="w-4 h-4" />
            {ctaLabel}
          </a>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10"
          >
            Ver contacto
          </Link>
        </div>
      </div>
    </section>
  );
}
