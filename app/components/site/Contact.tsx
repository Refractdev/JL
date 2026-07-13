import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { business } from "@/src/lib/site";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/src/lib/whatsapp";

export default function Contact() {
  const { address, phone, email, hours } = business;

  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.postalCode} ${address.city}, ${address.country}`
  );

  return (
    <section id="contacto" className="section-padding bg-muted/40">
      <div className="container-tight">
        <div className="max-w-2xl mb-10">
          <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            Marca a tua avaliação
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Avaliação gratuita e orçamento personalizado pelo WhatsApp. Estamos
            em Vila Real, prontas para te receber.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
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
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
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
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
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
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Horário
                </p>
                <ul className="space-y-1">
                  {hours.map((h) => (
                    <li key={h.days} className="flex gap-4 text-sm">
                      <span className="text-foreground/70 w-36">{h.days}</span>
                      <span className="text-foreground font-medium">{h.time}</span>
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
              />
            </div>
          </div>

          <div className="bg-card border border-border p-6 md:p-8 flex flex-col justify-center space-y-5">
            <h3 className="font-display text-2xl text-foreground">
              Pedir avaliação no WhatsApp
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Diz-nos o que procuras (extensões, maquilhagem, unhas ou outro
              serviço). Respondemos com disponibilidade e orçamento
              personalizado — sem compromisso.
            </p>
            <ul className="text-sm text-foreground/85 space-y-2">
              <li>1. Envia mensagem</li>
              <li>2. Avaliação gratuita</li>
              <li>3. Orçamento personalizado</li>
              <li>4. Marcação da sessão</li>
            </ul>
            <a
              href={whatsappLink(
                "Olá! Gostaria de uma avaliação gratuita e orçamento personalizado."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-95"
            >
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
            </a>
            <a
              href={business.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm text-primary hover:underline underline-offset-4"
            >
              Ver avaliações no Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
