"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: readonly FaqItem[] | FaqItem[];
  title?: string;
  eyebrow?: string;
  id?: string;
};

export default function Faq({
  items,
  title = "Perguntas frequentes",
  eyebrow = "FAQ",
  id = "faq",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={id}
      className="section-padding"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-tight max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
          {eyebrow}
        </p>
        <h2
          id={`${id}-heading`}
          className="font-serif text-3xl md:text-4xl text-foreground leading-tight text-balance mb-8"
        >
          {title}
        </h2>

        <div className="divide-y divide-border border-y border-border">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${id}-panel-${index}`;
            const buttonId = `${id}-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={cn(!isOpen && "hidden")}
                >
                  <p className="pb-5 text-muted-foreground leading-relaxed text-pretty pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
