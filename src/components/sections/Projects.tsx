"use client";

import Link from "next/link";
import { useSiteLanguage } from "@/contexts/LanguageContext";

const cardOuterClass =
  "group relative flex h-full origin-center flex-col overflow-hidden rounded-2xl border border-dashed border-blue-200/95 bg-linear-to-br from-blue-50/40 via-white to-zinc-50/95 shadow-[0_16px_40px_-32px_rgba(59,130,246,0.45)] ring-1 ring-zinc-900/[0.03] transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform motion-safe:hover:z-10 motion-safe:hover:scale-[1.03] motion-safe:hover:border-blue-400/65 motion-safe:hover:shadow-[0_22px_48px_-20px_rgba(59,130,246,0.38)] dark:border-white/[0.12] dark:from-transparent dark:via-transparent dark:to-transparent dark:shadow-none dark:ring-white/[0.04] dark:motion-safe:hover:border-blue-500/30 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950";

function ProjectCardBody({ title, tag, desc }: { title: string; tag: string; desc: string }) {
  return (
    <>
      <div className="aspect-[16/10] bg-linear-to-br from-blue-200/45 via-sky-100/40 to-white ring-1 ring-inset ring-white/75 dark:from-blue-500/10 dark:via-zinc-900/90 dark:to-zinc-950 dark:ring-white/[0.04]" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
          <span className="rounded-full border border-transparent bg-sky-100/90 px-2.5 py-0.5 text-xs font-medium text-sky-900 dark:border-transparent dark:bg-white/[0.06] dark:text-zinc-400">
            {tag}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{desc}</p>
      </div>
    </>
  );
}

export default function Projects() {
  const { t } = useSiteLanguage();

  return (
    <section id="projetos" className="scroll-mt-24 border-t border-blue-100/55 bg-white/95 py-24 dark:border-white/[0.06] dark:bg-transparent sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
              {t.projects.kicker}
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{t.projects.title}</p>
            <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">{t.projects.subtitle}</p>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {t.projects.cards.map((p) => (
            <li key={p.key} className="flex h-full min-h-[320px]">
              {p.slug ? (
                <Link href={`/projetos/${p.slug}`} className={cardOuterClass}>
                  <ProjectCardBody title={p.title} tag={p.tag} desc={p.desc} />
                </Link>
              ) : (
                <div className={cardOuterClass}>
                  <ProjectCardBody title={p.title} tag={p.tag} desc={p.desc} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
