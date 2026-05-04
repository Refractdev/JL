import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
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
                Av. Gen. Alves Roçadas 15<br />
                5000-687 Vila Real
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-light))] mb-4">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-background transition-colors">Início</Link></li>
            <li><Link to="/#sobre" className="hover:text-background transition-colors">Sobre</Link></li>
            <li><Link to="/extensoes-cabelo-vila-real" className="hover:text-background transition-colors">Extensões</Link></li>
            <li><Link to="/maquilhagem-vila-real" className="hover:text-background transition-colors">Maquilhagem</Link></li>
            <li><Link to="/unhas-vila-real" className="hover:text-background transition-colors">Unhas</Link></li>
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
