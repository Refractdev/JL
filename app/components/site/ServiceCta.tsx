import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/src/lib/whatsapp";

type ServiceCtaProps = {
  title: string;
  description: string;
  message: string;
  ctaLabel?: string;
};

/** Fecho das páginas de serviço: cartão escuro arredondado */
export default function ServiceCta({
  title,
  description,
  message,
  ctaLabel = "Falar no WhatsApp",
}: ServiceCtaProps) {
  return (
    <section className="section-tight">
      <div className="shell">
        <div
          className="relative overflow-hidden rounded-[2rem] bg-espresso px-7 py-14 text-center text-cream sm:rounded-[3rem] sm:px-12 sm:py-20"
          data-reveal
        >
          <div
            className="bloom bloom-bronze left-1/2 top-[-8rem] h-[30rem] w-[30rem] -translate-x-1/2 opacity-35"
            aria-hidden
          />
          <div className="relative z-10">
            <h2 className="display mx-auto max-w-[20ch] text-display-md text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-measure-lg leading-relaxed text-cream/70 text-pretty">
              {description}
            </p>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cream mt-9"
            >
              <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden />
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
