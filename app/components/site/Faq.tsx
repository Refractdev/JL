"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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
  eyebrow = "Dúvidas",
  id = "faq",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={id}
      className="section relative overflow-hidden"
      aria-labelledby={`${id}-heading`}
    >
      <div
        className="bloom bloom-blush left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2"
        aria-hidden
      />

      <div className="shell-narrow relative z-10">
        <div className="text-center" data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2
            id={`${id}-heading`}
            className="display mt-6 text-display-md text-balance"
          >
            {title}
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${id}-panel-${index}`;
            const buttonId = `${id}-button-${index}`;

            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-3xl transition-all duration-700 ease-soft",
                  isOpen
                    ? "bg-paper shadow-lift"
                    : "bg-paper/60 shadow-soft hover:bg-paper"
                )}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start gap-5 px-6 py-6 text-left sm:px-8"
                  >
                    <span className="flex-1 font-serif text-xl text-mocha sm:text-[1.375rem]">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-soft",
                        isOpen
                          ? "rotate-45 bg-mocha text-cream"
                          : "bg-blush/70 text-bronze-deep"
                      )}
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                {/* 0fr → 1fr: altura animada sem medir o DOM */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-600 ease-soft motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div
                    className={cn(
                      "overflow-hidden transition-[opacity,visibility] duration-500",
                      isOpen ? "visible opacity-100" : "invisible opacity-0"
                    )}
                  >
                    <p className="px-6 pb-7 text-[0.9375rem] leading-relaxed text-cocoa text-pretty sm:px-8 sm:pr-16">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
