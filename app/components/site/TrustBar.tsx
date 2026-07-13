import { Check, ExternalLink } from "lucide-react";
import { business } from "@/src/lib/site";
import { reviewsConfig } from "@/src/lib/reviews";

const trustItems = ["Avaliação gratuita", "Orçamento personalizado"] as const;

export default function TrustBar() {
  return (
    <section
      aria-label="Confiança e avaliações"
      className="border-b border-border bg-card"
    >
      <div className="container-tight py-5 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {trustItems.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-sm text-foreground"
            >
              <Check className="w-4 h-4 text-primary shrink-0" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={business.googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          Ver avaliações no Google
          <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </div>

      {reviewsConfig.enabled && reviewsConfig.items.length > 0 ? (
        <div className="container-tight pb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsConfig.items.map((review) => (
            <blockquote
              key={`${review.author}-${review.text.slice(0, 24)}`}
              className="border border-border bg-background p-5 text-sm"
            >
              <p className="text-foreground/90 leading-relaxed mb-3">
                “{review.text}”
              </p>
              <footer className="text-muted-foreground text-xs uppercase tracking-wider">
                {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      ) : null}
    </section>
  );
}
