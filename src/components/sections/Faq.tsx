"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16" id="faq">
      <SectionHeading
        title="Foire Aux Questions"
        sizeClass="text-3xl"
        subtitle="Tout ce que vous devez savoir avant de débuter ensemble."
        subtitleClass="text-sm mt-2"
      />
      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question} className="rounded-2xl border border-brand-border bg-white overflow-hidden transition-all">
              <button
                className="w-full p-5 text-left flex items-center justify-between font-semibold text-brand-black hover:text-black focus:outline-none"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="text-sm sm:text-base">{item.question}</span>
                <Icon
                  name="expand_more"
                  className={`text-xl text-brand-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-brand-muted leading-relaxed">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
