"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import OptimizedImage from "@/app/components/site/OptimizedImage";

/**
 * NOTA DE CONTEÚDO: a imagem "depois" era `gallery-hair-before-after-01`, que é
 * na verdade uma fotografia de mechas soltas em cima do balcão — não um
 * resultado aplicado. Foi trocada por `hair-04`, um resultado real do estúdio.
 * Confirmar com a Joice que as duas fotos são da mesma cliente.
 */
const BEFORE = {
  base: "before-01",
  label: "Antes",
  caption: "Cabelo fino e sem densidade nos comprimentos",
  alt: "Antes: cabelo castanho fino, sem volume nos comprimentos",
};

const AFTER = {
  base: "hair-04",
  label: "Depois",
  caption: "Comprimento e densidade com aspeto natural",
  alt: "Depois: cabelo comprido e denso com extensões aplicadas",
};

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section
      id="resultados"
      className="section relative overflow-hidden"
      aria-labelledby="before-after-heading"
    >
      <div
        className="bloom bloom-bronze left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2"
        aria-hidden
      />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="eyebrow">Resultados</span>
          <h2
            id="before-after-heading"
            className="display mt-6 text-display-lg text-balance"
          >
            Antes e <em className="not-italic text-bronze-deep">depois</em>
          </h2>
          <p className="lede mx-auto mt-6 max-w-measure-lg text-pretty">
            Transformações reais, feitas no estúdio. Arrasta para comparar — ou
            usa as setas do teclado.
          </p>
        </div>

        {/* Mobile: par sobreposto em cartões arredondados */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          {[BEFORE, AFTER].map((item, i) => (
            <figure
              key={item.base}
              className={`relative ${i === 1 ? "translate-y-5" : ""}`}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
            >
              <OptimizedImage
                baseName={item.base}
                alt={item.alt}
                ratio="3 / 4"
                widthHint={400}
                sizes="46vw"
                className="frame-xl shadow-lift"
              />
              <figcaption
                className={`absolute left-3 top-3 rounded-full px-3.5 py-1.5 text-xs font-medium ${
                  i === 0
                    ? "bg-paper/90 text-mocha backdrop-blur-sm"
                    : "bg-mocha text-cream"
                }`}
              >
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Desktop: comparador com input nativo — arrasto, setas e leitor de ecrã */}
        <div className="relative mx-auto mt-14 hidden w-full max-w-3xl md:block" data-reveal>
          <div
            className="relative select-none overflow-hidden rounded-[2.5rem] bg-cream-deep shadow-deep"
            style={{ aspectRatio: "4 / 3" }}
          >
            {/* Base = depois; a faixa recortada à esquerda mostra o antes,
                para os rótulos "Antes" (esquerda) e "Depois" (direita) baterem
                certo com o que está por baixo do cursor. */}
            <OptimizedImage
              baseName={AFTER.base}
              alt={AFTER.alt}
              fill
              widthHint={1200}
              sizes="(max-width: 1280px) 90vw, 768px"
              className="absolute inset-0 !rounded-none"
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-hidden
            >
              <OptimizedImage
                baseName={BEFORE.base}
                alt=""
                fill
                widthHint={1200}
                sizes="(max-width: 1280px) 90vw, 768px"
                className="absolute inset-0 !rounded-none"
              />
            </div>

            <span className="absolute left-6 top-6 z-10 rounded-full bg-paper/90 px-4 py-2 text-xs font-medium text-mocha backdrop-blur-sm">
              {BEFORE.label}
            </span>
            <span className="absolute right-6 top-6 z-10 rounded-full bg-mocha px-4 py-2 text-xs font-medium text-cream">
              {AFTER.label}
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 z-20 w-[2px] bg-cream/85"
              style={{ left: `${pos}%` }}
              aria-hidden
            >
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper shadow-lift">
                <MoveHorizontal className="h-5 w-5 text-bronze-deep" />
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar antes e depois das extensões de cabelo"
              aria-valuetext={`${pos}% da fotografia "antes" visível`}
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2 md:mt-10">
          {[BEFORE, AFTER].map((item, i) => (
            <div
              key={item.base}
              className="card-soft px-6 py-5"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
            >
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-bronze-deep">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm text-cocoa">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
