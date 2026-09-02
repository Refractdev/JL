"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { business, navLinks } from "@/src/lib/site";
import { WA_MESSAGES, whatsappLink, WHATSAPP_DISPLAY } from "@/src/lib/whatsapp";
import { cn } from "@/src/lib/utils";

type HeaderProps = {
  /** Páginas sem imagem escura por trás (404) precisam do estado sólido */
  alwaysSolid?: boolean;
};

export default function Header({ alwaysSolid = false }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => first?.focus(), 150);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const close = useCallback(() => setOpen(false), []);
  const solid = alwaysSolid || scrolled || open;

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-5">
      <div
        className={cn(
          "flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-[background-color,box-shadow,backdrop-filter,padding] duration-700 ease-soft sm:px-5 md:px-6",
          solid
            ? "bg-paper/95 shadow-soft backdrop-blur-xl"
            : "bg-transparent shadow-none"
        )}
      >
        <Link
          href="/"
          aria-label="JL e Extensões — início"
          className="flex items-center gap-3 pl-1"
        >
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-base transition-colors duration-700",
              solid
                ? "bg-mocha text-cream"
                : "bg-cream/20 text-cream backdrop-blur-md"
            )}
            aria-hidden
          >
            JL
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span
              className={cn(
                "font-serif text-lg transition-colors duration-700",
                solid ? "text-mocha" : "text-cream"
              )}
            >
              JL e Extensões
            </span>
            <span
              className={cn(
                "text-[0.625rem] font-medium uppercase tracking-[0.16em] transition-colors duration-700",
                solid ? "text-taupe" : "text-cream/70"
              )}
            >
              {business.address.city}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((l) => {
            const base = l.href.split("#")[0];
            const isActive =
              l.href === "/"
                ? pathname === "/"
                : base.length > 1 && pathname.startsWith(base);

            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-500",
                  solid
                    ? isActive
                      ? "bg-blush/80 text-bronze-deep"
                      : "text-cocoa hover:bg-blush/50 hover:text-mocha"
                    : isActive
                      ? "bg-cream/20 text-cream backdrop-blur-md"
                      : "text-cream/80 hover:bg-cream/15 hover:text-cream"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(WA_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "btn hidden !min-h-[44px] !px-5 !py-2.5 !text-sm md:inline-flex",
              solid ? "btn-primary" : "btn-ghost-light"
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Marcar
          </a>

          <button
            ref={triggerRef}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 lg:hidden",
              solid
                ? "bg-blush/70 text-mocha"
                : "bg-cream/15 text-cream backdrop-blur-md"
            )}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <span className="flex w-4 flex-col gap-[4px]" aria-hidden>
                <span className="h-[1.5px] w-full rounded-full bg-current" />
                <span className="h-[1.5px] w-full rounded-full bg-current" />
                <span className="h-[1.5px] w-2/3 rounded-full bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Véu por trás do painel — separa-o da página sem o esconder */}
      <div
        onClick={close}
        aria-hidden
        className={cn(
          "fixed inset-0 -z-10 bg-espresso/45 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Painel arredondado que desce por baixo da pílula */}
      <div
        id="menu-panel"
        ref={panelRef}
        aria-hidden={!open}
        className={cn(
          "absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top rounded-[2rem] bg-paper p-5 shadow-deep transition-all duration-500 ease-soft lg:hidden",
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        )}
      >
        <nav aria-label="Navegação" className="flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              tabIndex={open ? 0 : -1}
              className="group flex items-center justify-between rounded-2xl px-4 py-3.5 font-serif text-xl text-mocha transition-colors duration-300 hover:bg-blush/60"
            >
              {l.label}
              <ArrowRight
                className="h-4 w-4 text-bronze-deep transition-transform duration-500 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink(WA_MESSAGES.header)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          tabIndex={open ? 0 : -1}
          className="btn btn-primary mt-4 w-full"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Avaliação gratuita
        </a>

        <p className="mt-4 text-center text-sm text-taupe">
          <a
            href={`tel:${business.phone}`}
            tabIndex={open ? 0 : -1}
            className="transition-colors hover:text-bronze-deep"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </p>
      </div>
    </header>
  );
}
