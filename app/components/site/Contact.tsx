"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { business, services } from "@/src/lib/site";
import { whatsappLink, WHATSAPP_DISPLAY, WA_MESSAGES } from "@/src/lib/whatsapp";

export default function Contact() {
  const { address, phone, email, hours } = business;

  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`
  );

  return (
    <section
      id="contacto"
      className="section-padding bg-muted/50"
      aria-labelledby="contact-heading"
    >
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
            Contacto
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance"
          >
            Marca a tua avaliação
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Estamos em Vila Real. Escreve no WhatsApp — respondemos com os
            próximos passos.
          </p>
        </div>

        <div className="mb-10">
          <a
            href={whatsappLink(WA_MESSAGES.contact)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            Falar no WhatsApp agora
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Telefone / WhatsApp
                </p>
                <a
                  href={`tel:${phone}`}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-foreground font-medium hover:text-primary transition-colors break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Morada
                </p>
                <p className="text-foreground leading-relaxed">
                  {address.street}
                  <br />
                  {address.postalCode} {address.city}, {address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Horário
                </p>
                <ul className="space-y-1">
                  {hours.map((h) => (
                    <li key={h.days} className="flex gap-4 text-sm">
                      <span className="text-foreground/70 min-w-[8.5rem]">
                        {h.days}
                      </span>
                      <span className="text-foreground font-medium">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden border border-border h-52">
              <iframe
                title={`Localização ${business.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = String(formData.get("name") || "");
              const phoneValue = String(formData.get("phone") || "");
              const service = String(formData.get("service") || "");
              const message = String(formData.get("message") || "");
              const lines = [
                "Olá! Gostaria de marcar:",
                "",
                `*Nome:* ${name}`,
                `*Telefone:* ${phoneValue}`,
                `*Serviço:* ${service}`,
              ];
              if (message.trim()) {
                lines.push(`*Mensagem:* ${message.trim()}`);
              }
              window.open(whatsappLink(lines.join("\n")), "_blank");
            }}
            className="bg-card border border-border p-6 md:p-8 space-y-5"
          >
            <h3 className="font-serif text-xl text-foreground">
              Pedido de marcação
            </h3>
            <p className="text-sm text-muted-foreground -mt-2">
              Preenche o formulário e abrimos o WhatsApp com a tua mensagem
              pronta. Avaliação gratuita — orçamento personalizado.
            </p>

            <div>
              <label
                htmlFor="contact-name"
                className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block"
              >
                Nome *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="O teu nome"
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block"
              >
                Telefone *
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+351 900 000 000"
              />
            </div>

            <div>
              <label
                htmlFor="contact-service"
                className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block"
              >
                Serviço pretendido
              </label>
              <select
                id="contact-service"
                name="service"
                defaultValue="Extensões de cabelo"
                className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block"
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Conta-nos o que procuras..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <MessageCircle className="w-4 h-4" aria-hidden />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
