export type GalleryCategory =
  | "Todas"
  | "Cabelo"
  | "Transformações"
  | "Detalhes"
  | "Vídeos";

export type GalleryItem =
  | {
      type: "image";
      name: string;
      alt: string;
      category: Exclude<GalleryCategory, "Todas" | "Vídeos">;
      badge: string;
      size: string;
    }
  | {
      type: "video";
      video: string;
      poster: string;
      alt: string;
      category: "Vídeos";
      badge: string;
      size: string;
    };

export const galleryFilters: GalleryCategory[] = [
  "Todas",
  "Cabelo",
  "Transformações",
  "Detalhes",
  "Vídeos",
];

/** Curated gallery — prefer client results over inventory shots in first slots */
export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    name: "hair-01",
    alt: "Resultado de extensões de cabelo com brilho e comprimento",
    category: "Cabelo",
    badge: "Resultado",
    size: "col-span-2 row-span-2",
  },
  {
    type: "image",
    name: "hair-02",
    alt: "Extensões de cabelo em Vila Real — resultado final",
    category: "Cabelo",
    badge: "Extensões",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "before-01",
    alt: "Antes da aplicação de extensões",
    category: "Transformações",
    badge: "Antes",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "hair-05",
    alt: "Penteado e resultado no estúdio",
    category: "Cabelo",
    badge: "Penteado",
    size: "col-span-1 row-span-1",
  },
  {
    type: "video",
    video: "/videos/video-01.mp4",
    poster: "hair-04",
    alt: "Vídeo de extensões de cabelo",
    category: "Vídeos",
    badge: "Vídeo",
    size: "col-span-1 row-span-2",
  },
  {
    type: "image",
    name: "gallery-blonde-01",
    alt: "Cabelo loiro com extensões",
    category: "Cabelo",
    badge: "Loiro",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "extension-process-01",
    alt: "Processo de aplicação de extensões",
    category: "Transformações",
    badge: "Processo",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "materials-01",
    alt: "Variedade de cores de extensões no estúdio",
    category: "Detalhes",
    badge: "Cores",
    size: "col-span-1 row-span-1",
  },
  {
    type: "video",
    video: "/videos/video-02.mp4",
    poster: "hair-03",
    alt: "Vídeo de resultado final",
    category: "Vídeos",
    badge: "Vídeo",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "updo-01",
    alt: "Coque e penteado no estúdio",
    category: "Cabelo",
    badge: "Coque",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "gallery-extensions-01",
    alt: "Extensões de cabelo com volume",
    category: "Cabelo",
    badge: "Volume",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "extension-process-03",
    alt: "Resultado após aplicação de extensões",
    category: "Transformações",
    badge: "Final",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "hair-06",
    alt: "Cabelo ondulado com movimento",
    category: "Cabelo",
    badge: "Movimento",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "materials-02",
    alt: "Materiais de extensão no estúdio",
    category: "Detalhes",
    badge: "Studio",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "hair-08",
    alt: "Cabelo ondulado castanho",
    category: "Cabelo",
    badge: "Castanho",
    size: "col-span-1 row-span-1",
  },
  {
    type: "image",
    name: "materials-05",
    alt: "Extensão longa pronta para aplicação",
    category: "Detalhes",
    badge: "Comprimento",
    size: "col-span-1 row-span-1",
  },
];

export function imageFull(name: string) {
  return `/images/${name}-1200w.jpg`;
}
