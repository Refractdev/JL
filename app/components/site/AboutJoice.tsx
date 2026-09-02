import OptimizedImage from "@/app/components/site/OptimizedImage";
import { business } from "@/src/lib/site";

const facts = [
  { label: "Estúdio", value: business.address.city },
  { label: "Especialidade", value: "Extensões de cabelo" },
  { label: "Avaliação", value: "Gratuita" },
];

export default function AboutJoice() {
  return (
    <section id="sobre" className="section relative" aria-labelledby="about-heading">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-blush/45 px-6 py-14 sm:rounded-[3rem] sm:px-10 md:px-16 md:py-20">
          <div
            className="bloom bloom-bronze right-[-6rem] top-[-6rem] h-[26rem] w-[26rem]"
            aria-hidden
          />

          <div className="relative z-10 grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="relative lg:col-span-5" data-reveal>
              <div className="mx-auto max-w-[24rem] lg:mx-0">
                <OptimizedImage
                  baseName="hair-02"
                  alt="Ajuste de extensões num cabelo escuro ondulado, no estúdio da JL e Extensões"
                  ratio="4 / 5"
                  widthHint={800}
                  sizes="(max-width: 1024px) 80vw, 38vw"
                  className="frame-arch shadow-deep"
                />
              </div>
              {/* Cartão que se sobrepõe — camadas outra vez */}
              <div className="absolute -bottom-6 right-0 hidden w-[45%] max-w-[13rem] lg:block">
                <OptimizedImage
                  baseName="materials-05"
                  alt="Mechas de cabelo natural preto seguras à mão antes da aplicação"
                  ratio="1 / 1"
                  widthHint={400}
                  sizes="18vw"
                  className="frame-xl shadow-deep ring-8 ring-blush/60"
                />
              </div>
            </div>

            <div
              className="lg:col-span-6 lg:col-start-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              <span className="eyebrow">Atelier</span>
              <h2 id="about-heading" className="display mt-6 text-display-lg">
                A <em className="not-italic text-bronze-deep">Joice</em>
              </h2>

              <figure className="card-soft mt-8 p-7">
                <blockquote className="font-serif text-xl leading-relaxed text-mocha sm:text-2xl">
                  &ldquo;Resultado natural, conversa honesta e um espaço onde te
                  sintas à vontade para perguntar tudo antes de marcar.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-taupe">
                  {business.owner} · {business.name}
                </figcaption>
              </figure>

              <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-cocoa text-pretty">
                <p>
                  Sou a {business.owner}. Em Vila Real, o foco é ouvir o que
                  queres — e traduzir isso num resultado que funcione no teu
                  dia-a-dia.
                </p>
                <p>
                  Especializo-me em extensões de cabelo: escolhemos juntos a
                  técnica, o comprimento e o volume certos. Sem pressão, com
                  explicação clara e acompanhamento na manutenção.
                </p>
              </div>

              <dl className="mt-9 flex flex-wrap gap-3">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-2xl bg-paper/80 px-5 py-3.5 shadow-soft"
                  >
                    <dt className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-bronze-deep">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm text-mocha">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
