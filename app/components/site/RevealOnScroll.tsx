"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observa qualquer elemento com [data-reveal] e revela-o à entrada no viewport.
 * Montado uma vez no layout — assim os componentes de servidor só precisam do
 * atributo, sem virar client components.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
    );
    if (targets.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => {
      // Já visível no primeiro paint (hero) — revela sem esperar pelo scroll
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("is-in");
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
