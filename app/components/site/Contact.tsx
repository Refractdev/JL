"use client";

import { MessageCircle, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, services } from "@/src/lib/site";
import { whatsappLink, WHATSAPP_DISPLAY, WA_MESSAGES } from "@/src/lib/whatsapp";

export default function Contact() {
  const { address, phone, email, hours } = business;
  const googleUrl = business.googleBusinessUrl?.trim();

  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`
  );

  return (
    <section
      id="contacto"
      className="section relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="bloom bloom-bronze left-[-10rem] top-1/3 h-[30rem] w-[30rem]"
        aria-hidden
      />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="eyebrow">Contacto</span>
          <h2
            id="contact-heading"
            className="display mt-6 text-display-lg text-balance"
          >
            Marca a tua <em className="not-italic text-bronze-deep">avaliação</em>
          </h2>
          <p className="lede mx-auto mt-6 max-w-measure-lg text-pretty">
            Estamos em Vila Real. Escreve no WhatsApp e respondemos com os
            próximos passos — avaliação gratuita, orçamento personalizado.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Painel escuro com os dados */}
          <div
            className="relative overflow-hidden rounded-[2rem] bg-espresso px-7 py-9 text-cream sm:rounded-[2.5rem] sm:px-9 lg:col-span-5"
            data-reveal
          >
            <div
              className="bloom bloom-bronze right-[-8rem] top-[-6rem] h-[22rem] w-[22rem] opacity-30"
              aria-hidden
            />
            <div className="relative z-10">
              <a
                href={whatsappLink(WA_MESSAGES.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cream w-full"
              >
                <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                Falar no WhatsApp
              </a>

              <dl className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <div>
                    <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/45">
                      Telefone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${phone}`}
                        className="text-[0.9375rem] transition-colors hover:text-champagne"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <div className="min-w-0">
                    <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/45">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${email}`}
                        className="break-all text-[0.9375rem] transition-colors hover:text-champagne"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <div>
                    <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/45">
                      Morada
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed text-cream/85">
                      {address.street}
                      <br />
                      {address.postalCode} {address.city}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <div className="flex-1">
                    <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/45">
                      Horário
                    </dt>
                    <dd className="mt-2 space-y-2">
                      {hours.map((h) => (
                        <span
                          key={h.days}
                          className="flex justify-between gap-4 border-b border-cream/10 pb-2 text-sm last:border-0"
                        >
                          <span className="text-cream/60">{h.days}</span>
                          <span className="text-cream/90">{h.time}</span>
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              {googleUrl ? (
                <a
                  href={googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-soft mt-8 !text-champagne"
                >
                  Ver avaliações no Google
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              ) : (
                <p className="mt-8 text-xs leading-relaxed text-cream/40">
                  Em breve: link direto para as avaliações no Google Business.
                </p>
              )}
            </div>
          </div>

          {/* Formulário */}
          <div
            className="card-soft px-7 py-9 sm:px-9 lg:col-span-7"
            data-reveal
            style={{ ["--reveal-delay" as string]: "140ms" }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
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
                if (message.trim()) lines.push(`*Mensagem:* ${message.trim()}`);
                window.open(whatsappLink(lines.join("\n")), "_blank");
              }}
            >
              <h3 className="font-serif text-2xl text-mocha">
                Pedido de marcação
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa text-pretty">
                Preenche e abrimos o WhatsApp com a mensagem pronta a enviar.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-taupe"
                  >
                    Nome *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="O teu nome"
                    className="field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-taupe"
                  >
                    Telefone *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+351 900 000 000"
                    className="field"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-taupe"
                  >
                    Serviço pretendido
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue="Extensões de cabelo"
                    className="field cursor-pointer"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-taupe"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Conta-nos o que procuras…"
                    className="field resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-7 w-full">
                <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div
          className="mt-5 h-[280px] overflow-hidden rounded-[2rem] shadow-soft sm:h-[360px] sm:rounded-[2.5rem]"
          data-reveal
        >
          <iframe
            title={`Localização ${business.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="grayscale-map h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
