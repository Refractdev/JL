import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-tight flex items-center justify-between h-20">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-serif text-xl md:text-2xl text-foreground">
            JL <span className="text-gold">&</span> Extensões
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Estúdio de Beleza
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Olá! Gostaria de marcar um serviço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium shadow-gold hover:opacity-95 hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-gold py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink("Olá! Gostaria de marcar um serviço.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full text-sm font-medium mt-2"
            >
              <MessageCircle className="w-4 h-4" /> Marcar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
