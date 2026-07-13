export const SITE_URL = "https://xn--jlextenses-9bb.com";

export const business = {
  name: "JL e Extensões",
  tagline: "Estúdio de Beleza",
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
  /** Replace with the real Google Business Profile URL when available */
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=JL+e+Extens%C3%B5es+Av.+Gen.+Alves+Ro%C3%A7adas+15+Vila+Real",
  hours: [
    { days: "Segunda a Sexta", time: "09:00 – 19:00" },
    { days: "Sábado", time: "09:00 – 13:00" },
    { days: "Domingo", time: "Encerrado" },
  ],
  priceRange: "€€",
} as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/extensoes-cabelo-vila-real", label: "Extensões" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
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

export type ServiceCard = {
  title: string;
  benefit: string;
  image: string;
  cta: string;
  link?: string;
  message?: string;
  fromPrice?: string;
};

export const featuredExtension = {
  title: "Extensões de cabelo",
  benefit: "Volume e comprimento com aspeto natural",
  description:
    "Cabelo natural em várias cores e comprimentos. Escolhemos juntos a técnica certa para o teu cabelo e o resultado que queres.",
  image: "hair-02",
  link: "/extensoes-cabelo-vila-real",
  cta: "Pedir orçamento",
  message: "Olá! Gostaria de uma avaliação gratuita para extensões de cabelo.",
} as const;

export const serviceCards: ServiceCard[] = [
  {
    title: "Maquilhagem",
    benefit: "Looks para casamentos e eventos",
    image: "updo-01",
    link: "/maquilhagem-vila-real",
    cta: "Marcar maquilhagem",
  },
  {
    title: "Unhas",
    benefit: "Gel e nail art com acabamento cuidado",
    image: "materials-03",
    link: "/unhas-vila-real",
    cta: "Marcar unhas",
  },
  {
    title: "Cílios",
    benefit: "Volume e definição no olhar",
    image: "hair-06",
    message: "Olá! Gostaria de marcar um serviço de cílios.",
    cta: "Falar no WhatsApp",
  },
  {
    title: "Cabeleireiro",
    benefit: "Cortes, cor e tratamentos no dia a dia",
    image: "hair-05",
    message: "Olá! Gostaria de marcar um serviço de cabeleireiro.",
    cta: "Falar no WhatsApp",
  },
  {
    title: "Depilação",
    benefit: "Cera quente e fria, com cuidado pela pele",
    image: "hair-07",
    message: "Olá! Gostaria de marcar depilação.",
    cta: "Falar no WhatsApp",
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
      "Com a técnica certa e a manutenção adequada, o cabelo natural é protegido. Na avaliação explicamos o método mais seguro para o teu tipo de cabelo e os cuidados a seguir.",
  },
  {
    question: "Quanto tempo duram as extensões?",
    answer:
      "Com manutenção regular, as extensões de cabelo natural duram tipicamente vários meses. O intervalo ideal de revisão depende da técnica e do crescimento do teu cabelo.",
  },
  {
    question: "Preciso fazer manutenção?",
    answer:
      "Sim. A manutenção mantém o resultado natural e a saúde do cabelo. Explicamos os intervalos e os cuidados no atendimento, para saberes exatamente o que esperar.",
  },
  {
    question: "Como funciona a primeira marcação?",
    answer:
      "Envias mensagem no WhatsApp → marcamos uma avaliação gratuita → recebes o orçamento personalizado → agendamos a aplicação quando estiveres pronta.",
  },
] as const;

export const extensionProcess = [
  {
    step: "1",
    title: "Avaliação",
    description:
      "Analisamos o teu cabelo, o que queres mudar e o que faz sentido para o teu dia a dia.",
  },
  {
    step: "2",
    title: "Cabelo e técnica",
    description:
      "Escolhemos comprimento, volume, cor e o método de aplicação mais adequado.",
  },
  {
    step: "3",
    title: "Aplicação e cuidados",
    description:
      "Aplicamos com atenção ao detalhe e explicamos manutenção e rotina em casa.",
  },
] as const;
