"use client";

import { useEffect, useState } from "react";

const banners = [
  "/eventos/antonela-2026/banners/banner-01.png",
  "/eventos/antonela-2026/banners/banner-02.png",
  "/eventos/antonela-2026/banners/banner-03.png",
  "/eventos/antonela-2026/banners/banner-04.png",
  "/eventos/antonela-2026/banners/banner-05.png",
  "/eventos/antonela-2026/banners/banner-06.png",
  "/eventos/antonela-2026/banners/banner-07.png",
  "/eventos/antonela-2026/banners/banner-08.png",
  "/eventos/antonela-2026/banners/banner-09.png",
  "/eventos/antonela-2026/banners/banner-10.png",
  "/eventos/antonela-2026/banners/banner-11.png",
  "/eventos/antonela-2026/banners/banner-12.png",
  "/eventos/antonela-2026/banners/banner-13.png",
  "/eventos/antonela-2026/banners/banner-14.png",
  "/eventos/antonela-2026/banners/banner-15.png",
  "/eventos/antonela-2026/banners/banner-16.png",
  "/eventos/antonela-2026/banners/banner-17.png",
  "/eventos/antonela-2026/banners/banner-18.png",
  "/eventos/antonela-2026/banners/banner-19.png",
  "/eventos/antonela-2026/banners/banner-20.png",
  "/eventos/antonela-2026/banners/banner-21.png",
  "/eventos/antonela-2026/banners/banner-22.png",
  "/eventos/antonela-2026/banners/banner-23.png",
  "/eventos/antonela-2026/banners/banner-24.png"
];

export default function BannerAntonela() {
  const [bannerAtual, setBannerAtual] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const intervalo = window.setInterval(() => {
      setBannerAtual((anterior) => (anterior + 1) % banners.length);
    }, 6000);

    return () => window.clearInterval(intervalo);
  }, []);

  const anterior = () => {
    setBannerAtual((atual) =>
      atual === 0 ? banners.length - 1 : atual - 1
    );
  };

  const proximo = () => {
    setBannerAtual((atual) => (atual + 1) % banners.length);
  };

  if (!banners.length) return null;

  return (
    <section
      className="antonelaHero"
      aria-label="Destaques do chá da Antonela"
    >
      <div className="antonelaHero__imagens">
        {banners.map((imagem, indice) => (
          <div
            key={imagem}
            className={`antonelaHero__slide ${
              indice === bannerAtual ? "is-active" : ""
            }`}
            aria-hidden={indice !== bannerAtual}
          >
            <img
              src={imagem}
              alt={`Banner do chá da Antonela ${indice + 1}`}
              className="antonelaHero__imagem"
              loading={indice === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="antonelaHero__sombra" />

      {banners.length > 1 && (
        <>
          <button
            type="button"
            className="antonelaHero__seta antonelaHero__seta--esquerda"
            onClick={anterior}
            aria-label="Mostrar banner anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="antonelaHero__seta antonelaHero__seta--direita"
            onClick={proximo}
            aria-label="Mostrar próximo banner"
          >
            ›
          </button>

          <div className="antonelaHero__indicadores">
            {banners.map((_, indice) => (
              <button
                type="button"
                key={indice}
                className={`antonelaHero__indicador ${
                  indice === bannerAtual ? "is-active" : ""
                }`}
                onClick={() => setBannerAtual(indice)}
                aria-label={`Mostrar banner ${indice + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
