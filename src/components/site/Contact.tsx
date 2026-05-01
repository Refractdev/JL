import { useState } from "react";
import { MapPin, Phone, User, MessageCircle, Send } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { toast } from "sonner";

const services = [
  "Extensões de cabelo",
  "Cabeleireiro",
  "Maquilhagem",
  "Cílios",
  "Unhas",
  "Depilação",
  "Outro",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Extensões de cabelo", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Por favor preenche o nome e o telefone.");
      return;
    }
    const text =
      `Olá! Gostaria de marcar:%0A%0A` +
      `*Nome:* ${form.name}%0A` +
      `*Telefone:* ${form.phone}%0A` +
      `*Serviço:* ${form.service}%0A` +
      (form.message ? `*Mensagem:* ${form.message}` : "");
    window.open(`https://wa.me/351935449306?text=${text}`, "_blank");
    toast.success("A abrir WhatsApp...");
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="reveal inline-block text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Contacto
          </span>
          <h2 className="reveal font-serif text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Vamos <em className="text-gold not-italic">conversar</em>
          </h2>
          <p className="reveal text-foreground/70">
            Marca o teu serviço pelo WhatsApp ou preenche o formulário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="reveal bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border">
            <h3 className="font-serif text-2xl text-foreground mb-8">Informações</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Responsável</p>
                  <p className="text-foreground font-medium">Joice Lopes</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Telefone / WhatsApp</p>
                  <a href="tel:+351935449306" className="text-foreground font-medium hover:text-gold transition-colors">
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Endereço</p>
                  <p className="text-foreground leading-relaxed">
                    Rua de Santo António, Bloco A<br />
                    3º andar, porta CJ<br />
                    5000-607 Vila Real, Portugal
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink("Olá! Gostaria de marcar um serviço.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-gradient-gold text-primary-foreground px-6 py-4 rounded-full text-base font-medium shadow-gold hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-56">
              <iframe
                title="Localização JL e Extensões"
                src="https://www.google.com/maps?q=Rua+de+Santo+Ant%C3%B3nio+Vila+Real+5000-607&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border space-y-5"
          >
            <h3 className="font-serif text-2xl text-foreground mb-2">Pedido de marcação</h3>
            <p className="text-sm text-muted-foreground -mt-2 mb-4">
              Ao enviar, abrimos o WhatsApp com a tua mensagem pronta.
            </p>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Nome *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="O teu nome"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Telefone *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="+351 ..."
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Serviço pretendido
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Mensagem
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="Conta-nos o que procuras..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-full text-base font-medium hover:bg-foreground/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
