import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { featuredExtension, serviceCards } from "@/src/lib/site";
import { whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-muted/40">
      <div className="container-tight">
        <div className="max-w-2xl mb-10 md:mb-12">
          <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            O que fazemos
          </h2>
        </div>

        <div className="relative overflow-hidden border border-border bg-card mb-8">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <Image
                src={imageSrc(featuredExtension.image, 800)}
                alt={featuredExtension.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
              <span className="text-xs tracking-[0.28em] uppercase text-primary">
                Serviço principal
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                {featuredExtension.title}
              </h3>
              <p className="text-foreground/90 font-medium">
                {featuredExtension.benefit}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {featuredExtension.description}
              </p>
              <p className="text-sm text-muted-foreground">
                Orçamento personalizado pelo WhatsApp
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={whatsappLink(featuredExtension.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  {featuredExtension.cta}
                </a>
                <Link
                  href={featuredExtension.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Ver detalhes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((service) => {
            const isWhatsApp = Boolean(service.message);
            const href = isWhatsApp
              ? whatsappLink(service.message!)
              : service.link || "#";

            return (
              <a
                key={service.title}
                href={href}
                target={isWhatsApp ? "_blank" : undefined}
                rel={isWhatsApp ? "noopener noreferrer" : undefined}
                className="group border border-border bg-card overflow-hidden block hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={imageSrc(service.image, 800)}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {service.benefit}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {service.fromPrice
                      ? `A partir de ${service.fromPrice}`
                      : "Orçamento personalizado"}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                    {service.cta}{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
