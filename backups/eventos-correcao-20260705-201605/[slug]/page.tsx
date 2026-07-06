import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GalleryAccess from "../GalleryAccess";
import { categorias, encontrarCategoria } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return categorias.map((categoria) => ({
    slug: categoria.slug
  }));
}

type PaginaEventoProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params
}: PaginaEventoProps): Promise<Metadata> {
  const { slug } = await params;
  const categoria = encontrarCategoria(slug);

  if (!categoria) {
    return {
      title: "Evento | LUDO Eventos"
    };
  }

  return {
    title: `${categoria.titulo} | LUDO Eventos`,
    description: categoria.descricao
  };
}

export default async function PaginaEvento({
  params
}: PaginaEventoProps) {
  const { slug } = await params;
  const categoria = encontrarCategoria(slug);

  if (!categoria) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#05050a] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(5,5,10,.97) 0%, rgba(5,5,10,.83) 42%, rgba(5,5,10,.18) 100%),
              linear-gradient(0deg, #05050a 0%, transparent 60%),
              url("${categoria.imagem}")
            `
          }}
        />

        <div
          className="absolute left-[-160px] top-24 h-[440px] w-[440px] rounded-full blur-[130px]"
          style={{ backgroundColor: `${categoria.cor}30` }}
        />

        <div
          className="absolute bottom-[-150px] right-[-100px] h-[480px] w-[480px] rounded-full blur-[140px]"
          style={{ backgroundColor: `${categoria.corSecundaria}25` }}
        />

        <nav className="relative z-30 mx-auto flex w-[92%] max-w-7xl items-center justify-between py-7">
          <Link
            href="/eventos/"
            className="flex items-center gap-3"
          >
            <span
              className="grid h-11 w-11 place-items-center rounded-2xl font-black text-black"
              style={{
                background: `linear-gradient(135deg, ${categoria.corSecundaria}, ${categoria.cor})`
              }}
            >
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

          <Link
            href="/eventos/"
            className="rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm font-bold backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            ← Voltar ao portal
          </Link>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] w-[92%] max-w-7xl items-center py-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span
                className="h-px w-12"
                style={{ backgroundColor: categoria.corSecundaria }}
              />

              <p
                className="text-xs font-black uppercase tracking-[0.28em] md:text-sm"
                style={{ color: categoria.corSecundaria }}
              >
                {categoria.etiqueta}
              </p>
            </div>

            <h1 className="mt-8 text-[clamp(4.5rem,12vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              {categoria.tituloCurto}
            </h1>

            <p className="mt-8 max-w-3xl text-2xl font-bold leading-tight md:text-4xl">
              {categoria.destaque}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
              {categoria.descricao}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experiencia"
                className="rounded-full px-8 py-4 font-black text-black transition hover:scale-105"
                style={{
                  background: `linear-gradient(120deg, ${categoria.corSecundaria}, ${categoria.cor})`
                }}
              >
                Ver experiência
              </a>

              <a
                href="#acesso"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-black backdrop-blur-xl transition hover:bg-white hover:text-black"
              >
                Acessar galeria
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className="mx-auto w-[92%] max-w-7xl py-28"
      >
        <div className="max-w-4xl">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: categoria.corSecundaria }}
          >
            Narrativa visual
          </p>

          <h2 className="mt-6 text-[clamp(3rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.065em]">
            Uma história contada
            <span className="block text-white/30">
              em pequenos instantes.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {categoria.galeria.map((imagem, index) => (
            <article
              key={imagem}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 ${
                index === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <img
                src={imagem}
                alt={`${categoria.titulo} - imagem ${index + 1}`}
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="text-xs font-black tracking-[0.24em]"
                  style={{ color: categoria.corSecundaria }}
                >
                  0{index + 1}
                </span>

                <p className="mt-2 text-xl font-bold">
                  {["Presença", "Detalhes", "Movimento"][index]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: categoria.corSecundaria }}
            >
              Filme do evento
            </p>

            <h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.06em]">
              Som, luz e
              <span className="block text-white/30">movimento.</span>
            </h2>

            <p className="mt-7 max-w-lg leading-relaxed text-white/50">
              Esta área está preparada para receber um teaser,
              vídeo de apresentação ou filme completo do evento.
            </p>
          </div>

          <div className="group relative aspect-video overflow-hidden rounded-[36px] border border-white/10 bg-black">
            <img
              src={categoria.imagem}
              alt={`Vídeo de ${categoria.titulo}`}
              className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

            <div className="absolute inset-0 grid place-items-center">
              <span
                className="grid h-24 w-24 place-items-center rounded-full border border-white/25 text-3xl text-black backdrop-blur-xl transition group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${categoria.corSecundaria}, ${categoria.cor})`
                }}
              >
                ▶
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-24">
        <div className="mb-14 max-w-4xl">
          <p
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: categoria.corSecundaria }}
          >
            Cobertura completa
          </p>

          <h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.06em]">
            O evento contado
            <span className="block text-white/30">em camadas.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categoria.servicos.map((servico, index) => (
            <article
              key={servico.titulo}
              className="min-h-[320px] rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8"
            >
              <span
                className="text-xs font-black tracking-[0.25em]"
                style={{ color: categoria.corSecundaria }}
              >
                0{index + 1}
              </span>

              <h3 className="mt-24 text-3xl font-black">
                {servico.titulo}
              </h3>

              <p className="mt-4 leading-relaxed text-white/45">
                {servico.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="acesso"
        className="mx-auto w-[92%] max-w-7xl py-24"
      >
        <div
          className="overflow-hidden rounded-[42px] border border-white/10 p-7 md:p-14"
          style={{
            background: `linear-gradient(135deg, ${categoria.cor}28, #11111a 48%, ${categoria.corSecundaria}18)`
          }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: categoria.corSecundaria }}
              >
                Área do cliente
              </p>

              <h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.87] tracking-[-0.06em]">
                Acesse sua
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${categoria.corSecundaria}, ${categoria.cor})`
                  }}
                >
                  galeria.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
                Use o código fornecido pela equipe para abrir o
                acesso privado às fotografias do evento.
              </p>
            </div>

            <GalleryAccess
              cor={categoria.cor}
              corSecundaria={categoria.corSecundaria}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-5 text-sm text-white/35 md:flex-row">
          <Link href="/eventos/">
            ← Voltar para LUDO Eventos
          </Link>
          <p>© 2026 LUDO Digital MKT.</p>
        </div>
      </footer>
    </main>
  );
}
