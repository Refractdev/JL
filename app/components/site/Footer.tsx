import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { business, navLinks } from "@/src/lib/site";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/src/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-2xl text-background mb-2">
            JL <span className="text-accent">&amp;</span> Extensões
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-background/50 mb-4">
            {business.tagline}
          </p>
          <p className="text-sm leading-relaxed text-background/70 mb-6">
            Especialista em extensões de cabelo natural e boutique de beleza em
            Vila Real.
          </p>
          <div className="flex gap-4">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da JL e Extensões"
              className="text-background/60 hover:text-background transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da JL e Extensões"
              className="text-background/60 hover:text-background transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da JL e Extensões"
              className="text-background/60 hover:text-background transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
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
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
            Contacto
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden />
              <a
                href={`tel:${business.phone}`}
                className="hover:text-background transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden />
              <a
                href={`mailto:${business.email}`}
                className="hover:text-background transition-colors"
              >
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden />
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
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-6 text-xs text-background/50 text-center">
          &copy; {new Date().getFullYear()} JL e Extensões · Vila Real
        </div>
      </div>
    </footer>
  );
}
