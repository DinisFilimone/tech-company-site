"use client";

import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Tech<span className="text-emerald-400">Nova</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors hover:text-emerald-400 focus-visible:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded px-1"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 md:inline-flex"
        >
          Fale connosco
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-zinc-300 hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
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
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/[0.06] bg-zinc-950/95 px-4 py-5 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                className="block rounded-full bg-emerald-500 py-3 text-center text-sm font-semibold text-zinc-950"
                onClick={() => setOpen(false)}
              >
                Fale connosco
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
