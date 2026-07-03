import { CheckCircle2 } from "lucide-react"
import { business } from "@/src/lib/site"

const highlights = [
  "Extensões de cabelo premium com aplicação profissional",
  "Ambiente acolhedor e atendimento personalizado",
  "Resultados naturais que transformam a tua autoestima",
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-tight grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-2 bg-primary/10 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[4/5]">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-amber-100/40" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="w-12 h-0.5 bg-primary" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Sobre nós
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            O teu estúdio de beleza em Vila Real
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Na {business.name}, dedicamo-nos a realçar a tua beleza natural com serviços
            personalizados de excelência. Com anos de experiência e paixão pelo que fazemos,
            cada cliente recebe um atendimento único num ambiente pensado para o teu bem-estar.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Desde extensões de cabelo de qualidade premium a tratamentos capilares
            especializados, cada serviço é executado com técnica apurada e os melhores
            produtos do mercado.
          </p>
          <ul className="space-y-3 pt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
