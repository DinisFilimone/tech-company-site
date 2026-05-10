const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node", "REST & APIs"];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">Sobre</h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engenharia informática aplicada ao negócio
            </p>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                A TechNova trata tecnologia como meio para resultados claros:
                marca séria na internet, sistemas estáveis e experiências que as
                pessoas querem usar.
              </p>
              <p>
                <strong className="font-medium text-zinc-200">Visão:</strong> ser
                referência em software e interfaces que parecem desenhadas nos
                melhores estúdios — com código que aguenta crescimento.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-linear-to-br from-white/[0.04] to-transparent p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Tecnologias típicas
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {tech.map((t) => (
                <li key={t}>
                  <span className="inline-flex rounded-full border border-white/[0.1] bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-300">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/[0.06] pt-8 text-sm leading-relaxed text-zinc-500">
              O stack pode adaptar-se ao projeto — o que não muda é o nível de
              acabamento: responsivo, acessível e pensado para manutenção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
