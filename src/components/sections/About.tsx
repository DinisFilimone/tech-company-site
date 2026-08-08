"use client";

import { useSiteLanguage } from "@/contexts/LanguageContext";

const tech = ["Next.js", "React","Dart","JavaScript","Flutter", "Python", "TypeScript", "Tailwind CSS", "Node", "REST & APIs"];

export default function About() {
  const { t } = useSiteLanguage();

  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-t border-zinc-200/85 bg-linear-to-br from-blue-50/25 via-[#fafaf9] to-sky-50/20 py-24 dark:border-white/[0.06] dark:from-transparent dark:via-transparent dark:to-transparent sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">{t.about.kicker}</h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{t.about.title}</p>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>{t.about.p1}</p>
              <p>
                <strong className="font-semibold text-zinc-900 dark:text-zinc-200">{t.about.visionLead}</strong>{" "}
                {t.about.visionRest}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/90 bg-white/98 p-8 shadow-[0_22px_50px_-30px_rgba(30,64,175,0.35)] ring-1 ring-sky-900/[0.04] backdrop-blur-sm sm:p-10 dark:border-white/[0.1] dark:bg-zinc-900/40 dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] dark:ring-white/[0.06] dark:backdrop-blur-none">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-800/85 dark:text-blue-400/90">{t.about.techLead}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {tech.map((name) => (
                <li key={name}>
                  <span className="inline-flex rounded-full border border-sky-200/85 bg-sky-50/90 px-4 py-2 text-sm font-medium text-sky-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-blue-100/80 pt-8 text-sm leading-relaxed text-zinc-600 dark:border-white/[0.08] dark:text-zinc-500">
              {t.about.techNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
