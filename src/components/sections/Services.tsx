const items = [
  {
    title: "Websites",
    desc: "Sites rápidos, responsivos e preparados para SEO e conversão.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Apps",
    desc: "Interfaces fluidas para web e mobile-ready, com código sustentável.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "UI / UX",
    desc: "Hierarquia visual, ritmo e detalhes que transmitem confiança.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3A1.5 1.5 0 0 0 1.5 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Automação",
    desc: "Menos trabalho repetitivo, mais consistência nos teus fluxos.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5 10.5 6.75l4.5 4.5L20.25 4.5M3.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Serviços</h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            O que construímos contigo
          </p>
          <p className="mt-4 text-lg text-zinc-400">
            Da presença online a produtos que precisam de escala — com o mesmo padrão de detalhe.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 transition hover:border-emerald-500/25 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl transition group-hover:bg-emerald-500/10" />
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 transition group-hover:ring-emerald-400/35">
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
