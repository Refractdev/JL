import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { business, navLinks } from "@/src/lib/site";
import { WHATSAPP_DISPLAY } from "@/src/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-2xl text-background mb-2">
            JL <span className="text-primary">&amp;</span> Extensões
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-4">
            Estúdio de Beleza
          </p>
          <p className="text-sm leading-relaxed text-background/70 mb-6">
            Especialistas em extensões de cabelo e serviços de beleza premium em
            Vila Real.
          </p>
          <div className="flex gap-4">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-background/60 hover:text-background transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-background/60 hover:text-background transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${business.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-background/60 hover:text-background transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-background transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Contacto
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <a
                href={`tel:${business.phone}`}
                className="hover:text-background transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <a
                href={`mailto:${business.email}`}
                className="hover:text-background transition-colors"
              >
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 text-xs text-background/50 text-center">
          &copy; {new Date().getFullYear()} JL e Extensões &middot; Todos os
          direitos reservados
        </div>
      </div>
    </footer>
  );
}
