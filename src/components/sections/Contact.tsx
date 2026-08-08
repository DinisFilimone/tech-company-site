"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSiteLanguage } from "@/contexts/LanguageContext";

function IconPhone(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function IconMail(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconClock(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconCheck(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useSiteLanguage();
  const [sent, setSent] = useState(false);

  const telHref = useMemo(
    () => `tel:${t.contact.directPhone.replace(/\s/g, "")}`,
    [t.contact.directPhone],
  );
  const waHref = useMemo(() => {
    const digits = t.contact.directPhone.replace(/\D/g, "");
    return `https://wa.me/${digits}`;
  }, [t.contact.directPhone]);
  const mailHref = `mailto:${t.contact.directEmail}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-zinc-200/95 bg-blue-50/[0.35] px-4 py-3.5 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500/70 focus:bg-white focus:ring-4 focus:ring-blue-500/12 dark:border-white/20 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-400 focus-visible:outline-none dark:focus:border-blue-400/65 dark:focus:bg-zinc-900 dark:focus:text-zinc-50 dark:focus:ring-blue-400/18";

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200/85 bg-linear-to-b from-[#fafaf9] via-white to-blue-50/40 py-24 dark:border-white/[0.06] dark:from-transparent dark:via-transparent dark:to-transparent sm:py-28"
    >
      <div
        className="pointer-events-none absolute -right-1/4 top-1/4 h-[min(50vh,420px)] w-[min(70vw,520px)] rounded-full bg-sky-400/15 blur-[100px] dark:bg-sky-500/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/4 bottom-0 h-[min(45vh,380px)] w-[min(65vw,480px)] rounded-full bg-blue-400/12 blur-[90px] dark:bg-blue-500/8"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna esquerda */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
                <span className="h-px w-8 bg-linear-to-r from-blue-500 to-sky-500 dark:from-blue-400 dark:to-sky-400" aria-hidden />
                {t.contact.kicker}
              </span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-zinc-900 dark:text-white">
                {t.contact.title}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{t.contact.intro}</p>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 bg-white/90 p-6 shadow-[0_20px_48px_-28px_rgba(30,64,175,0.35)] ring-1 ring-zinc-950/[0.04] backdrop-blur-sm dark:border-white/[0.1] dark:bg-white/[0.03] dark:shadow-none dark:ring-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-800/90 dark:text-blue-400/90">
                {t.contact.directLead}
              </p>
              <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">{t.contact.directName}</p>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href={telHref}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-1 py-2 transition hover:border-blue-200/80 hover:bg-blue-50/80 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800 shadow-sm ring-1 ring-blue-900/[0.06] dark:bg-blue-500/15 dark:text-blue-300 dark:ring-blue-400/20">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                        Tel.
                      </span>
                      <span className="text-base font-semibold text-zinc-900 group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-300">
                        {t.contact.directPhone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={mailHref}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-1 py-2 transition hover:border-blue-200/80 hover:bg-blue-50/80 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-900 shadow-sm ring-1 ring-sky-900/[0.06] dark:bg-sky-500/15 dark:text-sky-200 dark:ring-sky-400/20">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 break-all">
                      <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                        Email
                      </span>
                      <span className="text-base font-semibold text-blue-700 underline decoration-blue-500/30 decoration-2 underline-offset-2 transition group-hover:decoration-blue-500/60 dark:text-blue-400 dark:group-hover:text-blue-300">
                        {t.contact.directEmail}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm transition hover:border-blue-300 hover:bg-blue-100/90 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:bg-blue-500/20"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t.contact.whatsappLabel}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 rounded-2xl border border-blue-100/90 bg-linear-to-br from-blue-50/80 to-sky-50/50 p-5 dark:border-blue-500/15 dark:from-blue-500/8 dark:to-transparent">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm ring-1 ring-blue-900/[0.06] dark:bg-zinc-900 dark:text-blue-400 dark:ring-white/10">
                <IconClock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-900/85 dark:text-blue-400/90">
                  {t.contact.responseLead}
                </p>
                <p className="mt-1 font-medium leading-snug text-zinc-800 dark:text-zinc-200">{t.contact.responseValue}</p>
              </div>
            </div>
          </div>

          {/* Formulário / sucesso */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 shadow-[0_28px_64px_-36px_rgba(59,130,246,0.55),inset_0_1px_0_0_rgba(255,255,255,0.9)] ring-1 ring-blue-900/[0.05] dark:border-white/[0.1] dark:bg-zinc-900/40 dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)] dark:ring-white/[0.06]">
              <div className="border-b border-zinc-200/80 bg-linear-to-r from-blue-50/90 via-white to-sky-50/40 px-6 py-5 sm:px-8 dark:border-white/[0.08] dark:from-blue-950/40 dark:via-zinc-900/80 dark:to-zinc-900/40">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{t.contact.formTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{t.contact.formHint}</p>
              </div>

              <div className="p-6 sm:p-8">
                {sent ? (
                  <div
                    className="rounded-2xl border border-blue-200/90 bg-blue-50/70 px-6 py-10 text-center dark:border-blue-500/25 dark:bg-blue-500/10"
                    role="status"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-sky-600 text-white shadow-lg shadow-blue-900/25 dark:shadow-black/40">
                      <IconCheck className="h-8 w-8" />
                    </div>
                    <p className="mt-5 text-lg font-semibold text-blue-950 dark:text-blue-100">{t.contact.submitted}</p>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-blue-900/90 dark:text-blue-200/90">
                      {t.contact.thanks}
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label htmlFor="nome" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                          {t.contact.name}
                        </label>
                        <input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          autoComplete="name"
                          className={`mt-2 ${field}`}
                          placeholder={t.contact.placeholders.name}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                          {t.contact.email}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={`mt-2 ${field}`}
                          placeholder={t.contact.placeholders.email}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                        {t.contact.message}
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        rows={5}
                        className={`mt-2 min-h-[140px] resize-y ${field}`}
                        placeholder={t.contact.placeholders.message}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-linear-to-r from-blue-600 to-sky-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/35 dark:from-blue-500 dark:to-sky-500 dark:text-zinc-950 dark:shadow-blue-500/20 dark:focus-visible:ring-blue-400/30"
                    >
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
