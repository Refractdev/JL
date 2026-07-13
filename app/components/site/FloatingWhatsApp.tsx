"use client";

import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";

/**
 * Mobile: full-width sticky conversion bar (thumb-friendly).
 * Desktop: floating WhatsApp button.
 */
export default function FloatingWhatsApp() {
  const href = whatsappLink(WA_MESSAGES.floating);

  return (
    <>
      {/* Mobile sticky bar */}
      <div
        className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 backdrop-blur-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full min-h-[48px] bg-[#25D366] text-white hover:opacity-95 shadow-md"
          aria-label="Pedir avaliação gratuita no WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden />
          Avaliação gratuita no WhatsApp
        </a>
      </div>

      {/* Desktop FAB */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para pedir avaliação gratuita"
        className="hidden md:flex fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-[#25D366] text-white items-center justify-center shadow-lg hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
          aria-hidden
        />
        <MessageCircle className="w-8 h-8 relative" aria-hidden />
      </a>
    </>
  );
}
