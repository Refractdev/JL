import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { business, navLinks } from "@/src/lib/site";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/src/lib/whatsapp";

const socials = [
  { href: business.social.instagram, label: "Instagram da JL e Extensões", Icon: Instagram },
  { href: business.social.facebook, label: "Facebook da JL e Extensões", Icon: Facebook },
  { href: whatsappLink(), label: "WhatsApp da JL e Extensões", Icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative mt-6 overflow-hidden rounded-t-[2rem] bg-espresso text-cream sm:rounded-t-[3rem]">
      <div
        className="bloom bloom-bronze left-1/4 top-[-10rem] h-[34rem] w-[34rem] opacity-25"
        aria-hidden
      />

      <div className="shell relative z-10 pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 font-serif text-base text-cream"
                aria-hidden
              >
                JL
              </span>
              <span className="font-serif text-2xl">JL e Extensões</span>
            </div>
            <p className="mt-5 max-w-measure text-sm leading-relaxed text-cream/60 text-pretty">
              Especialista em extensões de cabelo natural e boutique de beleza em
              Vila Real.
            </p>

            <div className="mt-7 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/8 text-cream/70 transition-all duration-500 ease-soft hover:-translate-y-0.5 hover:bg-cream/15 hover:text-cream"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Rodapé">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-champagne">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-champagne">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="transition-colors duration-300 hover:text-cream"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="break-all transition-colors duration-300 hover:text-cream"
                >
                  {business.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
              </li>
            </ul>

            <ul className="mt-6 space-y-2 rounded-2xl bg-cream/5 p-4 text-xs text-cream/50">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-cream/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-cream/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} JL e Extensões · Vila Real</span>
          <span>{business.address.country}</span>
        </div>
      </div>
    </footer>
  );
}
