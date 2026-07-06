import type { CSSProperties } from "react";
import Link from "next/link";
import { eventos } from "./data";

export const metadata = {
  title: "LUDO Eventos",
  description:
    "Fotografia, vídeo e experiências digitais para eventos.",
};

const heroBanners = [
  "/eventos/imagens/portal-hero.svg",
  "/eventos/imagens/momento-01.svg",
  "/eventos/imagens/momento-02.svg",
  "/eventos/imagens/momento-03.svg",
  "/eventos/imagens/momento-04.svg",
  "/eventos/imagens/momento-05.svg",
];

export default function EventosPage() {
  return (
    <main className="ludo-event-page ludo-portal ludo-portal-v3">
      <section className="ludo-portal-hero ludo-portal-hero-v3">
        <div className="ludo-hero-slides" aria-hidden="true">
          {heroBanners.map((banner, index) => (
            <img
              key={banner}
              src={banner}
              alt=""
              className="ludo-hero-slide"
              style={
                {
                  "--slide-delay": `${index * 6}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="ludo-hero-overlay" />
        <div className="ludo-grid" />
        <div className="ludo-stars ludo-stars-one" aria-hidden="true" />
        <div className="ludo-stars ludo-stars-two" aria-hidden="true" />

        <div className="ludo-container">
          <nav className="ludo-event-nav">
            <Link href="/" className="ludo-event-logo ludo-logo-special">
              <span className="ludo-favicon-wrap">
                <img src="/icon.png" alt="Logo LUDO" />
              </span>

              <div>
                <strong>LUDO</strong>
                <small>EVENTOS</small>
              </div>
            </Link>

            <Link href="/" className="ludo-nav-button">
              Voltar à LUDO
            </Link>
          </nav>

          <div className="ludo-portal-content ludo-portal-content-v3">
            <p className="ludo-eyebrow">
              FOTOGRAFIA • VÍDEO • EXPERIÊNCIAS
            </p>

            <h1 className="ludo-event-display">
              <span className="ludo-hero-word ludo-viva">Viva.</span>
              <span className="ludo-hero-word ludo-reviva">Reviva.</span>
            </h1>

            <p className="ludo-description">
              Eventos que ganham movimento, som, luz e uma entrega
              digital à altura de cada memória.
            </p>

            <div className="ludo-actions">
              <a href="#experiencias" className="ludo-button primary">
                Explorar experiências
              </a>

              <a href="#acesso" className="ludo-button">
                Acessar meu evento
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ludo-section ludo-experiences-zone"
        id="experiencias"
      >
        <div className="ludo-stars ludo-stars-three" aria-hidden="true" />
        <div className="ludo-stars ludo-stars-four" aria-hidden="true" />

        <div className="ludo-orb-field" aria-hidden="true">
          <i className="ludo-orb orb-a" />
          <i className="ludo-orb orb-b" />
          <i className="ludo-orb orb-c" />
          <i className="ludo-orb orb-d" />
        </div>

        <div className="ludo-container ludo-experiences-content">
          <p className="ludo-eyebrow">PORTAIS POR EXPERIÊNCIA</p>

          <h2 className="ludo-section-title">
            Cada evento com uma
            <span> personalidade própria.</span>
          </h2>

          <p className="ludo-experiences-intro">
            Escolha uma experiência. Cada portal possui atmosfera,
            recursos e identidade visual pensados para o tipo de evento.
          </p>

          <div className="ludo-portal-grid ludo-portal-grid-v3">
            {eventos.map((evento) => (
              <Link
                href={`/eventos/${evento.slug}/`}
                key={evento.slug}
                className="ludo-portal-card ludo-portal-card-v3"
                style={
                  {
                    "--card-color": evento.cor,
                    "--card-color-2": evento.corSecundaria,
                  } as CSSProperties
                }
              >
                <div className="ludo-card-ambient" />

                <div className="ludo-card-top">
                  
                  <b aria-hidden="true">↗</b>
                </div>

                <div className="ludo-card-content">
                  <small>{evento.etiqueta}</small>
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descricao}</p>
                  <strong>
                    Explorar experiência
                    <span aria-hidden="true">→</span>
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ludo-section" id="acesso">
        <div className="ludo-container">
          <div className="ludo-access-panel">
            <p className="ludo-eyebrow">ÁREA DO CLIENTE</p>

            <h2 className="ludo-section-title">
              Encontre suas <span>memórias.</span>
            </h2>

            <p className="ludo-description">
              A área de acesso será conectada à galeria privada
              correspondente a cada evento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
