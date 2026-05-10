export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(80vh,640px)] w-[min(90vw,720px)] rounded-full bg-emerald-500/15 blur-[120px] animate-float-soft"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(70vh,560px)] w-[min(85vw,640px)] rounded-full bg-cyan-500/10 blur-[100px] animate-float-soft"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          className="animate-fade-rise mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-emerald-400/90 sm:text-[0.8125rem]"
          style={{ animationDelay: "0.05s" }}
        >
          Soluções digitais e engenharia de software
        </p>

        <h1
          className="animate-fade-rise max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.08]"
          style={{ animationDelay: "0.12s" }}
        >
          Produtos tecnológicos com aparência e performance de{" "}
          <span className="bg-linear-to-r from-emerald-300 via-cyan-300 to-emerald-200 bg-clip-text text-transparent">
            nível mundial.
          </span>
        </h1>

        <p
          className="animate-fade-rise mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Websites, apps e automação pensados para causar uma primeira impressão
          forte — mesmo quem não percebe de código reconhece qualidade quando
          vê.
        </p>

        <div
          className="animate-fade-rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.28s" }}
        >
          <a
            href="#contacto"
            className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-xl shadow-black/40 transition hover:bg-zinc-100"
          >
            Começar um projeto
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-white/25 hover:bg-white/[0.04]"
          >
            Ver serviços
            <span aria-hidden className="text-emerald-400">
              →
            </span>
          </a>
        </div>

        <dl
          className="animate-fade-rise mt-20 grid gap-8 border-t border-white/[0.06] pt-16 sm:grid-cols-3"
          style={{ animationDelay: "0.38s" }}
        >
          {[
            { k: "Foco", v: "UX e performance" },
            { k: "Stack", v: "Next.js, React & modern web" },
            { k: "Entrega", v: "Arquitetura escalável" },
          ].map((row) => (
            <div key={row.k}>
              <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {row.k}
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-200">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="pointer-events-none absolute bottom-12 left-1/2 hidden h-14 w-[1px] -translate-x-1/2 bg-linear-to-b from-transparent via-emerald-500/50 to-transparent sm:block"
        aria-hidden
      />
    </section>
  );
}
