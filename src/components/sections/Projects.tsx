const placeholders = [
  {
    title: "Plataforma SaaS",
    tag: "Em breve",
    desc: "Casos demonstrando arquitetura, UI e métricas de negócio.",
  },
  {
    title: "App & brand digital",
    tag: "Galeria",
    desc: "Site institucional, identidade consistente no produto.",
  },
  {
    title: "Automações internas",
    tag: "Backoffice",
    desc: "Integrações que reduzem erros humanos nos fluxos diários.",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Projetos</h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Destaques a mostrar ao mundo
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              Secção preparada para portfolios reais — por agora são placeholders elegantes até
              adicionares os teus trabalhos.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {placeholders.map((p) => (
            <li
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.02] transition hover:border-emerald-500/30 hover:bg-white/[0.03]"
            >
              <div className="aspect-[16/10] bg-linear-to-br from-emerald-500/10 via-zinc-900/90 to-zinc-950 ring-1 ring-inset ring-white/[0.04]" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                    {p.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">{p.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
