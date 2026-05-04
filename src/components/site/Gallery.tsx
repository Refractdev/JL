import { useEffect, useRef, useState } from "react";
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

type GalleryCategory = "Todas" | "Cabelo" | "Transformações" | "Detalhes" | "Vídeos";

type Item =
  | {
      type: "image";
      src: string;
      alt: string;
      category: Exclude<GalleryCategory, "Todas" | "Vídeos">;
      badge: string;
      size: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      alt: string;
      category: "Vídeos";
      badge: string;
      size: string;
    };

const filters: GalleryCategory[] = ["Todas", "Cabelo", "Transformações", "Detalhes", "Vídeos"];

const items: Item[] = [
  {
    type: "image",
    src: newBeforeAfter,
    alt: "Antes e depois de aplicação de extensões",
    category: "Transformações",
    badge: "Transformação",
    size: "col-span-2 row-span-2",
  },
  {
    type: "image",
    src: newExtensions,
    alt: "Detalhe da aplicação de extensões de queratina",
    category: "Detalhes",
    badge: "Detalhe",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: newBlonde,
    alt: "Cabelo loiro com brilho e extensões",
    category: "Cabelo",
    badge: "Cabelo",
    size: "col-span-1 row-span-1",
  },
  {
    type: "video",
    src: vid2,
    poster: img2,
    alt: "Vídeo de resultado final",
    category: "Vídeos",
    badge: "Vídeo",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: newMakeup,
    alt: "Maquilhagem profissional",
    category: "Detalhes",
    badge: "Beleza",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img4,
    alt: "Cabelo liso loiro com extensões",
    category: "Cabelo",
    badge: "Cabelo",
    size: "col-span-1 row-span-2",
  },
  {
    type: "image",
    src: ext2,
    alt: "Aplicação de extensões",
    category: "Transformações",
    badge: "Aplicação",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img2,
    alt: "Cabelo preto com ondas",
    category: "Cabelo",
    badge: "Ondas",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: mat1,
    alt: "Variedade de cores de extensões",
    category: "Detalhes",
    badge: "Cores",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img1,
    alt: "Cabelo ruivo com ondas",
    category: "Cabelo",
    badge: "Ondas",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: updo,
    alt: "Penteado preso com acabamento elegante",
    category: "Transformações",
    badge: "Penteado",
    size: "col-span-1 row-span-1",
  },
  {
    type: "video",
    src: vid1,
    poster: img4,
    alt: "Vídeo de transformação capilar",
    category: "Vídeos",
    badge: "Vídeo",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img3,
    alt: "Cabelo loiro ondulado",
    category: "Cabelo",
    badge: "Loiro",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: ext1,
    alt: "Processo de aplicação de extensões",
    category: "Detalhes",
    badge: "Processo",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: mat2,
    alt: "Materiais premium para extensões",
    category: "Detalhes",
    badge: "Premium",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img5,
    alt: "Cabelo preto curto com ondas",
    category: "Cabelo",
    badge: "Styling",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img6,
    alt: "Cabelo ruivo liso",
    category: "Cabelo",
    badge: "Liso",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: mat3,
    alt: "Seleção de tons para extensões",
    category: "Detalhes",
    badge: "Tons",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img7,
    alt: "Cabelo ondulado com movimento",
    category: "Cabelo",
    badge: "Volume",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: ext3,
    alt: "Resultado final das extensões",
    category: "Transformações",
    badge: "Final",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: mat4,
    alt: "Extensões variadas prontas para aplicação",
    category: "Detalhes",
    badge: "Studio",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: img8,
    alt: "Cabelo ondulado castanho",
    category: "Cabelo",
    badge: "Glow",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    src: mat5,
    alt: "Extensão preta longa",
    category: "Detalhes",
    badge: "Comprimento",
    size: "col-span-1 row-span-1",
  },
];

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
    // Check if already loaded (cached)
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative h-full w-full bg-muted/30 overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-muted/40" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} // Still show something or handle error
      />
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("Todas");
  const [open, setOpen] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const filteredItems =
    activeFilter === "Todas"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const close = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setOpen(null);
      setIsClosing(false);
      setLightboxLoaded(false);
      lastFocusedElement.current?.focus();
    }, 200);
  };

  const prev = () => {
    setLightboxLoaded(false);
    setOpen((index) =>
      index === null ? null : (index - 1 + filteredItems.length) % filteredItems.length,
    );
  };

  const next = () => {
    setLightboxLoaded(false);
    setOpen((index) =>
      index === null ? null : (index + 1) % filteredItems.length,
    );
  };

  useEffect(() => {
    if (open === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };

    lastFocusedElement.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    window.setTimeout(() => {
      const closeButton = lightboxRef.current?.querySelector(
        '[aria-label="Fechar"]',
      ) as HTMLElement | null;
      closeButton?.focus();
    }, 80);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, filteredItems.length]);

  useEffect(() => {
    if (open !== null && open > filteredItems.length - 1) {
      setOpen(filteredItems.length ? 0 : null);
    }
  }, [filteredItems.length, open]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    touchEndX.current = event.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const openItem = open === null ? null : filteredItems[open];

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
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

        <div className="reveal mb-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setOpen(null);
                }}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-gold bg-gradient-gold text-primary-foreground shadow-gold"
                    : "border-border bg-card text-foreground/75 hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] lg:auto-rows-[260px]"
          role="list"
          aria-label="Galeria de trabalhos"
        >
          {filteredItems.map((item, index) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              onClick={() => setOpen(index)}
              className={`reveal group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card text-left shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-gold/50 ${item.size}`}
              aria-label={
                item.type === "video" ? `Ver vídeo: ${item.alt}` : `Ver imagem: ${item.alt}`
              }
              role="listitem"
            >
              {item.type === "image" ? (
                <LazyImage
                  src={item.src}
                  alt={item.alt}
                  className="transition-transform duration-700 group-hover:scale-105"
                  loading={index < 4 ? "eager" : "lazy"}
                />
              ) : (
                <div className="relative h-full w-full">
                  <LazyImage
                    src={item.poster}
                    alt={item.alt}
                    className="group-hover:scale-105 transition-transform duration-700"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold transition-transform group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 fill-current text-primary-foreground" />
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold text-white backdrop-blur-md">
                  {item.badge}
                </span>
                <p className="max-w-[18rem] text-sm font-medium leading-tight text-white/95 line-clamp-2">
                  {item.alt}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openItem && (
        <div
          ref={lightboxRef}
          className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl transition-all duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de mídia"
        >
          <button
            aria-label="Fechar"
            className="absolute right-4 top-4 z-20 rounded-full p-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={close}
          >
            <X className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl transition-all duration-500 ${isClosing ? 'scale-95' : 'scale-100'}`}>
              {!lightboxLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
                </div>
              )}
              
              {openItem.type === "image" ? (
                <img
                  src={openItem.src}
                  alt={openItem.alt}
                  className={`max-h-[75vh] w-full object-contain transition-opacity duration-500 ${lightboxLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="eager"
                  onLoad={() => setLightboxLoaded(true)}
                />
              ) : (
                <video
                  src={openItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75vh] w-full"
                  onLoadedData={() => setLightboxLoaded(true)}
                />
              )}
            </div>

            <div className="mt-5 flex flex-col gap-4 text-white sm:flex-row sm:items-center sm:justify-between px-2">
              <div>
                <span className="mb-2 inline-flex rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-light border border-gold/30">
                  {openItem.badge}
                </span>
                <p className="text-base font-medium text-white/90">{openItem.alt}</p>
              </div>
              <div className="flex items-center gap-4 self-center sm:self-auto">
                 <p className="text-sm font-medium text-white/40 tabular-nums">
                  {open + 1} <span className="mx-1">/</span> {filteredItems.length}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/15 hover:text-white"
                    onClick={prev}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Seguinte"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:bg-white/15 hover:text-white"
                    onClick={next}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            aria-label="Anterior"
            className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-full p-4 text-white/50 transition-all hover:bg-white/10 hover:text-white sm:flex"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            aria-label="Seguinte"
            className="absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-full p-4 text-white/50 transition-all hover:bg-white/10 hover:text-white sm:flex"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
}

