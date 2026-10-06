"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "./data";

export function OffresFaq() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (index: number) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  return (
    <section className="w-full max-w-[840px] mx-auto px-gutter-mobile lg:px-gutter pb-space-2xl">
      <div className="flex flex-col items-center text-center mb-space-xl">
        <span className="font-label-pill text-label-pill uppercase text-secondary font-bold tracking-wider">
          Transparence absolue
        </span>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mt-1">
          Questions fréquentes sur les tarifs
        </h2>
      </div>
      <div className="space-y-space-md">
        {faqs.map((item, index) => {
          const isOpen = open.has(index);
          return (
            <div key={item.question} className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm transition-all">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">{item.question}</span>
                <Icon
                  name="expand_more"
                  className={`text-on-surface transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="mt-space-sm text-secondary font-body-md text-body-md pr-space-lg">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
