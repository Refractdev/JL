import { WA_MESSAGES } from "./whatsapp";

export const SITE_URL = "https://xn--jlextenses-9bb.com";

export const business = {
  name: "JL e Extensões",
  tagline: "Boutique de beleza em Vila Real",
  owner: "Joice Lopes",
  phone: "+351935449306",
  phoneDisplay: "+351 935 449 306",
  email: "Lopesjoicylopes46@gmail.com",
  address: {
    street: "Av. Gen. Alves Roçadas 15",
    city: "Vila Real",
    postalCode: "5000-687",
    country: "Portugal",
  },
  geo: {
    latitude: 41.2958,
    longitude: -7.7462,
    region: "PT-17",
  },
  social: {
    instagram: "https://instagram.com/jleextensoes",
    facebook: "https://facebook.com/jleextensoes",
  },
  /** Set the real Google Business Profile URL when available. Empty = hide CTA. */
  googleBusinessUrl: "",
  hours: [
    { days: "Segunda a Sexta", time: "09:00 – 19:00" },
    { days: "Sábado", time: "09:00 – 13:00" },
    { days: "Domingo", time: "Encerrado" },
  ],
  priceRange: "€€",
};

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/extensoes-cabelo-vila-real", label: "Extensões" },
  { href: "/maquilhagem-vila-real", label: "Maquilhagem" },
  { href: "/unhas-vila-real", label: "Unhas" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export const services = [
  "Extensões de cabelo",
  "Cabeleireiro",
  "Maquilhagem",
  "Cílios",
  "Unhas",
  "Depilação",
  "Outro",
] as const;

/**
 * Os cartões secundários não levam fotografia: o arquivo do estúdio só tem
 * fotos de cabelo, e ilustrar maquilhagem/unhas/cílios com fotos de cabelo
 * seria falso. Assinam-se com ícone e cor até haver fotos reais de cada serviço.
 */
export type ServiceCard = {
  title: string;
  benefit: string;
  pricingNote: string;
  ctaLabel: string;
  icon: "sparkles" | "gem" | "scissors" | "eye" | "leaf";
  message?: string;
  link?: string;
};

export const featuredService = {
  title: "Extensões de cabelo",
  benefit: "Resultado natural, feito à tua medida — comprimento, volume e densidade.",
  pricingNote: "Orçamento personalizado pelo WhatsApp",
  ctaLabel: "Pedir orçamento",
  secondaryCtaLabel: "Ver especialidade",
  link: "/extensoes-cabelo-vila-real",
  message: WA_MESSAGES.extensoes,
  image: "gallery-extensions-01",
  imageAlt: "Resultado de extensões de cabelo natural na JL e Extensões, Vila Real",
} as const;

export const serviceCards: ServiceCard[] = [
  {
    title: "Cabeleireiro",
    benefit: "Cortes, cor e tratamentos pensados para o teu cabelo.",
    pricingNote: "Orçamento pelo WhatsApp",
    ctaLabel: "Marcar cabeleireiro",
    icon: "scissors",
    message: WA_MESSAGES.cabeleireiro,
  },
  {
    title: "Maquilhagem",
    benefit: "Para casamentos, eventos e ocasiões especiais.",
    pricingNote: "Orçamento pelo WhatsApp",
    ctaLabel: "Ver maquilhagem",
    icon: "sparkles",
    link: "/maquilhagem-vila-real",
  },
  {
    title: "Unhas",
    benefit: "Gel e manicure com acabamento limpo e duradouro.",
    pricingNote: "Orçamento pelo WhatsApp",
    ctaLabel: "Ver unhas",
    icon: "gem",
    link: "/unhas-vila-real",
  },
  {
    title: "Cílios",
    benefit: "Volume e definição com aplicação cuidada.",
    pricingNote: "Orçamento pelo WhatsApp",
    ctaLabel: "Marcar cílios",
    icon: "eye",
    message: WA_MESSAGES.cilios,
  },
  {
    title: "Depilação",
    benefit: "Depilação suave e com resultado limpo.",
    pricingNote: "Orçamento pelo WhatsApp",
    ctaLabel: "Marcar depilação",
    icon: "leaf",
    message: WA_MESSAGES.depilacao,
  },
];

export const homeFaqs = [
  {
    question: "Quanto custa colocar extensões?",
    answer:
      "O valor depende do comprimento, volume, técnica e do cabelo escolhido. Fazemos uma avaliação gratuita e enviamos um orçamento personalizado pelo WhatsApp — sem compromisso.",
  },
  {
    question: "As extensões danificam o cabelo?",
    answer:
      "Com técnica e manutenção corretas, a aplicação respeita o teu cabelo natural. Na avaliação explicamos o método mais adequado ao teu tipo de cabelo e rotina.",
  },
  {
    question: "Quanto tempo duram as extensões?",
    answer:
      "Em geral duram vários meses. A duração varia com o tipo de aplicação, o cuidado diário e a manutenção regular — detalhes que alinhamos contigo na primeira conversa.",
  },
  {
    question: "Preciso fazer manutenção?",
    answer:
      "Sim. Revisões periódicas mantêm o resultado natural e confortável. Na avaliação indicamos o intervalo recomendado para o teu caso.",
  },
  {
    question: "Como funciona a primeira marcação?",
    answer:
      "Envias uma mensagem no WhatsApp → fazemos a avaliação → definimos o plano e o orçamento → marcamos a aplicação. É simples e sem pressão.",
  },
] as const;

/**
 * Feature flags for content we are not authorized to publish yet.
 * Flip when Joice confirms prices / written reviews.
 */
export const features = {
  /** When true, show "a partir de €X" (requires pricesFrom values). */
  showPricesFrom: false,
  /** When true, render written reviews in SocialProof ReviewSlot. */
  showWrittenReviews: false,
  pricesFrom: {
    extensoes: null as number | null,
    maquilhagem: null as number | null,
    unhas: null as number | null,
  },
};
