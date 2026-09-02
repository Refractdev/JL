import { business } from "@/src/lib/site";
import OptimizedImage from "@/app/components/site/OptimizedImage";

const pillars = [
  {
    title: "Avaliação antes de tudo",
    text: "Olhamos para o teu cabelo e para a tua rotina antes de falar em técnica ou orçamento.",
  },
  {
    title: "Resultado que parece teu",
    text: "Comprimento, volume e tom escolhidos para se integrarem — não para se notarem.",
  },
  {
    title: "Acompanhamento depois",
    text: "Explicamos os cuidados e marcamos as revisões que mantêm o resultado no sítio.",
  },
];

const fan = [
  {
    base: "hair-01",
    alt: "Cabelo comprido e liso com extensões, resultado no estúdio de Vila Real",
    tilt: "-rotate-3",
    lift: "translate-y-4",
  },
  {
    base: "gallery-blonde-01",
    alt: "Extensões aplicadas em cabelo loiro, vista da raiz ao comprimento",
    tilt: "rotate-2",
    lift: "-translate-y-4",
  },
  {
    base: "hair-08",
    alt: "Cabelo ondulado castanho com comprimento e movimento",
    tilt: "-rotate-1",
    lift: "translate-y-8",
  },
];

export default function Manifesto() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="manifesto-heading">
      <div
        className="bloom bloom-blush right-[-10rem] top-10 h-[34rem] w-[34rem]"
        aria-hidden
      />

      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <span className="eyebrow">A casa</span>
          <h2
            id="manifesto-heading"
            className="display mt-6 text-display-md text-balance"
          >
            Um atelier onde o trabalho se explica{" "}
            <em className="not-italic text-bronze-deep">antes</em> de começar
          </h2>
          <p className="lede mt-6 text-pretty">
            {business.name} é o espaço da {business.owner} em Vila Real.
            Especialista em extensões, com o resto dos serviços de beleza a
            acompanhar — sempre com a mesma regra: percebes o que vai acontecer
            ao teu cabelo antes de o fazermos.
          </p>

          <div className="mt-10 space-y-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="card-blush flex gap-5 p-6 transition-transform duration-700 ease-soft hover:-translate-y-1"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper font-serif text-base text-bronze-deep shadow-soft">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-mocha">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cocoa text-pretty">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leque de fotografias — camadas inclinadas que endireitam no hover */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="grid grid-cols-2 items-start gap-4 sm:gap-6">
            <div
              className={`group ${fan[0].tilt} translate-y-6 transition-transform duration-[900ms] ease-soft hover:translate-y-0 hover:rotate-0`}
              data-reveal
            >
              <OptimizedImage
                baseName={fan[0].base}
                alt={fan[0].alt}
                ratio="3 / 4"
                widthHint={800}
                sizes="(max-width: 1024px) 46vw, 26vw"
                className="frame-zoom frame-xl shadow-lift"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              {fan.slice(1).map((item, i) => (
                <div
                  key={item.base}
                  className={`group ${item.tilt} transition-transform duration-[900ms] ease-soft hover:rotate-0`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(i + 1) * 160}ms` }}
                >
                  <OptimizedImage
                    baseName={item.base}
                    alt={item.alt}
                    ratio={i === 0 ? "4 / 5" : "1 / 1"}
                    widthHint={800}
                    sizes="(max-width: 1024px) 46vw, 26vw"
                    className="frame-zoom frame-xl shadow-lift"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
