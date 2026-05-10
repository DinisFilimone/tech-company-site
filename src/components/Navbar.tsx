"use client";

import { useState } from "react";
import { useSiteLanguage } from "@/contexts/LanguageContext";
import { useSiteTheme } from "@/contexts/ThemeContext";
import { IconMoon, IconSun } from "@/components/icons/ThemeModeIcons";
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="shrink-0 text-lg font-semibold tracking-tight text-zinc-900 transition hover:text-zinc-950 dark:text-white dark:hover:text-white"
          onClick={() => setOpen(false)}
        >
          Tech<span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
            Nova
          </span>
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium text-zinc-600 lg:flex dark:text-zinc-400">
          {navOrder.map((key) => {
            const item = t.nav.items[key];
            return (
              <li key={key} className="group relative">
                <a
                  href={hrefByKey[key]}
                  className="relative z-10 block rounded-lg px-3 py-2 transition-colors hover:text-emerald-700 focus-visible:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-emerald-400 dark:focus-visible:text-emerald-400 dark:focus-visible:ring-emerald-400/50 dark:focus-visible:ring-offset-zinc-950"
                >
                  {item.label}
                </a>
                <div className="pointer-events-none absolute left-1/2 top-full z-[60] w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 opacity-0 transition duration-200 ease-out translate-y-1 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="pointer-events-auto rounded-xl border border-zinc-200/95 bg-white/98 p-4 shadow-xl shadow-emerald-900/[0.06] ring-1 ring-black/[0.04] backdrop-blur-xl dark:border-white/[0.1] dark:bg-zinc-900/95 dark:shadow-black/50 dark:ring-white/[0.04]">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{item.hoverTitle}</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{item.hoverDesc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <button
            type="button"
            onClick={() => toggleMode()}
            aria-label={mode === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
            className={
              mode === "dark"
                ? "flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-linear-to-br from-amber-500/20 via-orange-500/10 to-amber-600/15 text-amber-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition hover:border-amber-300/55 hover:from-amber-500/30 hover:via-orange-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                : "flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200/90 bg-linear-to-br from-slate-100 via-indigo-50 to-violet-50 text-indigo-800 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition hover:border-indigo-300 hover:from-slate-50 hover:to-indigo-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9]"
            }
          >
            {mode === "dark" ? (
              <IconSun className="h-[1.2rem] w-[1.2rem] shrink-0" />
            ) : (
              <IconMoon className="h-[1.2rem] w-[1.2rem] shrink-0 opacity-95" />
            )}
          </button>

          <div
            className="flex rounded-full border border-emerald-200/55 bg-emerald-50/[0.45] p-0.5 dark:border-white/15 dark:bg-transparent"
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
                    ? "bg-emerald-700 text-white shadow-sm shadow-emerald-900/25 dark:bg-white dark:text-zinc-950 dark:shadow-sm"
                    : "text-emerald-900/65 hover:bg-white/70 hover:text-emerald-950 dark:text-zinc-500 dark:hover:bg-white/10 dark:hover:text-zinc-300"
                }`}
                aria-pressed={locale === code}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:shadow-emerald-500/20 sm:inline-flex lg:px-5"
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
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
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
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200/85 bg-[#fdfdfc] px-4 py-5 shadow-inner shadow-emerald-900/[0.03] backdrop-blur-xl dark:border-white/[0.06] dark:bg-zinc-950/95 dark:shadow-none lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navOrder.map((key) => {
              const item = t.nav.items[key];
              return (
                <li key={key}>
                  <a
                    href={hrefByKey[key]}
                    className="block rounded-xl px-3 py-2.5 transition hover:bg-emerald-50/80 dark:hover:bg-white/5"
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
                className="block rounded-full bg-emerald-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-emerald-900/20 dark:bg-emerald-500 dark:text-zinc-950"
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
