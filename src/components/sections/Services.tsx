"use client";

import { useSiteLanguage } from "@/contexts/LanguageContext";
import { serviceIconFor } from "./ServiceIcons";

export default function Services() {
  const { t } = useSiteLanguage();

  return (
    <section
      id="servicos"
      className="scroll-mt-24 border-t border-blue-100/60 bg-linear-to-b from-white/90 to-blue-50/30 py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:from-transparent dark:to-transparent dark:backdrop-blur-none sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            {t.services.kicker}
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{t.services.title}</p>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">{t.services.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {t.services.items.map((item) => (
            <li
              key={item.key}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-8 shadow-[0_12px_40px_-24px_rgba(59,130,246,0.35),0_1px_0_0_rgba(255,255,255,0.8)_inset] ring-1 ring-zinc-950/[0.04] transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:shadow-[0_20px_44px_-20px_rgba(59,130,246,0.28)] dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none dark:ring-white/[0.04] dark:hover:translate-y-0 dark:hover:border-blue-500/25 dark:hover:bg-white/[0.04]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-400/14 blur-2xl transition group-hover:bg-blue-400/22 dark:bg-blue-500/5 dark:group-hover:bg-blue-500/10" />
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100/95 text-blue-800 shadow-sm shadow-blue-900/[0.06] ring-1 ring-blue-200/80 transition group-hover:ring-blue-300 dark:bg-blue-500/10 dark:text-blue-400 dark:shadow-none dark:ring-blue-500/25 dark:group-hover:ring-blue-400/35">
                  {serviceIconFor(item.key)}
                </span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
