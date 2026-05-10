"use client";

import { useState } from "react";
import { useSiteLanguage } from "@/contexts/LanguageContext";
import { useSiteTheme } from "@/contexts/ThemeContext";
import { IconMoon, IconSun } from "@/components/icons/ThemeModeIcons";
import BrandLogo from "@/components/BrandLogo";
import type { Locale } from "@/messages/site";

const navOrder = ["inicio", "servicos", "sobre", "projetos", "contacto"] as const;
const hrefByKey: Record<(typeof navOrder)[number], string> = {
  inicio: "#inicio",
  servicos: "#servicos",
  sobre: "#sobre",
  projetos: "#projetos",
  contacto: "#contacto",
};

export default function Navbar() {
  const { t, locale, setLocale } = useSiteLanguage();
  const { mode, toggleMode } = useSiteTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/70 bg-white/90 shadow-sm shadow-zinc-900/[0.04] backdrop-blur-xl dark:border-white/[0.06] dark:bg-zinc-950/75 dark:shadow-none">
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-10 xl:px-14">
        <a
          href="#inicio"
          aria-label={t.brand.legalName}
          className="flex min-w-0 shrink-0 items-center gap-2 text-zinc-900 transition-opacity hover:opacity-90 dark:text-white sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <BrandLogo alt="" heightClass="h-9 sm:h-10" />
          <span
            aria-hidden
            className="font-brand min-w-0 text-xs font-bold tracking-tight leading-tight sm:text-sm"
          >
            <span className="bg-linear-to-r from-blue-600 to-sky-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-400">
              Creative Tech
            </span>
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          <ul className="hidden min-w-0 items-center justify-end gap-x-2 text-sm font-semibold text-zinc-700 lg:flex xl:gap-x-3 dark:text-zinc-200">
            {navOrder.map((key) => {
              const item = t.nav.items[key];
              return (
                <li key={key} className="group relative shrink-0">
                  <a
                    href={hrefByKey[key]}
                    className="relative z-10 block whitespace-nowrap rounded-md px-2 py-2 transition-colors hover:text-blue-700 focus-visible:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-2.5 dark:hover:text-blue-300 dark:focus-visible:text-blue-300 dark:focus-visible:ring-blue-400/50 dark:focus-visible:ring-offset-zinc-950"
                  >
                    {item.label}
                  </a>
                  <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 opacity-0 transition duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="pointer-events-auto rounded-xl border border-zinc-200/95 bg-white/98 p-4 text-left shadow-xl shadow-blue-900/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl dark:border-white/[0.1] dark:bg-zinc-900/95 dark:shadow-black/50 dark:ring-white/[0.04]">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{item.hoverTitle}</p>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{item.hoverDesc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5 lg:gap-3">
            <button
              type="button"
              onClick={() => toggleMode()}
              aria-label={mode === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
              className={
                mode === "dark"
                  ? "flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/35 bg-linear-to-br from-blue-500/15 via-sky-500/10 to-blue-600/18 text-blue-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09)] transition hover:border-blue-400/50 hover:from-blue-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  : "flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/90 bg-linear-to-br from-white via-blue-50/80 to-sky-50/50 text-blue-900 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition hover:border-blue-300 hover:from-blue-50 hover:to-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9]"
              }
            >
              {mode === "dark" ? (
                <IconSun className="h-[1.2rem] w-[1.2rem] shrink-0" />
              ) : (
                <IconMoon className="h-[1.2rem] w-[1.2rem] shrink-0 opacity-95" />
              )}
            </button>

            <div
              className="flex rounded-full border border-blue-200/55 bg-blue-50/[0.45] p-0.5 dark:border-white/15 dark:bg-transparent"
              role="group"
              aria-label={t.nav.langSwitcher}
            >
              {(["pt", "en"] as Locale[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition sm:px-3 ${
                    locale === code
                      ? "bg-blue-700 text-white shadow-sm shadow-blue-900/25 dark:bg-white dark:text-zinc-950 dark:shadow-sm"
                      : "text-blue-900/65 hover:bg-white/70 hover:text-blue-950 dark:text-zinc-500 dark:hover:bg-white/10 dark:hover:text-zinc-300"
                  }`}
                  aria-pressed={locale === code}
                >
                  {code}
                </button>
              ))}
            </div>

            <a
              href="#contacto"
              className="hidden rounded-full bg-linear-to-r from-blue-600 to-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-900/22 transition hover:brightness-105 dark:from-blue-500 dark:to-sky-600 dark:shadow-black/30 sm:inline-flex lg:px-5"
            >
              {t.nav.cta}
            </a>

            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-zinc-700 transition hover:bg-zinc-100/90 dark:text-zinc-300 dark:hover:bg-white/5 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200/85 bg-[#fdfdfc] px-4 py-5 shadow-inner shadow-blue-900/[0.03] backdrop-blur-xl dark:border-white/[0.06] dark:bg-zinc-950/95 dark:shadow-none lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navOrder.map((key) => {
              const item = t.nav.items[key];
              return (
                <li key={key}>
                  <a
                    href={hrefByKey[key]}
                    className="block rounded-xl px-3 py-2.5 transition hover:bg-blue-50/80 dark:hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    <span className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-zinc-500">{item.hoverDesc}</span>
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="#contacto"
                className="block rounded-full bg-linear-to-r from-blue-600 to-sky-700 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-900/22 dark:from-blue-500 dark:to-sky-600 dark:text-white"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
