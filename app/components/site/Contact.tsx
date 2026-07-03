"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { business } from "@/src/lib/site"
import { whatsappLink, WHATSAPP_DISPLAY } from "@/src/lib/whatsapp"

export default function Contact() {
  const { address, phone, email, hours } = business

  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`,
  )

  return (
    <section id="contacto" className="section-padding bg-muted/40">
      <div className="container-tight">
        <div className="max-w-2xl mb-12">
          <div className="w-12 h-0.5 bg-primary mb-4" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mt-2">
            Estamos aqui para ti
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Telefone
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
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
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
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
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
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                  Horário
                </p>
                <ul className="space-y-1">
                  {hours.map((h) => (
                    <li key={h.days} className="flex gap-4 text-sm">
                      <span className="text-foreground/70">{h.days}</span>
                      <span className="text-foreground font-medium">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-52">
              <iframe
                title={`Localização ${business.name}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              const name = formData.get("name") as string
              const phone = formData.get("phone") as string
              const service = formData.get("service") as string
              const message = formData.get("message") as string
              const text =
                `Olá! Gostaria de marcar:%0A%0A` +
                `*Nome:* ${name}%0A` +
                `*Telefone:* ${phone}%0A` +
                `*Serviço:* ${service}%0A` +
                (message ? `*Mensagem:* ${message}` : "")
              window.open(whatsappLink(text), "_blank")
            }}
            className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8 space-y-5"
          >
            <h3 className="font-serif text-xl text-foreground">Pedido de marcação</h3>
            <p className="text-sm text-muted-foreground -mt-3">
              Preenche o formulário e abrimos o WhatsApp com a tua mensagem pronta.
            </p>

            <div>
              <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block">
                Nome *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="O teu nome"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block">
                Telefone *
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="+351 900 000 000"
              />
            </div>

            <div>
              <label htmlFor="contact-service" className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block">
                Serviço pretendido
              </label>
              <select
                id="contact-service"
                name="service"
                defaultValue="Extensões de cabelo"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {[
                  "Extensões de cabelo",
                  "Cabeleireiro",
                  "Maquilhagem",
                  "Cílios",
                  "Unhas",
                  "Depilação",
                  "Outro",
                ].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="Conta-nos o que procuras..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
