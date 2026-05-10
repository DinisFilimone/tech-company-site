"use client";

import { FormEvent, useState } from "react";
import { useSiteLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useSiteLanguage();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-zinc-200/85 bg-linear-to-b from-[#fafaf9] via-white to-emerald-50/35 py-24 dark:border-white/[0.06] dark:from-transparent dark:via-transparent dark:to-transparent sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">{t.contact.kicker}</h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{t.contact.title}</p>
            <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">{t.contact.intro}</p>
            <div className="mt-10 space-y-3 text-zinc-600 dark:text-zinc-500">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-800/80 dark:text-zinc-600">{t.contact.directLead}</p>
              <p className="font-medium text-zinc-800 dark:text-zinc-300">{t.contact.directName}</p>
              <p>
                <a
                  href={`tel:${t.contact.directPhone.replace(/\s/g, "")}`}
                  className="font-medium text-emerald-700 underline decoration-emerald-500/35 underline-offset-2 transition hover:text-emerald-600 hover:decoration-emerald-500/60 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  {t.contact.directPhone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${t.contact.directEmail}`}
                  className="font-medium text-emerald-700 underline decoration-emerald-500/35 underline-offset-2 transition hover:text-emerald-600 hover:decoration-emerald-500/60 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  {t.contact.directEmail}
                </a>
              </p>
            </div>
            <div className="mt-10 space-y-3 border-t border-zinc-200/80 pt-10 text-zinc-600 dark:border-white/[0.08] dark:text-zinc-500">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-800/80 dark:text-zinc-600">{t.contact.responseLead}</p>
              <p className="font-medium text-zinc-800 dark:text-zinc-300">{t.contact.responseValue}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/90 bg-white/98 p-6 shadow-[0_26px_60px_-40px_rgba(16,185,129,0.45),0_0_1px_rgba(15,23,42,0.06)_inset] ring-1 ring-emerald-900/[0.04] backdrop-blur-sm sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none dark:ring-white/[0.05] dark:backdrop-blur-none">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-400">
                  {t.contact.name}
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-zinc-200/95 bg-emerald-50/20 px-4 py-3 text-zinc-900 outline-none backdrop-blur-[1px] transition placeholder:text-zinc-400 focus:border-emerald-500/65 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-white/[0.1] dark:bg-zinc-950/80 dark:text-zinc-100 dark:backdrop-blur-none dark:placeholder:text-zinc-600 dark:focus:bg-zinc-950/80 dark:focus:border-emerald-500/50 dark:focus:ring-emerald-500/20"
                  placeholder={t.contact.placeholders.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-400">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-zinc-200/95 bg-emerald-50/20 px-4 py-3 text-zinc-900 outline-none backdrop-blur-[1px] transition placeholder:text-zinc-400 focus:border-emerald-500/65 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-white/[0.1] dark:bg-zinc-950/80 dark:text-zinc-100 dark:backdrop-blur-none dark:placeholder:text-zinc-600 dark:focus:bg-zinc-950/80 dark:focus:border-emerald-500/50 dark:focus:ring-emerald-500/20"
                  placeholder={t.contact.placeholders.email}
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-400">
                  {t.contact.message}
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-zinc-200/95 bg-emerald-50/20 px-4 py-3 text-zinc-900 outline-none backdrop-blur-[1px] transition placeholder:text-zinc-400 focus:border-emerald-500/65 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 dark:border-white/[0.1] dark:bg-zinc-950/80 dark:text-zinc-100 dark:backdrop-blur-none dark:placeholder:text-zinc-600 dark:focus:bg-zinc-950/80 dark:focus:border-emerald-500/50 dark:focus:ring-emerald-500/20"
                  placeholder={t.contact.placeholders.message}
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full rounded-full bg-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/[0.22] transition hover:bg-emerald-500 disabled:pointer-events-none disabled:opacity-60 dark:bg-emerald-500 dark:text-zinc-950 dark:shadow-emerald-500/25 dark:hover:bg-emerald-400"
              >
                {sent ? t.contact.submitted : t.contact.submit}
              </button>
              {sent ? (
                <p className="text-center text-sm font-medium text-teal-800 dark:text-emerald-400/90" role="status">
                  {t.contact.thanks}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
