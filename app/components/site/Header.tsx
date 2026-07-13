"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { business, navLinks } from "@/src/lib/site";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
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
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      aria-label="Navegação principal"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-serif text-xl md:text-2xl transition-colors",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            JL <span className={scrolled ? "text-primary" : "text-accent"}>&amp;</span> Extensões
          </span>
          <span
            className={cn(
              "text-[10px] uppercase tracking-[0.22em] transition-colors",
              scrolled ? "text-muted-foreground" : "text-primary-foreground/75"
            )}
          >
            {business.tagline}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {navLinks.map((l) => {
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href.split("#")[0]) &&
                  !l.href.includes("#");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? scrolled
                      ? "text-primary"
                      : "text-primary-foreground"
                    : scrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-primary-foreground/85 hover:text-primary-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(WA_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            WhatsApp
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(
              "lg:hidden p-2 rounded-sm transition-colors",
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-foreground/10"
            )}
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
          "lg:hidden fixed inset-x-0 top-[80px] bg-background border-t border-border overflow-hidden transition-all duration-300 ease-out",
          open
            ? "max-h-[calc(100vh-80px)] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-6 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              className="text-base font-medium py-3 px-3 text-foreground/90 hover:text-primary hover:bg-muted/60 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink(WA_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            Marcar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
