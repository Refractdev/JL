import OptimizedImage from "@/app/components/site/OptimizedImage";
import { business } from "@/src/lib/site";

export default function AboutJoice() {
  return (
    <section
      id="sobre"
      className="section-padding bg-muted/40"
      aria-labelledby="about-heading"
    >
      <div className="container-tight grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted order-first lg:order-none">
          <OptimizedImage
            baseName="hair-04"
            alt={`${business.owner}, especialista em extensões na JL e Extensões, Vila Real`}
            fill
            widthHint={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={70}
            className="absolute inset-0"
            imgClassName="object-cover"
          />
        </div>

        <div className="space-y-5">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Sobre
          </p>
          <h2
            id="about-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance"
          >
            A Joice
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Sou a {business.owner}. Na JL e Extensões, em Vila Real, o foco é
            ouvir o que queres — e traduzir isso num resultado que funcione no
            teu dia-a-dia.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Especializo-me em extensões de cabelo: escolhemos juntos a técnica,
            o comprimento e o volume certos para o teu cabelo. Sem pressão, com
            explicação clara e acompanhamento na manutenção.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            A filosofia é simples: resultado natural, conversa honesta e um
            espaço onde te sintas à vontade para perguntar tudo antes de marcar.
          </p>
        </div>
      </div>
    </section>
  );
}
