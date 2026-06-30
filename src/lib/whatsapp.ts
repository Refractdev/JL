export const WHATSAPP_NUMBER = "351935449306";
export const WHATSAPP_DISPLAY = "+351 935 449 306";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
