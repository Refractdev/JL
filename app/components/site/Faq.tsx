"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({
  items,
  title = "Perguntas frequentes",
  id = "faq",
}: {
  items: readonly FaqItem[] | FaqItem[];
  title?: string;
  id?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="section-padding bg-muted/50">
      <div className="container-tight max-w-3xl">
        <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-8 text-balance">
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
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 shrink-0 text-muted-foreground transition-transform",
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
                  className="pb-5"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed pr-8">
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
