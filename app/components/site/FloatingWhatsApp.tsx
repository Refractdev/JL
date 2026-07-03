"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/src/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative" />
    </a>
  );
}
