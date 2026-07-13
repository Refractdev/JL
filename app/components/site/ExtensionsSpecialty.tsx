import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { extensionProcess } from "@/src/lib/site";
import { whatsappLink } from "@/src/lib/whatsapp";
import { imageSrc } from "@/src/lib/images";

const benefits = [
  "Resultado que parece natural no teu cabelo",
  "Escolha de comprimento, volume e cor contigo",
  "Manutenção e cuidados explicados com clareza",
];

export default function ExtensionsSpecialty() {
  return (
    <section id="especialidade" className="section-padding">
      <div className="container-tight">
        <div className="max-w-2xl mb-10 md:mb-14">
          <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Especialidade
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            Especialista em extensões
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            Ajudamos-te a escolher comprimento, volume e técnica para um
            resultado que parece teu — em Vila Real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src={imageSrc("extension-process-01", 800)}
              alt="Processo de aplicação de extensões de cabelo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                O que podes esperar
              </h3>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-5">
                Como funciona
              </h3>
              <ol className="space-y-5">
                {extensionProcess.map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <span className="font-display text-2xl text-primary leading-none w-8 shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              A manutenção é parte do resultado. Explicamos intervalos e cuidados
              para o cabelo natural e as extensões se manterem saudáveis.
            </p>

            <a
              href={whatsappLink(
                "Olá! Gostaria de uma avaliação gratuita para extensões de cabelo."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-95 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir avaliação gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
