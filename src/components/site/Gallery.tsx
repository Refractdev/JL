import { useState } from "react";
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

type Item =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

const items: Item[] = [
  { type: "image", src: img4, alt: "Cabelo liso loiro com extensões" },
  { type: "video", src: vid2, poster: img2, alt: "Vídeo de resultado" },
  { type: "image", src: ext2, alt: "Aplicação de extensões" },
  { type: "image", src: img2, alt: "Cabelo preto com ondas" },
  { type: "image", src: mat1, alt: "Variedade de cores de extensões" },
  { type: "image", src: img1, alt: "Cabelo ruivo com ondas" },
  { type: "image", src: updo, alt: "Penteado com ondas" },
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

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % items.length));

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

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(idx)}
              className="reveal mb-4 block w-full break-inside-avoid relative group rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all"
            >
              {it.type === "image" ? (
                <img
                  src={it.src}
                  alt={it.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              ) : (
                <div className="relative">
                  <img src={it.poster} alt={it.alt} className="w-full h-auto object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
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
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur flex items-center justify-center p-4 animate-in fade-in"
          onClick={close}
        >
          <button
            aria-label="Fechar"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
            onClick={close}
          >
            <X className="w-7 h-7" />
          </button>
          <button
            aria-label="Anterior"
            className="absolute left-3 md:left-6 text-white/80 hover:text-white p-3"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            aria-label="Seguinte"
            className="absolute right-3 md:right-6 text-white/80 hover:text-white p-3"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] w-auto" onClick={(e) => e.stopPropagation()}>
            {items[open].type === "image" ? (
              <img src={items[open].src} alt={items[open].alt} className="max-h-[85vh] w-auto rounded-xl" />
            ) : (
              <video
                src={(items[open] as Extract<Item, { type: "video" }>).src}
                controls
                autoPlay
                className="max-h-[85vh] w-auto rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
