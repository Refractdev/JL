import { ExternalLink } from "lucide-react";
import { business, socialProofPhotos } from "@/src/lib/site";
import OptimizedImage from "@/app/components/site/OptimizedImage";

/**
 * Prepared for future real Google reviews.
 * Do not populate with fictional testimonials or ratings.
 * Enable via features.showWrittenReviews when authorized.
 */
function ReviewSlot() {
  return null;
}

export default function SocialProof() {
  const googleUrl = business.googleBusinessUrl?.trim();

  return (
    <section
      id="prova-social"
      className="section-padding border-b border-border"
      aria-labelledby="social-proof-heading"
    >
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
              Confiança
            </p>
            <h2
              id="social-proof-heading"
              className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl text-foreground leading-tight text-balance"
            >
              Clientes de Vila Real confiam no nosso trabalho
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
              Resultados reais, feitos no estúdio. Vê o que as clientes partilham
              no Google — e as transformações abaixo.
            </p>
          </div>

          {googleUrl ? (
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 min-h-[48px]"
            >
              Ver avaliações no Google
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          ) : (
            <p className="text-sm text-muted-foreground max-w-xs md:text-right">
              Em breve: link direto para as avaliações no Google Business.
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 -mx-1">
          {socialProofPhotos.map((photo, i) => (
            <div
              key={photo.image}
              className="relative aspect-[3/4] overflow-hidden bg-muted group"
            >
              <OptimizedImage
                baseName={photo.image}
                alt={photo.alt}
                fill
                widthHint={400}
                priority={i < 2}
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={65}
                className="absolute inset-0"
                imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <ReviewSlot />
      </div>
    </section>
  );
}
