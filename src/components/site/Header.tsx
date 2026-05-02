import { useEffect, useState, useRef, useCallback } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Smooth header show/hide on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrolled(currentScrollY > 24);
          // Hide header when scrolling down, show when scrolling up (after 200px)
          if (currentScrollY > 200) {
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
          } else {
            setIsVisible(true);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close menu on ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!open) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    // Focus first element when menu opens
    setTimeout(() => firstElement?.focus(), 50);

    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-soft border-b border-border/60"
          : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      aria-label="Navegação principal"
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
            ref={menuButtonRef}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={cn(
          "lg:hidden fixed inset-x-0 top-[80px] bg-background/95 backdrop-blur-xl border-t border-border shadow-elegant overflow-hidden transition-all duration-300 ease-out",
          open
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="container-tight py-6 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              className="text-base font-medium text-foreground/80 hover:text-gold hover:bg-muted/50 py-3 px-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de marcar um serviço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full text-sm font-medium mt-4 hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" /> Marcar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
