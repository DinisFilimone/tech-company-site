"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useId, useState } from "react";
import { useSiteLanguage } from "@/contexts/LanguageContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-xl border border-zinc-200/95 bg-blue-50/[0.35] px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500/70 focus:bg-white focus:ring-4 focus:ring-blue-500/12 dark:border-white/20 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-400 focus-visible:outline-none dark:focus:border-blue-400/65 dark:focus:bg-zinc-900 dark:focus:text-zinc-50 dark:focus:ring-blue-400/18";

export default function HeroRequestModal({ open, onClose }: Props) {
  const { t } = useSiteLanguage();
  const m = t.hero.requestModal;
  const titleId = useId();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      queueMicrotask(() => setSent(false));
    }
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 pb-10 sm:items-center sm:pb-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label={m.close}
        className="absolute inset-0 bg-zinc-950/55 backdrop-blur-[2px] dark:bg-black/70"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(92vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-[#fdfdfc] shadow-2xl shadow-zinc-900/25 dark:border-white/[0.1] dark:bg-zinc-900 dark:shadow-black/60"
      >
        <header className="flex items-start justify-between gap-4 border-b border-zinc-200/85 px-5 py-4 dark:border-white/[0.08]">
          <div>
            <h2 id={titleId} className="text-lg font-semibold text-zinc-900 dark:text-white">
              {m.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{m.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
            aria-label={m.close}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-5">
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {m.name}
                  <input name="name" type="text" required autoComplete="name" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {m.email}
                  <input name="email" type="email" required autoComplete="email" className={fieldClass} />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {m.phone}
                  <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {m.company}
                  <input name="company" type="text" autoComplete="organization" className={fieldClass} />
                </label>
              </div>
              <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {m.service}
                <select name="service" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    {m.servicePlaceholder}
                  </option>
                  {m.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {m.message}
                <textarea name="message" required rows={4} className={`${fieldClass} resize-y min-h-[6rem]`} />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <Link
                  href="#contacto"
                  onClick={onClose}
                  className="text-sm font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {m.linkToContact}
                </Link>
                <button
                  type="submit"
                  className="rounded-full bg-linear-to-r from-blue-600 to-sky-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/22 transition hover:brightness-105 dark:from-blue-500 dark:to-sky-600"
                >
                  {m.submit}
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-xl border border-blue-200/90 bg-blue-50/70 px-4 py-8 text-center dark:border-blue-500/25 dark:bg-blue-950/35">
              <p className="text-lg font-semibold text-blue-950 dark:text-blue-50">{m.submittedTitle}</p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-blue-950/85 dark:text-blue-100/85">
                {m.submittedBody}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950"
              >
                {m.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
