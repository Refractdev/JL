import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import img1 from "@/assets/hair-01.jpg";
import img2 from "@/assets/hair-02.jpg";
import img3 from "@/assets/hair-03.jpg";
import img4 from "@/assets/hair-04.jpg";
import img5 from "@/assets/hair-05.jpg";
import img6 from "@/assets/hair-06.jpg";
import img7 from "@/assets/hair-07.jpg";
import img8 from "@/assets/hair-08.jpg";
import ext1 from "@/assets/extension-process-01.jpg";
import ext2 from "@/assets/extension-process-02.jpg";
import ext3 from "@/assets/extension-process-03.jpg";
import mat1 from "@/assets/materials-01.jpg";
import mat2 from "@/assets/materials-02.jpg";
import mat3 from "@/assets/materials-03.jpg";
import mat4 from "@/assets/materials-04.jpg";
import mat5 from "@/assets/materials-05.jpg";
import updo from "@/assets/updo-01.jpg";
import vid1 from "@/assets/video-01.mp4";
import vid2 from "@/assets/video-02.mp4";
import newMakeup from "@/assets/gallery-makeup-01.jpg";
import newBeforeAfter from "@/assets/gallery-hair-before-after-01.jpg";
import newExtensions from "@/assets/gallery-extensions-01.jpg";
import newBlonde from "@/assets/gallery-blonde-01.jpg";

type Item =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

const items: Item[] = [
  { type: "image", src: newMakeup, alt: "Maquilhagem profissional" },
  { type: "image", src: newBeforeAfter, alt: "Antes e depois de aplicação de extensões" },
  { type: "image", src: newExtensions, alt: "Detalhe da aplicação de extensões de queratina" },
  { type: "image", src: newBlonde, alt: "Cabelo loiro com brilho e extensões" },
  { type: "image", src: img4, alt: "Cabelo liso loiro com extensões" },
  { type: "video", src: vid2, poster: img2, alt: "Vídeo de resultado" },
  { type: "image", src: ext2, alt: "Aplicação de extensões" },
  { type: "image", src: img2, alt: "Cabelo preto com ondas" },
  { type: "image", src: mat1, alt: "Variedade de cores de extensões" },
  { type: "image", src: img1, alt: "Cabelo ruivo with ondas" },
  { type: "image", src: updo, alt: "Penteado with ondas" },
  { type: "video", src: vid1, poster: img4, alt: "Vídeo de transformação" },
  { type: "image", src: img3, alt: "Cabelo loiro ondulado" },
  { type: "image", src: ext1, alt: "Processo de extensões" },
  { type: "image", src: mat2, alt: "Materiais premium" },
  { type: "image", src: img5, alt: "Cabelo preto curto com ondas" },
  { type: "image", src: img6, alt: "Cabelo ruivo liso" },
  { type: "image", src: mat3, alt: "Cores de extensões" },
  { type: "image", src: img7, alt: "Cabelo ondulado" },
  { type: "image", src: ext3, alt: "Resultado final" },
  { type: "image", src: mat4, alt: "Extensões variadas" },
  { type: "image", src: img8, alt: "Cabelo ondulado castanho" },
  { type: "image", src: mat5, alt: "Extensão preta longa" },
];

// LazyImage component with intersection observer
function LazyImage({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current || loading === "eager") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || src;
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src, loading]);

  return (
    <img
      ref={imgRef}
      src={loading === "eager" ? src : undefined}
      data-src={loading === "lazy" ? src : undefined}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(null);
      setIsClosing(false);
      // Restore focus
      lastFocusedElement.current?.focus();
    }, 200);
  }, []);

  const prev = useCallback(() => {
    setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, []);

  const next = useCallback(() => {
    setOpen((i) => (i === null ? null : (i + 1) % items.length));
  }, []);

  // Keyboard navigation and ESC
  useEffect(() => {
    if (open === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          close();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prev();
          break;
        case "ArrowRight":
          e.preventDefault();
          next();
          break;
      }
    };

    // Save last focused element
    lastFocusedElement.current = document.activeElement as HTMLElement;
    // Prevent body scroll
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    // Focus trap - focus close button initially
    setTimeout(() => {
      const closeBtn = lightboxRef.current?.querySelector('[aria-label="Fechar"]') as HTMLElement;
      closeBtn?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="reveal inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Galeria
          </span>
          <h2 className="reveal font-serif text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Trabalhos que falam por <em className="text-gold not-italic">si</em>
          </h2>
          <p className="reveal text-foreground/70">
            Inspira-te com transformações reais feitas no nosso estúdio.
          </p>
        </div>

        <div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]"
          role="list"
          aria-label="Galeria de trabalhos"
        >
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(idx)}
              className="reveal mb-4 block w-full break-inside-avoid relative group rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label={it.type === "video" ? `Ver vídeo: ${it.alt}` : `Ver imagem: ${it.alt}`}
              role="listitem"
            >
              {it.type === "image" ? (
                <LazyImage
                  src={it.src}
                  alt={it.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading={idx < 8 ? "eager" : "lazy"}
                />
              ) : (
                <div className="relative">
                  <LazyImage
                    src={it.poster}
                    alt={it.alt}
                    className="w-full h-auto object-cover"
                    loading={idx < 8 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          ref={lightboxRef}
          className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-200 ${
            isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de mídia"
        >
          {/* Close button */}
          <button
            aria-label="Fechar (ESC)"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
            onClick={close}
          >
            <X className="w-7 h-7" />
          </button>

          {/* Navigation buttons */}
          <button
            aria-label="Anterior (←)"
            className="absolute left-3 md:left-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 z-10 hidden sm:flex"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            aria-label="Seguinte (→)"
            className="absolute right-3 md:right-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 z-10 hidden sm:flex"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Content */}
          <div
            className="max-w-5xl max-h-[85vh] w-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {items[open].type === "image" ? (
              <img
                src={items[open].src}
                alt={items[open].alt}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
                loading="eager"
              />
            ) : (
              <video
                src={(items[open] as Extract<Item, { type: "video" }>).src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-auto rounded-xl"
              />
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {open + 1} / {items.length}
          </div>

          {/* Mobile swipe hint */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 text-xs sm:hidden">
            Deslize para navegar
          </div>
        </div>
      )}
    </section>
  );
}
