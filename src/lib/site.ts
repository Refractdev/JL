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

export const serviceCards = [
  {
    title: "Cabeleireiro",
    description: "Cortes, cor, mechas, hidratação e tratamentos personalizados.",
    message: "Olá! Gostaria de marcar um serviço de cabeleireiro.",
    image: "hair-05",
  },
  {
    title: "Maquilhagem",
    description: "Maquilhagem para casamentos, eventos e ocasiões especiais.",
    link: "/maquilhagem-vila-real",
    image: "gallery-makeup-01",
  },
  {
    title: "Cílios",
    description: "Extensões de cílios fio a fio, volume russo e lifting.",
    message: "Olá! Gostaria de marcar um serviço de cílios.",
    image: "hair-06",
  },
  {
    title: "Unhas",
    description: "Manicure, pedicure, gel e nail art com acabamento impecável.",
    link: "/unhas-vila-real",
    image: "materials-02",
  },
  {
    title: "Depilação",
    description: "Depilação com cera quente e fria, suave e duradoura.",
    message: "Olá! Gostaria de marcar depilação.",
    image: "hair-07",
  },
] as const;