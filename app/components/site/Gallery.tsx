"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryItems, galleryFilters, imageFull, type GalleryCategory } from "@/src/lib/gallery-data"

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("Todas")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)

  const filteredItems =
    activeFilter === "Todas"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const openItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  const close = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filteredItems.length) % filteredItems.length : null,
    )
  }, [filteredItems.length])

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filteredItems.length : null,
    )
  }, [filteredItems.length])

  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKey)

    const btn = lightboxRef.current?.querySelector('[aria-label="Fechar"]') as HTMLElement
    btn?.focus()

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKey)
    }
  }, [lightboxIndex, close, prev, next])

  const touchX = useRef(0)

  return (
    <section id="galeria" className="section-padding">
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <div className="w-12 h-0.5 bg-primary mb-4" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Galeria
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mt-2">
            O nosso trabalho
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {galleryFilters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter)
                  setLightboxIndex(null)
                }}
                aria-pressed={isActive}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => {
            const src =
              item.type === "image"
                ? imageFull(item.name)
                : `/images/${item.poster}-1200w.jpg`

            return (
              <button
                key={`${item.alt}-${index}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-lg bg-muted border border-border text-left ${item.size}`}
                aria-label={`Ver ${item.type === "video" ? "vídeo" : "imagem"}: ${item.alt}`}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="text-[10px] uppercase tracking-wider text-white/90 font-medium">
                    {item.badge}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {openItem && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={close}
          onTouchStart={(e) => { touchX.current = e.changedTouches[0].screenX }}
          onTouchEnd={(e) => {
            const diff = touchX.current - e.changedTouches[0].screenX
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de galeria"
        >
          <button
            aria-label="Fechar"
            className="absolute right-4 top-4 z-20 rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            onClick={close}
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors hidden sm:flex"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            aria-label="Seguinte"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors hidden sm:flex"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {openItem.type === "image" ? (
              <Image
                src={imageFull(openItem.name)}
                alt={openItem.alt}
                width={1200}
                height={1500}
                className="max-h-[80vh] w-auto max-w-full object-contain"
                priority
              />
            ) : (
              <video
                src={openItem.video}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-full rounded-lg"
              />
            )}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex !== null
              ? `${lightboxIndex + 1} / ${filteredItems.length}`
              : ""}
          </div>
        </div>
      )}
    </section>
  )
}
