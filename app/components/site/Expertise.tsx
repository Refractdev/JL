import Link from "next/link";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/src/lib/whatsapp";
import OptimizedImage from "@/app/components/site/OptimizedImage";

const steps = [
  {
    title: "Avaliação",
    description:
      "Analisamos o teu cabelo, o objetivo e a rotina. Definimos técnica, comprimento e volume.",
    image: "extension-process-01",
    alt: "Avaliação de cabelo antes da aplicação de extensões, na JL e Extensões",
  },
  {
    title: "Aplicação",
    description:
      "Aplicação cuidada, focada num resultado natural que se integra com o teu cabelo.",
    image: "extension-process-02",
    alt: "Processo de aplicação de extensões de cabelo fio a fio",
  },
  {
    title: "Manutenção",
    description:
      "Revisões periódicas para manter conforto, densidade e o aspeto natural ao longo do tempo.",
    image: "extension-process-03",
    alt: "Extensões aplicadas, prontas para a revisão de manutenção",
  },
] as const;

const benefits = [
  "Comprimento e volume à tua medida",
  "Resultado que parece teu no dia-a-dia",
  "Cuidados explicados ao detalhe",
];

export default function Expertise() {
  return (
    <section id="especialidade" className="relative" aria-labelledby="expertise-heading">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-blush/45 px-6 py-16 sm:rounded-[3rem] sm:px-10 md:px-16 md:py-24">
          <div
            className="bloom bloom-bronze -left-24 bottom-[-8rem] h-[28rem] w-[28rem]"
            aria-hidden
          />

          <div className="relative z-10">
            <div className="mx-auto max-w-2xl text-center" data-reveal>
              <span className="eyebrow">Especialidade</span>
              <h2
                id="expertise-heading"
                className="display mt-6 text-display-lg text-balance"
              >
                Extensões que se{" "}
                <em className="not-italic text-bronze-deep">integram</em>, não que
                se notam
              </h2>
              <p className="lede mx-auto mt-6 max-w-measure-lg text-pretty">
                Comprimento, volume e densidade com aplicação cuidada — para um
                resultado que parece teu desde o primeiro dia.
              </p>
            </div>

            <ul
              className="mt-8 flex flex-wrap justify-center gap-2.5"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              {benefits.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-paper/80 py-2.5 pl-3 pr-5 text-sm text-cocoa shadow-soft backdrop-blur-sm"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-bronze-deep" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            {/* Passos em arco — a forma que dá o tom de boutique */}
            <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="group text-center"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 150}ms` }}
                >
                  <div className="relative mx-auto max-w-[20rem]">
                    <OptimizedImage
                      baseName={step.image}
                      alt={step.alt}
                      ratio="3 / 4"
                      widthHint={800}
                      sizes="(max-width: 768px) 80vw, 30vw"
                      className="frame-arch frame-zoom shadow-lift"
                    />
                    <span className="absolute -bottom-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-paper font-serif text-lg text-bronze-deep shadow-lift">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-10 font-serif text-2xl text-mocha">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[26ch] text-sm leading-relaxed text-cocoa text-pretty">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <div
              className="mt-16 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
              data-reveal
            >
              <a
                href={whatsappLink(WA_MESSAGES.expertise)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                Serão para mim?
              </a>
              <Link href="/extensoes-cabelo-vila-real" className="link-soft">
                Saber mais sobre extensões
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
