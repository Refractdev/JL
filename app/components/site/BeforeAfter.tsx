"use client";

import { useState, useRef, useCallback } from "react";
import OptimizedImage from "@/app/components/site/OptimizedImage";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  return (
    <section
      id="resultados"
      className="section-padding"
      aria-labelledby="before-after-heading"
    >
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
            Resultados
          </p>
          <h2
            id="before-after-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance"
          >
            Antes e depois
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Transformações reais — comprimento e densidade com aspeto natural.
          </p>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
          <figure className="relative aspect-[3/4] overflow-hidden bg-muted">
            <OptimizedImage
              baseName="before-01"
              alt="Antes: cabelo fino sem volume"
              fill
              widthHint={400}
              sizes="50vw"
              quality={65}
              className="absolute inset-0"
              imgClassName="object-cover"
            />
            <figcaption className="absolute top-3 left-3 bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
              Antes
            </figcaption>
          </figure>
          <figure className="relative aspect-[3/4] overflow-hidden bg-muted">
            <OptimizedImage
              baseName="gallery-hair-before-after-01"
              alt="Depois: comprimento e densidade natural"
              fill
              widthHint={400}
              sizes="50vw"
              quality={65}
              className="absolute inset-0"
              imgClassName="object-cover"
            />
            <figcaption className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
              Depois
            </figcaption>
          </figure>
        </div>

        {/* Desktop: interactive slider */}
        <div
          ref={containerRef}
          role="img"
          aria-label="Comparação antes e depois de extensões de cabelo. Arrasta para comparar."
          className="hidden md:block relative overflow-hidden select-none cursor-ew-resize mx-auto max-w-3xl touch-none"
          style={{ aspectRatio: "4/3" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onPointerMove={onPointerMove}
        >
          <OptimizedImage
            baseName="before-01"
            alt=""
            fill
            widthHint={800}
            sizes="(max-width: 1024px) 90vw, 768px"
            quality={70}
            className="absolute inset-0"
            imgClassName="object-cover"
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <OptimizedImage
              baseName="gallery-hair-before-after-01"
              alt=""
              fill
              widthHint={800}
              sizes="(max-width: 1024px) 90vw, 768px"
              quality={70}
              className="absolute inset-0"
              imgClassName="object-cover"
            />
          </div>

          <span className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs font-medium text-foreground z-10">
            Antes
          </span>
          <span
            className="absolute top-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium z-10"
            style={{ left: `calc(${sliderPos}% + 8px)` }}
          >
            Depois
          </span>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-background shadow-md z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background shadow flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-foreground/60"
                aria-hidden
              >
                <path
                  d="M7 2L4 6L7 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 2L8 6L5 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Antes:</span> cabelo
            fino sem volume
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Depois:</span>{" "}
            comprimento e densidade natural
          </p>
        </div>
      </div>
    </section>
  );
}
