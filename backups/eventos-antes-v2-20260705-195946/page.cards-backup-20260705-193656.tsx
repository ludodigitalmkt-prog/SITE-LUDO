import Link from "next/link";
import GalleryAccess from "./GalleryAccess";
import { categorias } from "./data";

export const metadata = {
  title: "LUDO Eventos | Fotografia, vídeo e experiências",
  description:
    "Fotografia, vídeo e experiências digitais para eventos."
};

export default function EventosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05050a] text-white">
      <section className="relative min-h-[94vh] overflow-hidden">
        <img
          src="/eventos/imagens/portal-hero.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#05050a] via-[#05050a]/90 to-[#05050a]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-black/60" />

        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[110px]" />
        <div className="absolute bottom-[-140px] right-[-100px] h-[460px] w-[460px] rounded-full bg-cyan-400/15 blur-[130px]" />

        <nav className="relative z-30 mx-auto flex w-[92%] max-w-7xl items-center justify-between py-7">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 font-black text-black">
              L
            </span>

            <div>
              <strong className="block text-sm tracking-[0.2em]">
                LUDO
              </strong>
              <span className="text-[10px] tracking-[0.24em] text-white/45">
                EVENTOS
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold text-white/65 md:flex">
            <a href="#experiencias" className="transition hover:text-white">
              Experiências
            </a>
            <a href="#filme" className="transition hover:text-white">
              Filme
            </a>
            <a href="#galeria" className="transition hover:text-white">
              Acessar galeria
            </a>
          </div>

          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            Voltar à LUDO
          </Link>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(94vh-100px)] w-[92%] max-w-7xl items-center py-20">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-cyan-300" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300 md:text-sm">
                Fotografia • Vídeo • Experiências
              </p>
            </div>

            <h1 className="max-w-5xl text-[clamp(4.5rem,13vw,11rem)] font-black uppercase leading-[0.75] tracking-[-0.075em]">
              Viva.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Reviva.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-lg leading-relaxed text-white/65 md:text-2xl">
              Eventos que ganham movimento, som, luz e uma entrega
              digital à altura de cada memória.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experiencias"
                className="rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 px-8 py-4 font-black text-black shadow-[0_0_55px_rgba(89,180,255,0.25)] transition hover:scale-105"
              >
                Explorar experiências
              </a>

              <a
                href="#galeria"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-black backdrop-blur-xl transition hover:bg-white hover:text-black"
              >
                Acessar meu evento
              </a>
            </div>

            <div className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["Foto + vídeo", "Cobertura integrada"],
                ["Portal exclusivo", "Uma entrega personalizada"],
                ["Galeria privada", "Acesso externo protegido"]
              ].map(([titulo, texto]) => (
                <div
                  key={titulo}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                >
                  <strong className="block text-lg">{titulo}</strong>
                  <span className="mt-1 block text-sm text-white/40">
                    {texto}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-y border-white/10 bg-black/30 py-4 backdrop-blur-xl">
          <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between gap-7 overflow-hidden whitespace-nowrap text-xs font-black uppercase tracking-[0.25em] text-white/45">
            <span>Casamentos</span>
            <span className="text-cyan-300">✦</span>
            <span>Infantil</span>
            <span className="text-purple-400">✦</span>
            <span>Formaturas</span>
            <span className="text-cyan-300">✦</span>
            <span>Palestras</span>
            <span className="text-purple-400">✦</span>
            <span>Festas</span>
          </div>
        </div>
      </section>

      <section
        id="experiencias"
        className="relative mx-auto w-[92%] max-w-7xl py-28"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            Portais por experiência
          </p>

          <h2 className="mt-6 text-[clamp(3rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.065em]">
            Cada evento com uma
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              personalidade própria.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/50">
            Cada página possui identidade, atmosfera, ritmo e composição
            visual pensados para o tipo de celebração.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categorias.map((categoria) => (
            <Link
              key={categoria.slug}
              href={`/eventos/${categoria.slug}/`}
              className="group relative min-h-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-[#101018]"
            >
              <img
                src={categoria.imagem}
                alt={categoria.titulo}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

              <div
                className="absolute inset-0 opacity-30 transition duration-500 group-hover:opacity-50"
                style={{
                  background: `linear-gradient(145deg, ${categoria.cor}55, transparent 55%, ${categoria.corSecundaria}25)`
                }}
              />

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className="text-xs font-black tracking-[0.24em] text-white/55">
                  {categoria.numero} / EXPERIÊNCIA
                </span>

                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/25 text-xl backdrop-blur-xl transition group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                  ↗
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p
                  className="text-xs font-black uppercase tracking-[0.23em]"
                  style={{ color: categoria.corSecundaria }}
                >
                  {categoria.etiqueta}
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-5xl">
                  {categoria.tituloCurto}
                </h3>

                <p className="mt-4 max-w-sm leading-relaxed text-white/60">
                  {categoria.descricao}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="filme"
        className="mx-auto w-[92%] max-w-7xl py-20"
      >
        <div className="mb-12 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-400">
            Experiência widescreen
          </p>

          <h2 className="mt-6 text-[clamp(3rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.06em]">
            Um filme para entrar
            <span className="block text-white/35">na atmosfera.</span>
          </h2>
        </div>

        <div className="group relative aspect-video overflow-hidden rounded-[40px] border border-white/10 bg-black shadow-2xl">
          <img
            src="/eventos/imagens/momento-03.svg"
            alt="Prévia do vídeo LUDO Eventos"
            className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-24 w-24 place-items-center rounded-full border border-white/25 bg-black/25 text-3xl backdrop-blur-2xl transition group-hover:scale-110 group-hover:bg-white group-hover:text-black">
              ▶
            </div>
          </div>

          <div className="absolute bottom-7 left-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              Showreel LUDO Eventos
            </p>
            <p className="mt-2 text-sm text-white/45">
              Área preparada para receber seu vídeo principal.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              numero: "01",
              titulo: "Fotografia",
              texto:
                "Momentos espontâneos, convidados, detalhes e tudo que merece permanecer."
            },
            {
              numero: "02",
              titulo: "Vídeo",
              texto:
                "Teasers, bastidores, conteúdos verticais e filmes com linguagem cinematográfica."
            },
            {
              numero: "03",
              titulo: "Portal digital",
              texto:
                "Uma página exclusiva para apresentar e acessar as memórias do evento."
            }
          ].map((item) => (
            <article
              key={item.numero}
              className="min-h-[310px] rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8"
            >
              <span className="text-xs font-black tracking-[0.25em] text-cyan-300">
                {item.numero}
              </span>

              <h3 className="mt-24 text-3xl font-black">
                {item.titulo}
              </h3>

              <p className="mt-4 leading-relaxed text-white/45">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="galeria"
        className="mx-auto w-[92%] max-w-7xl py-24"
      >
        <div className="overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-purple-600/25 via-[#11111a] to-cyan-400/10 p-7 md:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                Área do cliente
              </p>

              <h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.87] tracking-[-0.06em]">
                Encontre suas
                <span className="block bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent">
                  memórias.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
                Digite o código entregue pela equipe LUDO para ser
                encaminhado à galeria privada do seu evento.
              </p>
            </div>

            <GalleryAccess />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-5 text-sm text-white/35 md:flex-row">
          <p>© 2026 LUDO Digital MKT.</p>
          <p>Fotografia • Vídeo • Experiências digitais</p>
        </div>
      </footer>
    </main>
  );
}
