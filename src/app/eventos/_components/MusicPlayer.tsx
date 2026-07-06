"use client";

import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  src: string;
  title: string;
};

export default function MusicPlayer({
  src,
  title,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.22;

    return () => {
      audio.pause();
    };
  }, [src]);

  const alternarMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    setErro("");

    try {
      if (audio.paused) {
        audio.volume = 0.22;
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setErro("Toque novamente para ativar a música.");
    }
  };

  return (
    <div className={`event-music-player ${tocando ? "is-playing" : ""}`}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        loop
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        onError={() =>
          setErro("Não foi possível carregar esta trilha.")
        }
      />

      <button
        type="button"
        className="event-music-button"
        onClick={alternarMusica}
        aria-label={tocando ? "Pausar trilha" : "Ativar trilha"}
      >
        <span className="event-music-icon">
          {tocando ? "❚❚" : "♫"}
        </span>

        <span className="event-music-text">
          <small>{tocando ? "TOCANDO AGORA" : "TRILHA DO EVENTO"}</small>
          <strong>{tocando ? "Pausar música" : "Ativar música"}</strong>
        </span>

        <span className="event-music-pulse" />
      </button>

      {erro && <p className="event-music-error">{erro}</p>}

      <span className="event-music-title">{title}</span>
    </div>
  );
}
