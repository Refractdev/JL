export type GalleryCategory =
  | "Todas"
  | "Resultados"
  | "Processo"
  | "Matéria-prima"
  | "Vídeos";

export type GalleryItem =
  | {
      type: "image";
      name: string;
      alt: string;
      category: Exclude<GalleryCategory, "Todas" | "Vídeos">;
      badge: string;
    }
  | {
      type: "video";
      video: string;
      poster: string;
      alt: string;
      category: "Vídeos";
      badge: string;
    };

export const galleryFilters: GalleryCategory[] = [
  "Todas",
  "Resultados",
  "Processo",
  "Matéria-prima",
  "Vídeos",
];

/**
 * Legendas e categorias descrevem o que está mesmo em cada fotografia.
 * Vários ficheiros com nome "gallery-makeup"/"materials"/"before-after" são,
 * na realidade, fotos de mechas de cabelo — estão classificados como tal.
 */
export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    name: "gallery-extensions-01",
    alt: "Extensões de cabelo com comprimento e volume natural",
    category: "Resultados",
    badge: "Extensões",
  },
  {
    type: "image",
    name: "hair-04",
    alt: "Cabelo comprido e denso, resultado final de aplicação de extensões",
    category: "Resultados",
    badge: "Comprimento",
  },
  {
    type: "image",
    name: "gallery-blonde-01",
    alt: "Extensões aplicadas em cabelo loiro, pontos de aplicação visíveis na raiz",
    category: "Processo",
    badge: "Loiro",
  },
  {
    type: "video",
    video: "/videos/video-01.mp4",
    poster: "hair-04",
    alt: "Vídeo de um resultado de extensões de cabelo no estúdio",
    category: "Vídeos",
    badge: "Vídeo",
  },
  {
    type: "image",
    name: "hair-01",
    alt: "Cabelo liso comprido com degradê castanho a acobreado",
    category: "Resultados",
    badge: "Liso",
  },
  {
    type: "image",
    name: "hair-02",
    alt: "Cabelo escuro ondulado a ser ajustado à mão no estúdio",
    category: "Resultados",
    badge: "Ondas",
  },
  {
    type: "image",
    name: "extension-process-01",
    alt: "Aplicação de extensões fio a fio junto à raiz",
    category: "Processo",
    badge: "Aplicação",
  },
  {
    type: "image",
    name: "materials-01",
    alt: "Mechas de cabelo natural em vários tons, alinhadas no balcão",
    category: "Matéria-prima",
    badge: "Tons",
  },
  {
    type: "video",
    video: "/videos/video-02.mp4",
    poster: "hair-03",
    alt: "Vídeo de um resultado final de cabelo no estúdio",
    category: "Vídeos",
    badge: "Vídeo",
  },
  {
    type: "image",
    name: "hair-05",
    alt: "Cabelo preto com brushing e pontas viradas",
    category: "Resultados",
    badge: "Brushing",
  },
  {
    type: "image",
    name: "updo-01",
    alt: "Meio-apanhado com caracóis para ocasião especial",
    category: "Resultados",
    badge: "Penteado",
  },
  {
    type: "image",
    name: "materials-02",
    alt: "Mechas de cabelo natural liso e ondulado prontas a aplicar",
    category: "Matéria-prima",
    badge: "Texturas",
  },
  {
    type: "image",
    name: "hair-06",
    alt: "Cabelo castanho comprido com brilho e pontas em movimento",
    category: "Resultados",
    badge: "Brilho",
  },
  {
    type: "image",
    name: "extension-process-03",
    alt: "Extensões já aplicadas, com a secção de cima presa por travessa",
    category: "Processo",
    badge: "Secções",
  },
  {
    type: "image",
    name: "gallery-hair-before-after-01",
    alt: "Mechas de cabelo natural em tons escuros, loiros e acobreados",
    category: "Matéria-prima",
    badge: "Seleção",
  },
  {
    type: "image",
    name: "hair-07",
    alt: "Cabelo castanho com caracóis definidos",
    category: "Resultados",
    badge: "Caracóis",
  },
  {
    type: "image",
    name: "materials-04",
    alt: "Conjunto de mechas de cabelo natural por tom, prontas para escolha",
    category: "Matéria-prima",
    badge: "Escolha",
  },
  {
    type: "image",
    name: "hair-08",
    alt: "Cabelo castanho ondulado com comprimento até meio das costas",
    category: "Resultados",
    badge: "Ondas",
  },
  {
    type: "image",
    name: "materials-05",
    alt: "Mechas de cabelo natural preto seguras à mão no estúdio",
    category: "Matéria-prima",
    badge: "Preto",
  },
  {
    type: "image",
    name: "gallery-makeup-01",
    alt: "Mechas de cabelo natural alinhadas por tom no balcão do estúdio",
    category: "Matéria-prima",
    badge: "Paleta",
  },
];

export function imageFull(name: string) {
  return `/images/${name}-1200w.jpg`;
}
