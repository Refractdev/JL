import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Gem,
  Scissors,
  Eye,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { featuredService, serviceCards } from "@/src/lib/site";
import { whatsappLink } from "@/src/lib/whatsapp";
import OptimizedImage from "@/app/components/site/OptimizedImage";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  gem: Gem,
  scissors: Scissors,
  eye: Eye,
  leaf: Leaf,
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="section relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        className="bloom bloom-bronze right-[-12rem] top-20 h-[32rem] w-[32rem]"
        aria-hidden
      />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="eyebrow">Serviços</span>
          <h2
            id="services-heading"
            className="display mt-6 text-display-lg text-balance"
          >
            O que podes <em className="not-italic text-bronze-deep">marcar</em>
          </h2>
          <p className="lede mx-auto mt-6 max-w-measure-lg text-pretty">
            Cada serviço começa por uma conversa. O orçamento é sempre
            personalizado e enviado pelo WhatsApp, sem compromisso.
          </p>
        </div>

        {/* Destaque — extensões, com a foto a sair da moldura */}
        <article
          className="card-soft relative mt-14 grid overflow-hidden lg:mt-20 lg:grid-cols-12"
          data-reveal
        >
          <div className="group relative lg:col-span-7">
            <OptimizedImage
              baseName={featuredService.image}
              alt={featuredService.imageAlt}
              ratio="4 / 3"
              widthHint={1200}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="frame-zoom h-full !rounded-none lg:!rounded-r-[3rem]"
              imgClassName="h-full"
            />
            <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-4 py-2 text-xs font-medium text-bronze-deep backdrop-blur-sm">
              Serviço principal
            </span>
          </div>

          <div className="flex flex-col justify-center gap-5 px-7 py-10 sm:px-10 lg:col-span-5 lg:px-12 lg:py-14">
            <h3 className="display text-display-sm">{featuredService.title}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-cocoa text-pretty">
              {featuredService.benefit}
            </p>
            <p className="inline-flex w-fit rounded-full bg-blush/70 px-4 py-2 text-xs font-medium text-bronze-deep">
              {featuredService.pricingNote}
            </p>
            <div className="mt-2 flex flex-col gap-3">
              <a
                href={whatsappLink(featuredService.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                {featuredService.ctaLabel}
              </a>
              <Link href={featuredService.link} className="btn btn-soft">
                {featuredService.secondaryCtaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, i) => {
            const Icon = icons[service.icon] ?? Sparkles;
            const isWhatsApp = Boolean(service.message);
            const inner = (
              <>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper/80 text-bronze-deep shadow-soft transition-transform duration-700 ease-soft group-hover:-translate-y-1">
                  <Icon className="h-6 w-6" aria-hidden strokeWidth={1.4} />
                </span>
                <div className="mt-6 flex-1">
                  <h3 className="font-serif text-2xl text-mocha">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa text-pretty">
                    {service.benefit}
                  </p>
                </div>
                <p className="mt-5 text-xs text-taupe">{service.pricingNote}</p>
                <span className="link-soft mt-3">
                  {service.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </>
            );

            const className =
              "card-blush group flex flex-col p-7 transition-transform duration-700 ease-soft hover:-translate-y-1.5";

            return (
              <div
                key={service.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 110}ms` }}
              >
                {isWhatsApp ? (
                  <a
                    href={whatsappLink(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={service.link || "#"} className={className}>
                    {inner}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
