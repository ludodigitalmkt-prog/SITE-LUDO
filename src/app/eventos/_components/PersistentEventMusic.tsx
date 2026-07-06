"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const musicas = [
  {
    caminho: "/eventos/cha-de-bebe",
    titulo: "Trilha Chá de bebê",
    arquivo: "/eventos/musicas/cha-de-bebe.mp3",
  },
  {
    caminho: "/eventos/infantil",
    titulo: "Trilha Festa infantil",
    arquivo: "/eventos/musicas/infantil.mp3",
  },
  {
    caminho: "/eventos/casamento",
    titulo: "Trilha Casamento",
    arquivo: "/eventos/musicas/casamento.mp3",
  },
  {
    caminho: "/eventos/formaturas",
    titulo: "Trilha Formaturas",
    arquivo: "/eventos/musicas/formaturas.mp3",
  },
  {
    caminho: "/eventos/palestras",
    titulo: "Trilha Palestras",
    arquivo: "/eventos/musicas/palestras.mp3",
  },
  {
    caminho: "/eventos/festas",
    titulo: "Trilha Festas",
    arquivo: "/eventos/musicas/festas.mp3",
  },
];

export default function PersistentEventMusic() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [tocando, setTocando] = useState(false);
  const [erro, setErro] = useState("");
  const [volume, setVolume] = useState(0.22);

  const musicaAtual = useMemo(() => {
    return musicas.find((musica) =>
      pathname.startsWith(musica.caminho)
    );
  }, [pathname]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !musicaAtual) return;

    const estadoSalvo = sessionStorage.getItem(
      `musica-evento-${musicaAtual.caminho}`
    );

    if (estadoSalvo) {
      try {
        const estado = JSON.parse(estadoSalvo);

        if (
          typeof estado.tempo === "number" &&
          Number.isFinite(estado.tempo)
        ) {
          audio.currentTime = estado.tempo;
        }

        if (typeof estado.volume === "number") {
          setVolume(estado.volume);
          audio.volume = estado.volume;
        }
      } catch {
        sessionStorage.removeItem(
          `musica-evento-${musicaAtual.caminho}`
        );
      }
    }
  }, [musicaAtual]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !musicaAtual) return;

    const salvarEstado = () => {
      sessionStorage.setItem(
        `musica-evento-${musicaAtual.caminho}`,
        JSON.stringify({
          tempo: audio.currentTime,
          volume: audio.volume,
          tocando: !audio.paused,
        })
      );
    };

    const intervalo = window.setInterval(salvarEstado, 1500);

    window.addEventListener("beforeunload", salvarEstado);

    return () => {
      window.clearInterval(intervalo);
      window.removeEventListener("beforeunload", salvarEstado);
      salvarEstado();
    };
  }, [musicaAtual]);

  const alternarMusica = async () => {
    const audio = audioRef.current;

    if (!audio || !musicaAtual) return;

    setErro("");

    try {
      if (audio.paused) {
        audio.volume = volume;
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setErro("Clique novamente para ativar a música.");
    }
  };

  const alterarVolume = (
    evento: React.ChangeEvent<HTMLInputElement>
  ) => {
    const novoVolume = Number(evento.target.value);
    const audio = audioRef.current;

    setVolume(novoVolume);

    if (audio) {
      audio.volume = novoVolume;
    }
  };

  if (!musicaAtual) {
    return null;
  }

  return (
    <div className={`event-music-player ${tocando ? "is-playing" : ""}`}>
      <audio
        ref={audioRef}
        key={musicaAtual.arquivo}
        src={musicaAtual.arquivo}
        preload="metadata"
        loop
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        onError={() =>
          setErro("Não foi possível carregar esta trilha.")
        }
      />

      <div className="event-music-main">
        <button
          type="button"
          className="event-music-button"
          onClick={alternarMusica}
          aria-label={tocando ? "Pausar música" : "Ativar música"}
        >
          <span className="event-music-icon">
            {tocando ? "❚❚" : "♫"}
          </span>

          <span className="event-music-text">
            <small>
              {tocando ? "TOCANDO AGORA" : "TRILHA DA EXPERIÊNCIA"}
            </small>

            <strong>
              {tocando ? "Pausar música" : "Ativar música"}
            </strong>
          </span>

          <span className="event-music-pulse" />
        </button>

        <div className="event-music-volume">
          <span>−</span>

          <input
            type="range"
            min="0"
            max="0.6"
            step="0.01"
            value={volume}
            onChange={alterarVolume}
            aria-label="Volume da música"
          />

          <span>+</span>
        </div>
      </div>

      {erro && <p className="event-music-error">{erro}</p>}

      <span className="event-music-title">
        {musicaAtual.titulo}
      </span>
    </div>
  );
}
