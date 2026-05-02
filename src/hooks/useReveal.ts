import { useEffect, useRef } from "react";

export function useReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use requestIdleCallback for non-critical work if available
    const scheduleWork =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 1);

    const initObserver = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      if (els.length === 0) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -60px 0px",
        }
      );

      els.forEach((el) => observerRef.current?.observe(el));
    };

    const timeoutId = setTimeout(() => {
      scheduleWork(initObserver);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);
}

// Hook for single element reveal with custom options
export function useRevealElement<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          isVisible.current = true;
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
