"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import HeroRequestModal from "@/components/HeroRequestModal";
import { useSiteLanguage } from "@/contexts/LanguageContext";

const SLIDE_INTERVAL_MS = 6000;

const slideSrc = (index: number) => `/images/hero-slider/slide-${index}.png`;

export default function Hero() {
  const { t } = useSiteLanguage();
  const slides = t.hero.slides;
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length]);

  const goTo = useCallback((index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#fafaf9] pt-28 pb-20 sm:pt-32 dark:bg-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {slides.map((_, idx) => (
          <Image
            key={idx}
            src={slideSrc(idx)}
            alt=""
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center transition-[opacity] duration-[1200ms] ease-in-out"
            style={{
              opacity: active === idx ? 1 : 0,
              zIndex: active === idx ? 2 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 z-[2] bg-linear-to-br from-white/86 via-[#f4f9fc]/78 to-[#fafaf9]/88 dark:from-zinc-950/82 dark:via-zinc-950/74 dark:to-zinc-950/88" />
        <div className="absolute inset-0 z-[2] bg-black/[0.1] dark:bg-black/48" />
        <div className="absolute inset-0 z-[2] bg-linear-to-t from-transparent via-blue-50/22 to-transparent dark:via-transparent dark:to-zinc-950/28" />
      </div>

      <div
        className="pointer-events-none absolute -left-1/4 top-0 z-[3] h-[min(80vh,640px)] w-[min(90vw,720px)] rounded-full bg-blue-400/16 blur-[120px] animate-float-soft dark:bg-blue-500/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 z-[3] h-[min(70vh,560px)] w-[min(85vw,640px)] rounded-full bg-sky-400/14 blur-[100px] animate-float-soft dark:bg-sky-600/12"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          className="animate-fade-rise mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/85 bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-900 shadow-sm shadow-blue-900/[0.06] sm:text-[0.8125rem] dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-blue-300 dark:shadow-none"
          style={{ animationDelay: "0.05s" }}
        >
          {t.hero.badge}
        </p>

        <div
          className="animate-fade-rise mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8"
          style={{ animationDelay: "0.08s" }}
          aria-live="polite"
        >
          <p
            key={active}
            className="animate-hero-slide-line max-w-2xl text-lg font-semibold leading-snug tracking-tight text-zinc-800 sm:text-xl dark:text-white"
          >
            {slides[active]?.caption}
          </p>
          <div className="flex shrink-0 items-center gap-2" role="tablist" aria-label="Slides do hero">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={active === idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9] dark:focus-visible:ring-offset-zinc-950 ${
                  active === idx ? "w-8 bg-blue-600 dark:bg-blue-400" : "w-2 bg-zinc-300/90 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>

        <h1
          className="animate-fade-rise max-w-4xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.08] dark:text-white"
          style={{ animationDelay: "0.12s" }}
        >
          {t.hero.titleBefore}{" "}
          <span className="bg-linear-to-r from-blue-600 via-blue-600 to-sky-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-400 dark:to-sky-400">
            {t.hero.titleAccent}
          </span>
        </h1>

        <p
          className="animate-fade-rise mt-4 max-w-2xl text-lg font-medium italic leading-snug text-blue-900/90 sm:text-xl dark:text-blue-300/90"
          style={{ animationDelay: "0.16s" }}
        >
          {t.brand.slogan}
        </p>

        <p
          className="animate-fade-rise mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="animate-fade-rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.28s" }}
        >
          <button
            type="button"
            onClick={() => setRequestOpen(true)}
            className="inline-flex rounded-full bg-linear-to-br from-blue-600 to-sky-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-900/22 transition hover:brightness-105 dark:shadow-black/35 dark:[background-image:none] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            {t.hero.primaryCta}
          </button>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300/95 bg-white/70 px-7 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm shadow-zinc-900/[0.04] backdrop-blur-sm transition hover:border-sky-400/70 hover:bg-white dark:border-white/15 dark:bg-transparent dark:text-zinc-100 dark:shadow-none dark:hover:border-white/25 dark:hover:bg-white/[0.04]"
          >
            {t.hero.secondaryCta}
            <span aria-hidden className="text-blue-600 dark:text-blue-400">
              →
            </span>
          </a>
        </div>

        <dl
          className="animate-fade-rise mt-20 grid gap-8 border-t border-blue-100/75 pt-16 sm:grid-cols-3 dark:border-white/[0.06]"
          style={{ animationDelay: "0.38s" }}
        >
          {t.hero.stats.map((row) => (
            <div key={row.k}>
              <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">{row.k}</dt>
              <dd className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="pointer-events-none absolute bottom-12 left-1/2 z-[3] hidden h-14 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-blue-400/35 to-transparent dark:via-blue-400/45 sm:block"
        aria-hidden
      />

      <HeroRequestModal open={requestOpen} onClose={() => setRequestOpen(false)} />
    </section>
  );
}
