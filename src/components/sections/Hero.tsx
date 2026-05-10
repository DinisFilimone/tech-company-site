"use client";

import { useSiteLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useSiteLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-linear-to-b from-white via-emerald-50/50 to-[#fafaf9] pt-28 pb-20 sm:pt-32 dark:bg-none dark:bg-transparent"
    >
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(80vh,640px)] w-[min(90vw,720px)] rounded-full bg-emerald-400/22 blur-[120px] animate-float-soft dark:bg-emerald-500/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(70vh,560px)] w-[min(85vw,640px)] rounded-full bg-cyan-400/18 blur-[100px] animate-float-soft dark:bg-cyan-500/10"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          className="animate-fade-rise mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 shadow-sm shadow-emerald-900/[0.04] sm:text-[0.8125rem] dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none dark:text-emerald-400/90"
          style={{ animationDelay: "0.05s" }}
        >
          {t.hero.badge}
        </p>

        <h1
          className="animate-fade-rise max-w-4xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.08] dark:text-white"
          style={{ animationDelay: "0.12s" }}
        >
          {t.hero.titleBefore}{" "}
          <span className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-cyan-300 dark:to-emerald-200">
            {t.hero.titleAccent}
          </span>
        </h1>

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
          <a
            href="#contacto"
            className="inline-flex rounded-full bg-linear-to-br from-emerald-600 to-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-900/20 transition hover:brightness-105 dark:bg-white dark:[background-image:none] dark:text-zinc-950 dark:shadow-black/35 dark:hover:bg-zinc-100"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300/95 bg-white/70 px-7 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm shadow-zinc-900/[0.04] backdrop-blur-sm transition hover:border-emerald-300/80 hover:bg-white dark:border-white/15 dark:bg-transparent dark:text-zinc-100 dark:shadow-none dark:hover:border-white/25 dark:hover:bg-white/[0.04]"
          >
            {t.hero.secondaryCta}
            <span aria-hidden className="text-emerald-600 dark:text-emerald-400">
              →
            </span>
          </a>
        </div>

        <dl
          className="animate-fade-rise mt-20 grid gap-8 border-t border-emerald-100/70 pt-16 sm:grid-cols-3 dark:border-white/[0.06]"
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
        className="pointer-events-none absolute bottom-12 left-1/2 hidden h-14 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-emerald-500/40 to-transparent dark:via-emerald-500/50 sm:block"
        aria-hidden
      />
    </section>
  );
}
