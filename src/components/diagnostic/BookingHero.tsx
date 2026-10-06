"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { days, reassurances, slots } from "./data";

export function BookingHero() {
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState(1);

  return (
    <section className="relative w-full max-w-[1180px] mx-auto px-gutter-mobile lg:px-gutter pt-space-xl pb-space-2xl flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-space-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-primary-container shadow-[0_0_10px_rgba(217,249,68,0.9)] animate-pulse" />
        <span className="font-label-pill text-label-pill uppercase text-on-surface font-bold tracking-wider">
          Le diagnostic offert
        </span>
      </div>
      <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface max-w-[940px] tracking-tight mb-space-md">
        30 minutes pour voir exactement pourquoi vos concurrents vous devancent sur Google.
      </h1>
      <p className="font-body-lg text-body-md lg:text-body-lg text-secondary max-w-[760px] mb-space-2xl">
        Pas de jargon technique, pas de présentation commerciale agressive. On partage mon écran, je tape vos
        mots-clés dans votre zone, et on dissèque ensemble ce qui vous sépare de la première place.
      </p>

      <div className="w-full max-w-[760px] bg-surface-container-lowest rounded-ds-lg p-space-lg md:p-space-xl shadow-xl flex flex-col items-stretch text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-md mb-space-md bg-surface-container-low/50 p-4 rounded-ds">
          <div className="flex items-center gap-space-sm">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm">
              <Image
                className="w-full h-full object-cover"
                src="/images/antoine-portrait-booking.jpg"
                alt="Portrait professionnel d'Antoine Andraud, expert SEO et artisan web"
                width={48}
                height={48}
              />
            </div>
            <div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
                Antoine A.
              </div>
              <div className="font-label-pill text-label-pill text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary" /> 3 créneaux restants cette semaine
              </div>
            </div>
          </div>
          <div className="inline-flex items-center self-start md:self-auto gap-2 bg-primary-container/20 text-on-primary-container px-3 py-1.5 rounded-full font-label-md text-label-md">
            <Icon name="timer" className="text-[18px]" />
            <span>30 minutes chrono</span>
          </div>
        </div>

        <div className="space-y-space-md">
          <div>
            <span className="font-label-md text-label-md text-secondary block mb-space-xs uppercase tracking-wider">
              1. Choisissez le jour
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {days.map((item, index) => {
                const selected = index === day;
                return (
                  <button
                    key={item.key}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setDay(index)}
                    className={`py-2.5 px-2 rounded-ds font-label-md text-center transition-all focus:outline-none ${
                      selected
                        ? "bg-primary-container text-on-primary-fixed shadow-sm"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <div
                      className={`text-[11px] font-bold ${
                        selected ? "text-on-primary-fixed-variant" : "text-secondary"
                      }`}
                    >
                      {item.short}
                    </div>
                    <div className="text-[16px] font-extrabold">{item.date}</div>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <span className="font-label-md text-label-md text-secondary block mb-space-xs uppercase tracking-wider">
              2. Choisissez l&apos;heure (Google Meet)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {slots.map((label, index) => {
                const selected = index === slot;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSlot(index)}
                    className={`py-2 px-3 rounded-full text-center font-label-md transition-all focus:outline-none ${
                      selected
                        ? "bg-on-surface text-surface-container-lowest"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="pt-space-sm">
            <Link
              href="#reserver-form"
              className="w-full flex items-center justify-center gap-space-sm bg-primary-container text-on-primary-fixed hover:shadow-[0_8px_30px_rgba(217,249,68,0.45)] hover:scale-[1.01] transition-all py-4 px-space-lg rounded-full font-headline-sm text-headline-sm text-center"
            >
              <span>Confirmer mon créneau gratuit de 30 min</span>
              <Icon name="arrow_forward" className="text-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs mt-space-lg text-secondary font-label-md text-label-md">
        {reassurances.map((item, index) => (
          <div key={item.label} className="contents">
            {index > 0 && <span className="hidden sm:inline text-surface-container-highest">•</span>}
            <span className="flex items-center gap-1.5">
              <Icon name={item.icon} className="text-primary text-[18px]" /> {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
