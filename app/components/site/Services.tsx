import { Sparkles, ArrowRight } from "lucide-react"
import { serviceCards } from "@/src/lib/site"
import { whatsappLink } from "@/src/lib/whatsapp"
import Link from "next/link"

const icons = [Sparkles, Sparkles, Sparkles, Sparkles, Sparkles] as const

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-muted/40">
      <div className="container-tight">
        <div className="max-w-2xl mb-12">
          <div className="w-12 h-0.5 bg-primary mb-4" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mt-2">
            O que oferecemos
          </h2>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md mb-10 bg-gradient-to-br from-primary/10 via-background to-amber-50/50 border border-border">
          <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="space-y-4 flex flex-col justify-center">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                Especialidade
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                Extensões de Cabelo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cabelo natural premium em diversas cores e comprimentos. Aplicação
                profissional que respeita o teu cabelo e garante um resultado
                deslumbrante e duradouro.
              </p>
              <Link
                href="/extensoes-cabelo-vila-real"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline w-fit"
              >
                Saber mais <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-amber-200/30 aspect-[4/3]" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => {
            const Icon = icons[index % icons.length]
            const isWhatsApp = "message" in service && service.message
            const href = isWhatsApp
              ? whatsappLink(service.message)
              : ("link" in service && service.link) || "#"

            return (
              <a
                key={service.title}
                href={href}
                target={isWhatsApp ? "_blank" : undefined}
                rel={isWhatsApp ? "noopener noreferrer" : undefined}
                className="group bg-card rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-border block"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
