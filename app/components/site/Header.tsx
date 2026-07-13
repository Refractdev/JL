"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks } from "@/src/lib/site";
import { whatsappLink } from "@/src/lib/whatsapp";
import { cn } from "@/src/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrolled(currentScrollY > 24);
          if (currentScrollY > 200) {
            setIsVisible(currentScrollY < lastScrollY);
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

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const menu = mobileMenuRef.current;
    if (!menu) return;
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleTab);
    setTimeout(() => first?.focus(), 50);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      aria-label="Navegação principal"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl md:text-2xl text-foreground">
            JL <span className="text-primary">&amp;</span> Extensões
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Estúdio de Beleza
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href) ||
                  (l.href.includes("#") && pathname + l.href === l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Olá! Gostaria de marcar um serviço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-95 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Marcar
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
          "lg:hidden fixed inset-x-0 top-[80px] bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden transition-all duration-300 ease-out",
          open
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex flex-col gap-2">
          {navLinks.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href) ||
                  (l.href.includes("#") && pathname + l.href === l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className={cn(
                  "text-base font-medium py-3 px-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-ring",
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={whatsappLink("Olá! Gostaria de marcar um serviço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium mt-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" /> Marcar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
