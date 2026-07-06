"use client";

import type { CSSProperties } from "react";
import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Evento } from "./data";

function Efeitos({ tema }: { tema: Evento["tema"] }) {
  if (tema === "infantil") {
    return (
      <div className="ludo-effects">
        <i className="floating-symbol symbol-one">★</i>
        <i className="floating-symbol symbol-two">♥</i>
        <i className="floating-symbol symbol-three">●</i>
      </div>
    );
  }

  if (tema === "bebe") {
    return (
      <div className="ludo-effects">
        <i className="bubble bubble-one" />
        <i className="bubble bubble-two" />
        <i className="bubble bubble-three" />
      </div>
    );
  }

  if (tema === "casamento" || tema === "palestras") {
    return (
      <div className="ludo-effects">
        <i className="ring ring-one" />
        <i className="ring ring-two" />
      </div>
    );
  }

  if (tema === "formatura") {
    return (
      <div className="ludo-effects">
        {[12, 28, 45, 67, 84].map((posicao, indice) => (
          <i
            key={posicao}
            className="spark"
            style={{
              left: `${posicao}%`,
              top: `${16 + indice * 12}%`,
              animationDelay: `${indice * 0.5}s`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="ludo-effects">
      <i className="laser laser-one" />
      <i className="laser laser-two" />
      <i className="laser laser-three" />
    </div>
  );
}

export default function EventExperience({
  evento,
}: {
  evento: Evento;
}) {
  const [mensagem, setMensagem] = useState("");
  const [codigo, setCodigo] = useState("");

  function acessar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!codigo.trim()) {
      setMensagem("Digite o código entregue pela equipe LUDO.");
      return;
    }

    setMensagem(
      "Código recebido. A galeria externa será conectada nesta área."
    );
  }

  return (
    <main
      className="ludo-event-page ludo-experience"
      data-theme={evento.tema}
      style={
        {
          "--accent": evento.cor,
          "--accent-two": evento.corSecundaria,
          "--event-background": evento.tema === "infantil"
            ? "#fff7df"
            : evento.tema === "bebe"
              ? "#fff7fb"
              : evento.tema === "casamento"
                ? "#f8f4eb"
                : evento.tema === "palestras"
                  ? "#071124"
                  : "#07070c",
        } as CSSProperties
      }
    >
      <section className="ludo-experience-hero">
        <div className="ludo-grid" />
        <Efeitos tema={evento.tema} />

        <div className="ludo-container">
          <nav className="ludo-event-nav">
            <Link href="/eventos/" className="ludo-event-logo">
              <span>L</span>
              <div>
                <strong>LUDO</strong>
                <small>EVENTOS</small>
              </div>
            </Link>

            <Link href="/eventos/" className="ludo-nav-button">
              ← Voltar ao portal
            </Link>
          </nav>

          <div className="ludo-experience-content">
            <p className="ludo-eyebrow">{evento.etiqueta}</p>

            <h1>{evento.titulo}</h1>

            <h2>{evento.chamada}</h2>

            <p className="ludo-description">{evento.descricao}</p>

            <div className="ludo-actions">
              <a href="#recursos" className="ludo-button primary">
                Explorar experiência
              </a>

              <a href="#acesso" className="ludo-button">
                Acessar meu evento
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ludo-section" id="recursos">
        <div className="ludo-container">
          <p className="ludo-eyebrow">RECURSOS DO PORTAL</p>

          <h2 className="ludo-section-title">
            Tudo organizado em uma
            <span> única experiência.</span>
          </h2>

          <div className="ludo-feature-grid">
            {evento.recursos.map((recurso) => (
              <article className="ludo-feature-card" key={recurso.titulo}>
                

                <h3>{recurso.titulo}</h3>

                <p>{recurso.texto}</p>

                <button
                  type="button"
                  onClick={() =>
                    setMensagem(
                      `${recurso.titulo}: estrutura pronta para integração.`
                    )
                  }
                >
                  {recurso.botao} →
                </button>
              </article>
            ))}
          </div>

          <p className="ludo-message">{mensagem}</p>
        </div>
      </section>

      <section className="ludo-section">
        <div className="ludo-container">
          <div className="ludo-video-area">
            <div>
              <p className="ludo-eyebrow">VÍDEO E IMAGENS</p>

              <h2>Uma apresentação feita para entrar no clima.</h2>

              <p>
                Este espaço receberá o vídeo principal, fotografias,
                teasers e conteúdos personalizados do evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ludo-section" id="acesso">
        <div className="ludo-container">
          <div className="ludo-access-panel access-grid">
            <div>
              <p className="ludo-eyebrow">ÁREA DO CLIENTE</p>

              <h2 className="ludo-section-title">
                Acesse sua <span>galeria privada.</span>
              </h2>

              <p className="ludo-description">
                Digite o código entregue pela equipe LUDO.
                A galeria, os convites ou a lista serão conectados aqui.
              </p>
            </div>

            <form onSubmit={acessar} className="ludo-form">
              <label htmlFor="codigo-evento">
                Código do evento
              </label>

              <div>
                <input
                  id="codigo-evento"
                  value={codigo}
                  onChange={(event) => setCodigo(event.target.value)}
                  placeholder="EX.: ANTONELA2026"
                />

                <button type="submit" className="ludo-button primary">
                  Acessar
                </button>
              </div>

              <p className="ludo-message">{mensagem}</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
