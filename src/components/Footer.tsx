"use client";

import { useSiteLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useSiteLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-100/65 bg-linear-to-br from-teal-50/40 via-[#fafaf9] to-zinc-100/95 py-12 dark:border-white/[0.06] dark:bg-transparent dark:from-transparent dark:via-transparent dark:to-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          Tech
          <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
            Nova
          </span>
        </p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-600 dark:text-zinc-500">
          <a href="#servicos" className="rounded-md px-1 transition hover:bg-emerald-100/75 hover:text-emerald-950 dark:hover:bg-transparent dark:hover:text-zinc-300">
            {t.footer.links.servicos}
          </a>
          <a href="#sobre" className="rounded-md px-1 transition hover:bg-emerald-100/75 hover:text-emerald-950 dark:hover:bg-transparent dark:hover:text-zinc-300">
            {t.footer.links.sobre}
          </a>
          <a href="#contacto" className="rounded-md px-1 transition hover:bg-emerald-100/75 hover:text-emerald-950 dark:hover:bg-transparent dark:hover:text-zinc-300">
            {t.footer.links.contacto}
          </a>
        </nav>
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-600">
          &copy; {year} TechNova. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
