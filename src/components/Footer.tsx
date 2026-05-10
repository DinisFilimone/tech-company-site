"use client";

import BrandLogo from "@/components/BrandLogo";
import { useSiteLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useSiteLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100/65 bg-linear-to-br from-sky-50/40 via-[#fafaf9] to-blue-50/35 py-12 dark:border-white/[0.06] dark:from-transparent dark:via-transparent dark:to-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex max-w-sm flex-col items-center gap-3 sm:items-start">
          <div className="flex items-center gap-3">
            <BrandLogo alt="" heightClass="h-10" />
            <div aria-hidden className="min-w-0 text-left">
              <p className="font-brand text-sm font-bold leading-tight text-zinc-900 dark:text-white">
                <span className="bg-linear-to-r from-blue-600 to-sky-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-400">
                  {t.brand.legalName}
                </span>
              </p>
              <p className="mt-0.5 text-xs italic text-zinc-600 dark:text-zinc-500">{t.brand.slogan}</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-600 dark:text-zinc-500">
          <a
            href="#servicos"
            className="rounded-md px-1 transition hover:bg-blue-100/80 hover:text-blue-950 dark:hover:bg-transparent dark:hover:text-zinc-300"
          >
            {t.footer.links.servicos}
          </a>
          <a
            href="#sobre"
            className="rounded-md px-1 transition hover:bg-blue-100/80 hover:text-blue-950 dark:hover:bg-transparent dark:hover:text-zinc-300"
          >
            {t.footer.links.sobre}
          </a>
          <a
            href="#contacto"
            className="rounded-md px-1 transition hover:bg-blue-100/80 hover:text-blue-950 dark:hover:bg-transparent dark:hover:text-zinc-300"
          >
            {t.footer.links.contacto}
          </a>
        </nav>
        <p className="max-w-[16rem] text-center text-sm text-zinc-500 dark:text-zinc-600 sm:text-right">
          &copy; {year} {t.brand.legalName}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
