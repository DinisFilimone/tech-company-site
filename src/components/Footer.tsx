export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-white">
          Tech<span className="text-emerald-400">Nova</span>
        </p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-500">
          <a href="#servicos" className="transition hover:text-zinc-300">
            Serviços
          </a>
          <a href="#sobre" className="transition hover:text-zinc-300">
            Sobre
          </a>
          <a href="#contacto" className="transition hover:text-zinc-300">
            Contacto
          </a>
        </nav>
        <p className="text-sm text-zinc-600">&copy; {year} TechNova. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
