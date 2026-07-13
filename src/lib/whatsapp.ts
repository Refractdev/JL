export const WHATSAPP_NUMBER = "351935449306";
export const WHATSAPP_DISPLAY = "+351 935 449 306";

/** Mensagens pré-preenchidas — tom próximo, sem pressão */
export const WA_MESSAGES = {
  hero:
    "Olá! Vi o site da JL e Extensões e gostaria de uma avaliação gratuita de extensões de cabelo 🙂",
  header:
    "Olá! Gostaria de marcar uma avaliação gratuita na JL e Extensões.",
  floating:
    "Olá! Vim pelo site e queria pedir uma avaliação gratuita 🙂",
  expertise:
    "Olá! Queria saber se as extensões são adequadas para o meu cabelo. Podem ajudar-me?",
  extensoes:
    "Olá! Gostaria de uma avaliação gratuita de extensões de cabelo.",
  maquilhagem: "Olá! Gostaria de marcar maquilhagem. Qual a disponibilidade?",
  unhas: "Olá! Gostaria de marcar unhas. Qual a disponibilidade?",
  cabeleireiro: "Olá! Gostaria de marcar um serviço de cabeleireiro.",
  cilios: "Olá! Gostaria de marcar um serviço de cílios.",
  depilacao: "Olá! Gostaria de marcar depilação.",
  contact: "Olá! Gostaria de marcar uma avaliação gratuita.",
  generic: "Olá! Gostaria de marcar um serviço na JL e Extensões.",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
