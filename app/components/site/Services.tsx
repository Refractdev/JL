import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { featuredService, serviceCards } from "@/src/lib/site";
import { whatsappLink } from "@/src/lib/whatsapp";
import OptimizedImage from "@/app/components/site/OptimizedImage";

export default function Services() {
  return (
    <section
      id="servicos"
      className="section-padding bg-muted/50"
      aria-labelledby="services-heading"
    >
      <div className="container-tight">
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
            Serviços
          </p>
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance"
          >
            O que podes marcar
          </h2>
        </div>

        {/* Featured: Extensões */}
        <article className="grid md:grid-cols-2 gap-0 mb-10 overflow-hidden border border-border bg-card">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[360px] order-first">
            <OptimizedImage
              baseName={featuredService.image}
              alt={featuredService.imageAlt}
              fill
              widthHint={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="absolute inset-0"
              imgClassName="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10 space-y-4">
            <p className="text-[11px] tracking-[0.28em] uppercase text-primary">
              Serviço principal
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">
              {featuredService.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {featuredService.benefit}
            </p>
            <p className="text-sm font-medium text-foreground">
              {featuredService.pricingNote}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappLink(featuredService.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4" aria-hidden />
                {featuredService.ctaLabel}
              </a>
              <Link
                href={featuredService.link}
                className="btn-secondary"
              >
                {featuredService.secondaryCtaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </article>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((service) => {
            const isWhatsApp = Boolean(service.message);
            const ctaClass =
              "inline-flex items-center gap-1.5 text-sm font-medium text-primary pt-2 hover:underline underline-offset-4";

            return (
              <article
                key={service.title}
                className="group flex flex-col border border-border bg-card overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <OptimizedImage
                    baseName={service.image}
                    alt={service.imageAlt}
                    fill
                    widthHint={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={65}
                    className="absolute inset-0"
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 space-y-2">
                  <h3 className="font-serif text-xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.benefit}
                  </p>
                  <p className="text-xs text-foreground/70 pt-1">
                    {service.pricingNote}
                  </p>
                  {isWhatsApp ? (
                    <a
                      href={whatsappLink(service.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ctaClass}
                    >
                      {service.ctaLabel}
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <Link href={service.link || "#"} className={ctaClass}>
                      {service.ctaLabel}
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
