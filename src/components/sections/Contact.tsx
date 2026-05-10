"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Contacto</h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Vamos dar o próximo passo
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              Este formulário está preparado no front-end para validares UX e estado. Mais tarde liga a
              e-mail ou API quando quiseres receber mensagens mesmo.
            </p>
            <div className="mt-10 space-y-3 text-zinc-500">
              <p className="text-sm uppercase tracking-wider text-zinc-600">Tempo de resposta</p>
              <p className="font-medium text-zinc-300">Habitualmente em até 48 horas úteis</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-zinc-400">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-white/[0.1] bg-zinc-950/80 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="O teu nome ou empresa"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-white/[0.1] bg-zinc-950/80 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="teuemail@email.com"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-zinc-400">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-white/[0.1] bg-zinc-950/80 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Conta um pouco do objetivo ou do que precisas…"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full rounded-full bg-emerald-500 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 disabled:pointer-events-none disabled:opacity-60"
              >
                {sent ? "Mensagem registada" : "Enviar mensagem"}
              </button>
              {sent ? (
                <p className="text-center text-sm text-emerald-400/90" role="status">
                  Obrigado — modelo pronto para ligar ao teu backend ou serviço de e-mail.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
