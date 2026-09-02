"use client";

import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";

/**
 * Mobile: pílula fixa à distância do polegar.
 * Desktop: botão que abre no hover, com um halo quente a pulsar.
 */
export default function FloatingWhatsApp() {
  const href = whatsappLink(WA_MESSAGES.floating);

  return (
    <>
      <div className="fixed inset-x-3 bottom-3 z-40 pb-[env(safe-area-inset-bottom)] md:hidden">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir avaliação gratuita no WhatsApp"
          className="btn btn-primary w-full shadow-deep"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#25D366]" aria-hidden />
          Avaliação gratuita
          <MessageCircle className="h-[1.125rem] w-[1.125rem] shrink-0" aria-hidden />
        </a>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para pedir avaliação gratuita"
        className="group fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full bg-mocha py-4 pl-5 pr-5 text-cream shadow-deep transition-all duration-500 ease-soft hover:-translate-y-1 hover:bg-bronze-deep md:flex"
      >
        <span
          className="absolute inset-0 -z-10 rounded-full bg-bronze/40 blur-xl motion-safe:animate-pulse-soft"
          aria-hidden
        />
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#25D366]" aria-hidden />
        <span className="grid transition-[grid-template-columns] duration-500 ease-soft [grid-template-columns:0fr] group-hover:[grid-template-columns:1fr] group-focus-visible:[grid-template-columns:1fr]">
          <span className="overflow-hidden whitespace-nowrap text-sm font-medium">
            <span className="pr-2.5">Avaliação gratuita</span>
          </span>
        </span>
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
      </a>
    </>
  );
}
