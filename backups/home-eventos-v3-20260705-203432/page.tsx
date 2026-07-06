import type { CSSProperties } from "react";
import Link from "next/link";
import { eventos } from "./data";

export const metadata = {
  title: "LUDO Eventos",
  description:
    "Fotografia, vídeo e experiências digitais para eventos.",
};

export default function EventosPage() {
  return (
    <main className="ludo-event-page ludo-portal">
      <section className="ludo-portal-hero">
        <div className="ludo-grid" />

        <div className="ludo-container">
          <nav className="ludo-event-nav">
            <Link href="/" className="ludo-event-logo">
              <span>L</span>
              <div>
                <strong>LUDO</strong>
                <small>EVENTOS</small>
              </div>
            </Link>

            <Link href="/" className="ludo-nav-button">
              Voltar à LUDO
            </Link>
          </nav>

          <div className="ludo-portal-content">
            <p className="ludo-eyebrow">
              FOTOGRAFIA • VÍDEO • EXPERIÊNCIAS
            </p>

            <h1>
              Viva.
              <span>Reviva.</span>
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

      <section className="ludo-section" id="experiencias">
        <div className="ludo-container">
          <p className="ludo-eyebrow">PORTAIS POR EXPERIÊNCIA</p>

          <h2 className="ludo-section-title">
            Cada evento com uma
            <span> personalidade própria.</span>
          </h2>

          <div className="ludo-portal-grid">
            {eventos.map((evento) => (
              <Link
                href={`/eventos/${evento.slug}/`}
                key={evento.slug}
                className="ludo-portal-card"
                style={
                  {
                    "--card-color": evento.cor,
                    "--card-color-2": evento.corSecundaria,
                  } as CSSProperties
                }
              >
                <div className="ludo-card-top">
                  <small>{evento.numero} / EXPERIÊNCIA</small>
                  <b>↗</b>
                </div>

                <div className="ludo-card-content">
                  <small>{evento.etiqueta}</small>
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descricao}</p>
                  <strong>Explorar experiência →</strong>
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
