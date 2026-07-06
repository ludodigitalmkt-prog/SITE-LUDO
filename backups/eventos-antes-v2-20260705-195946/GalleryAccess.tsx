"use client";

import { FormEvent, useState } from "react";

const linksDasGalerias: Record<string, string> = {
  // Exemplo:
  // "ANTONELA2026": "https://link-da-galeria-protegida.com"
};

type GalleryAccessProps = {
  cor?: string;
  corSecundaria?: string;
};

export default function GalleryAccess({
  cor = "#51e7ff",
  corSecundaria = "#9b5cff"
}: GalleryAccessProps) {
  const [codigo, setCodigo] = useState("");
  const [mensagem, setMensagem] = useState("");

  function acessarGaleria(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const codigoNormalizado = codigo.trim().toUpperCase();

    if (!codigoNormalizado) {
      setMensagem("Digite o código entregue pela equipe LUDO.");
      return;
    }

    const link = linksDasGalerias[codigoNormalizado];

    if (!link) {
      setMensagem(
        "Código ainda não cadastrado ou digitado incorretamente."
      );
      return;
    }

    setMensagem("Galeria encontrada. Abrindo acesso seguro...");

    window.setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 500);
  }

  return (
    <form
      onSubmit={acessarGaleria}
      className="rounded-[28px] border border-white/10 bg-black/35 p-5 shadow-2xl backdrop-blur-2xl md:p-7"
    >
      <label
        htmlFor="codigo-evento"
        className="text-xs font-black uppercase tracking-[0.22em] text-white/60"
      >
        Código do evento
      </label>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          id="codigo-evento"
          value={codigo}
          onChange={(evento) => setCodigo(evento.target.value)}
          placeholder="EX.: ANTONELA2026"
          autoComplete="off"
          className="min-h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold uppercase tracking-wider text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
        />

        <button
          type="submit"
          className="min-h-14 rounded-full px-8 font-black text-black transition hover:scale-[1.03]"
          style={{
            background: `linear-gradient(120deg, ${cor}, ${corSecundaria})`
          }}
        >
          Acessar
        </button>
      </div>

      <p className="mt-4 min-h-6 text-sm text-white/55">
        {mensagem}
      </p>

      <p className="text-xs leading-relaxed text-white/30">
        As fotos privadas devem permanecer em uma galeria externa protegida.
      </p>
    </form>
  );
}
