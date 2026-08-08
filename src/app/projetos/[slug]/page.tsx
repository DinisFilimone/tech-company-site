"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useSiteLanguage } from "@/contexts/LanguageContext";

export default function ProjetoSlugPage() {
  const params = useParams();
  const slugRaw = params?.slug;
  const slug = typeof slugRaw === "string" ? slugRaw : "";
  const { t } = useSiteLanguage();

  const detail = slug ? t.projects.detailPages[slug] : undefined;
  const card = t.projects.cards.find((c) => c.slug === slug);

  if (!slug || !detail || !card) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-2xl px-4 pb-24 pt-28 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 sm:px-6 lg:px-8 lg:pt-32">
        <p className="text-lg">{t.projects.detailNotFound}</p>
        <Link
          href="/#projetos"
          className="mt-8 inline-flex text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {t.projects.detailIntroBackToProjects}
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[70vh] max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <Link
        href="/#projetos"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <span aria-hidden>←</span>
        {t.projects.detailIntroBackToProjects}
      </Link>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">{detail.eyebrow}</p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">{card.title}</h1>
        <span className="rounded-full border border-transparent bg-sky-100/90 px-3 py-0.5 text-xs font-medium text-sky-900 dark:bg-white/[0.08] dark:text-zinc-300">
          {card.tag}
        </span>
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {detail.paragraphs.map((block, i) => (
          <p key={i}>{block}</p>
        ))}
      </div>

      {detail.bullets && detail.bullets.length > 0 ? (
        <ul className="mt-10 list-inside list-disc space-y-2 text-zinc-700 marker:text-blue-600 dark:text-zinc-300 dark:marker:text-blue-400">
          {detail.bullets.map((b) => (
            <li key={b} className="pl-1">
              {b}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/#contacto"
          className="inline-flex rounded-full bg-linear-to-br from-blue-600 to-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-105 dark:from-blue-500 dark:to-sky-600"
        >
          {t.projects.detailCtaContact}
        </Link>
      </div>
    </main>
  );
}
