"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { imageSrc } from "@/src/lib/images";

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
    <section id="resultados" className="section-padding">
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Resultados
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            Antes e depois
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Transformações reais no estúdio — comprimento, densidade e movimento
            com aspeto natural.
          </p>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-3">
          <figure className="relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src={imageSrc("before-01", 800)}
                alt="Antes: cabelo sem o comprimento e volume desejados"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Antes:</span> cabelo
              sem o comprimento e volume desejados
            </figcaption>
          </figure>
          <figure className="relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src={imageSrc("hair-01", 800)}
                alt="Depois: comprimento e densidade com aspeto natural"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Depois:</span>{" "}
              comprimento e densidade com aspeto natural
            </figcaption>
          </figure>
        </div>

        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="relative overflow-hidden select-none cursor-ew-resize mx-auto max-w-3xl aspect-[4/3] bg-muted touch-none"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onPointerMove={onPointerMove}
            role="img"
            aria-label="Comparação interativa antes e depois de extensões de cabelo"
          >
            <Image
              src={imageSrc("before-01", 1200)}
              alt=""
              fill
              sizes="800px"
              className="object-cover"
              draggable={false}
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src={imageSrc("hair-01", 1200)}
                alt=""
                fill
                sizes="800px"
                className="object-cover"
                draggable={false}
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
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
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
                  />
                  <path
                    d="M5 2L8 6L5 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            <span className="text-foreground font-medium">Antes:</span> cabelo
            sem o comprimento e volume desejados ·{" "}
            <span className="text-foreground font-medium">Depois:</span>{" "}
            comprimento e densidade com aspeto natural
          </p>
        </div>
      </div>
    </section>
  );
}
