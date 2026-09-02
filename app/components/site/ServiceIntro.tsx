import { Check } from "lucide-react";
import OptimizedImage from "@/app/components/site/OptimizedImage";

type ServiceIntroProps = {
  eyebrow: string;
  title: string;
  accentWord?: string;
  description: string;
  items: readonly string[];
  /** Sem foto verdadeira do serviço, a lista fica em cartão creme */
  imageBase?: string;
  imageAlt?: string;
};

/** Abertura das páginas de serviço: texto + lista em cartões + foto opcional */
export default function ServiceIntro({
  eyebrow,
  title,
  accentWord,
  description,
  items,
  imageBase,
  imageAlt = "",
}: ServiceIntroProps) {
  const parts = accentWord ? title.split(accentWord) : null;

  return (
    <section className="section relative overflow-hidden">
      <div
        className="bloom bloom-blush right-[-10rem] top-0 h-[30rem] w-[30rem]"
        aria-hidden
      />

      <div
        className={
          imageBase
            ? "shell relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
            : "shell-narrow relative z-10 text-center"
        }
      >
        <div className={imageBase ? "lg:col-span-5" : ""} data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="display mt-6 text-display-md text-balance">
            {parts && parts.length === 2 ? (
              <>
                {parts[0]}
                <em className="not-italic text-bronze-deep">{accentWord}</em>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <p
            className={
              imageBase ? "lede mt-6 text-pretty" : "lede mx-auto mt-6 max-w-measure-lg text-pretty"
            }
          >
            {description}
          </p>

          <ul
            className={
              imageBase
                ? "mt-9 space-y-2.5"
                : "mt-10 grid gap-2.5 text-left sm:grid-cols-2"
            }
          >
            {items.map((item, i) => (
              <li
                key={item}
                className="card-soft flex items-start gap-3 px-5 py-4 text-sm text-cocoa"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush">
                  <Check className="h-3 w-3 text-bronze-deep" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {imageBase && (
          <div
            className="lg:col-span-6 lg:col-start-7"
            data-reveal
            style={{ ["--reveal-delay" as string]: "140ms" }}
          >
            <OptimizedImage
              baseName={imageBase}
              alt={imageAlt}
              ratio="4 / 3"
              widthHint={1200}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="frame-xl frame-zoom shadow-lift"
            />
          </div>
        )}
      </div>
    </section>
  );
}
