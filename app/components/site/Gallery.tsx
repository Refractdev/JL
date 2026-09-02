"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import {
  galleryItems,
  galleryFilters,
  type GalleryCategory,
} from "@/src/lib/gallery-data";
import OptimizedImage from "@/app/components/site/OptimizedImage";
import { imageSrc, imageWebp } from "@/src/lib/images";
import { cn } from "@/src/lib/utils";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("Todas");
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const touchX = useRef(0);

  const items =
    filter === "Todas"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const open = index !== null ? items[index] : null;

  /** Índices que ocupam 2×2 na grelha — só quando há peças suficientes */
  const featured = new Set(items.length >= 12 ? [0, 9] : items.length >= 6 ? [0] : []);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector<HTMLElement>("[data-close]")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  useEffect(() => {
    if (index === null && lastFocused.current) {
      lastFocused.current.focus();
      lastFocused.current = null;
    }
  }, [index]);

  return (
    <section
      id="galeria"
      className="section relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div
        className="bloom bloom-blush -left-32 top-1/4 h-[32rem] w-[32rem]"
        aria-hidden
      />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="eyebrow">Portfólio</span>
          <h2
            id="gallery-heading"
            className="display mt-6 text-display-lg text-balance"
          >
            O trabalho da <em className="not-italic text-bronze-deep">casa</em>
          </h2>
          <p className="lede mx-auto mt-6 max-w-measure-lg text-pretty">
            Fotografias e vídeos reais do estúdio em Vila Real. Toca para ver em
            grande.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          data-reveal
        >
          {galleryFilters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setIndex(null);
                }}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm transition-all duration-500 ease-soft",
                  active
                    ? "bg-mocha text-cream shadow-soft"
                    : "bg-paper/70 text-cocoa shadow-soft hover:bg-blush/70 hover:text-mocha"
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {items.map((item, i) => {
            const base = item.type === "image" ? item.name : item.poster;
            return (
              <button
                key={`${base}-${i}`}
                type="button"
                onClick={(e) => {
                  lastFocused.current = e.currentTarget;
                  setIndex(i);
                }}
                aria-label={`Ver ${item.type === "video" ? "vídeo" : "imagem"}: ${item.alt}`}
                className={cn(
                  "group relative block text-left transition-transform duration-700 ease-soft hover:-translate-y-1.5",
                  // Duas peças em destaque quebram a monotonia da contact sheet
                  featured.has(i) && "sm:col-span-2 sm:row-span-2"
                )}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 4) * 90}ms` }}
              >
                <OptimizedImage
                  baseName={base}
                  alt={item.alt}
                  ratio="4 / 5"
                  widthHint={featured.has(i) ? 800 : 400}
                  sizes={
                    featured.has(i)
                      ? "(max-width: 640px) 46vw, (max-width: 1024px) 62vw, 44vw"
                      : "(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                  }
                  className={cn(
                    "frame-zoom frame-xl shadow-soft transition-shadow duration-700 group-hover:shadow-lift",
                    featured.has(i) && "sm:!aspect-auto sm:h-full"
                  )}
                  imgClassName={featured.has(i) ? "sm:h-full" : undefined}
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3.5">
                  <span className="translate-y-1 rounded-full bg-paper/90 px-3 py-1.5 text-[0.6875rem] font-medium text-mocha opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {item.badge}
                  </span>
                  {item.type === "video" && (
                    <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 shadow-soft backdrop-blur-sm">
                      <Play className="h-3.5 w-3.5 fill-current text-mocha" aria-hidden />
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.changedTouches[0].screenX;
          }}
          onTouchEnd={(e) => {
            const diff = touchX.current - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) (diff > 0 ? next : prev)();
          }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/92 p-4 backdrop-blur-md"
        >
          <button
            data-close
            type="button"
            aria-label="Fechar"
            onClick={close}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:flex"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            aria-label="Seguinte"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:flex"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>

          <figure
            className="relative flex max-h-[86vh] w-full max-w-4xl flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[2rem] shadow-deep">
              {open.type === "image" ? (
                <picture>
                  <source type="image/webp" srcSet={imageWebp(open.name, 1200)} />
                  <img
                    src={imageSrc(open.name, 1200)}
                    alt={open.alt}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                </picture>
              ) : (
                <video
                  src={open.video}
                  poster={imageSrc(open.poster, 1200)}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-full"
                />
              )}
            </div>
            <figcaption className="flex w-full max-w-2xl items-center justify-between gap-4 text-sm text-cream/70">
              <span>{open.alt}</span>
              <span className="shrink-0 tabular-nums text-cream/50">
                {(index ?? 0) + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
