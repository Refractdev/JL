"use client"

import { useState, useRef, useCallback, type ReactNode } from "react"

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    setSliderPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => { isDragging.current = true }
  const onMouseUp = () => { isDragging.current = false }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  return (
    <section id="antes-depois" className="section-padding">
      <div className="container-tight">
        <div className="max-w-2xl mb-12">
          <div className="w-12 h-0.5 bg-primary mb-4" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Resultados
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mt-2">
            Antes e depois
          </h2>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-200">
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-foreground">
              Antes
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-amber-300 to-primary/40">
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              Depois
            </span>
          </div>
        </div>

        {/* Desktop: interactive slider */}
        <div
          ref={containerRef}
          className="hidden md:block relative rounded-xl overflow-hidden select-none cursor-ew-resize mx-auto max-w-3xl"
          style={{ aspectRatio: "4/3" }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200" />

          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-300 to-primary/40"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />

          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-foreground z-10">
            Antes
          </span>

          <span
            className="absolute top-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium z-10"
            style={{ left: `calc(${sliderPos}% + 8px)` }}
          >
            Depois
          </span>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-foreground/60">
                <path d="M7 2L4 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 2L8 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
