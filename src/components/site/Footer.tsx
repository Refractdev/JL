import { MapPin, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-tight py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-2xl text-background mb-2">
            JL <span className="text-[hsl(var(--gold-light))]">&</span> Extensões
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-background/50 mb-4">
            Estúdio de Beleza
          </p>
          <p className="text-sm leading-relaxed text-background/70">
            Especialistas em extensões de cabelo e serviços de beleza premium em Vila Real.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-light))] mb-4">
            Contacto
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-[hsl(var(--gold-light))] mt-0.5 shrink-0" />
              <a href="tel:+351935449306" className="hover:text-background transition-colors">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-[hsl(var(--gold-light))] mt-0.5 shrink-0" />
              <span>
                Rua de Santo António, Bloco A<br />
                3º andar, porta CJ<br />
                5000-607 Vila Real
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-light))] mb-4">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-background transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-background transition-colors">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-background transition-colors">Serviços</a></li>
            <li><a href="#galeria" className="hover:text-background transition-colors">Galeria</a></li>
            <li><a href="#contacto" className="hover:text-background transition-colors">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-tight py-6 text-xs text-background/50 text-center">
          © {new Date().getFullYear()} JL e Extensões · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
