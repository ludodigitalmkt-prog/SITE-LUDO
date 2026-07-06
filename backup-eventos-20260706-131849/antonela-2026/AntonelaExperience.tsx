"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./antonela.module.css";

import { antonelaConfig } from "./config";

import {
  antonelaAlbumCover,
  antonelaAlbumPhotos,
  antonelaBanners,
} from "./media";

function criarWhatsApp(mensagem: string) {
  const numero =
    antonelaConfig.telefoneWhatsApp.replace(/\D/g, "");

  return `https://wa.me/${numero}?text=${encodeURIComponent(
    mensagem
  )}`;
}

function AlbumDigital() {
  const [aberto, setAberto] = useState(false);
  const [pagina, setPagina] = useState(0);
  const [virando, setVirando] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");

    const atualizar = () => {
      setMobile(media.matches);
    };

    atualizar();

    media.addEventListener("change", atualizar);

    return () => {
      media.removeEventListener("change", atualizar);
    };
  }, []);

  const quantidade = mobile ? 1 : 2;

  const ultimaPagina = Math.max(
    0,
    antonelaAlbumPhotos.length - quantidade
  );

  const fotosVisiveis = useMemo(
    () =>
      antonelaAlbumPhotos.slice(
        pagina,
        pagina + quantidade
      ),
    [pagina, quantidade]
  );

  function virar(direcao: 1 | -1) {
    if (virando) return;

    const proxima = Math.max(
      0,
      Math.min(
        ultimaPagina,
        pagina + direcao * quantidade
      )
    );

    if (proxima === pagina) return;

    setVirando(true);

    window.setTimeout(() => {
      setPagina(proxima);

      window.setTimeout(() => {
        setVirando(false);
      }, 280);
    }, 230);
  }

  if (!antonelaAlbumPhotos.length) {
    return (
      <div className={styles.albumEmpty}>
        <strong>O álbum está preparado.</strong>

        <p>
          Coloque as imagens PARTE2 até PARTE11 na pasta
          indicada e execute o organizador.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.albumStage}>
      <div
        className={`${styles.albumMagic} ${
          aberto ? styles.albumOpened : ""
        }`}
      >
        <div className={styles.albumShadow} />

        {!aberto ? (
          <button
            type="button"
            className={styles.albumCover}
            onClick={() => setAberto(true)}
          >
            {antonelaAlbumCover && (
              <img
                src={antonelaAlbumCover}
                alt="Capa do álbum da Antonela"
              />
            )}

            <div className={styles.albumCoverShade} />

            <div className={styles.albumCoverText}>
              <small>MEMÓRIAS DA ANTONELA</small>

              <strong>Nosso álbum</strong>

              <span>Toque para abrir</span>
            </div>
          </button>
        ) : (
          <div
            className={`${styles.openBook} ${
              virando ? styles.bookTurning : ""
            }`}
          >
            <div className={styles.bookSpine} />

            {fotosVisiveis.map((foto, indice) => (
              <button
                type="button"
                key={foto}
                className={`${styles.bookPage} ${
                  indice === 0
                    ? styles.leftPage
                    : styles.rightPage
                }`}
                onClick={() => virar(1)}
              >
                <img
                  src={foto}
                  alt={`Página ${
                    pagina + indice + 1
                  } do álbum da Antonela`}
                  loading="lazy"
                />

                <span className={styles.pageCorner} />
              </button>
            ))}
          </div>
        )}
      </div>

      {aberto && (
        <div className={styles.albumControls}>
          <button
            type="button"
            onClick={() => virar(-1)}
            disabled={pagina === 0}
          >
            ← Anterior
          </button>

          <span>
            {pagina + 1}–
            {Math.min(
              antonelaAlbumPhotos.length,
              pagina + quantidade
            )}{" "}
            de {antonelaAlbumPhotos.length}
          </span>

          <button
            type="button"
            onClick={() => virar(1)}
            disabled={pagina >= ultimaPagina}
          >
            Próxima →
          </button>
        </div>
      )}
    </div>
  );
}

export default function AntonelaExperience() {
  const [bannerAtual, setBannerAtual] = useState(0);

  useEffect(() => {
    if (antonelaBanners.length <= 1) return;

    const intervalo = window.setInterval(() => {
      setBannerAtual(
        (atual) =>
          (atual + 1) % antonelaBanners.length
      );
    }, 5500);

    return () => {
      window.clearInterval(intervalo);
    };
  }, []);

  const banner =
    antonelaBanners[bannerAtual] ?? "";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        {banner && (
          <img
            key={banner}
            src={banner}
            alt=""
            className={styles.heroBanner}
          />
        )}

        <div className={styles.heroShade} />

        <div className={styles.stars} />

        <nav className={styles.nav}>
          <Link href="/eventos/" className={styles.brand}>
            <img src="/icon.png" alt="LUDO" />

            <span>
              <strong>LUDO</strong>
              <small>EVENTOS</small>
            </span>
          </Link>

          <Link href="/eventos/" className={styles.back}>
            ← Voltar
          </Link>
        </nav>

        <div className={styles.heroContent}>
          <p>UMA EXPERIÊNCIA LUDO EVENTOS</p>

          <h1>{antonelaConfig.nome}</h1>

          <span>
            Um dia especial guardado para sempre.
          </span>

          <a href="#mensagem" className={styles.heroButton}>
            Entrar na história
          </a>
        </div>

        {antonelaBanners.length > 1 && (
          <div className={styles.bannerDots}>
            {antonelaBanners.map((item, indice) => (
              <button
                key={item}
                type="button"
                className={
                  indice === bannerAtual
                    ? styles.activeDot
                    : ""
                }
                onClick={() => setBannerAtual(indice)}
                aria-label={`Abrir banner ${indice + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      <section
        id="mensagem"
        className={styles.parentsSection}
      >
        <div className={styles.parentsCard}>
          <span>MENSAGEM DOS PAPAIS</span>

          <h2>Uma espera feita de amor.</h2>

          <p>{antonelaConfig.mensagemDosPais}</p>

          <strong>
            Com carinho, os papais da Antonela.
          </strong>
        </div>
      </section>

      <section className={styles.albumSection}>
        <div className={styles.sectionHeading}>
          <span>ÁLBUM DIGITAL INTERATIVO</span>

          <h2>Folheie cada memória.</h2>

          <p>
            Toque no álbum para abri-lo. No computador
            aparecem duas páginas, como um livro. No
            celular, uma página por vez.
          </p>
        </div>

        <AlbumDigital />
      </section>

      <section className={styles.accessSection}>
        <div className={styles.sectionHeading}>
          <span>ACESSO ÀS FOTOS</span>

          <h2>Escolha seu tipo de acesso.</h2>

          <p>
            O pedido será enviado diretamente pelo
            WhatsApp da LUDO.
          </p>
        </div>

        <div className={styles.accessGrid}>
          <article className={styles.accessCard}>
            <small>AMIGOS E FAMILIARES</small>

            <h3>Sou convidado</h3>

            <p>
              Solicite o acesso à pasta com as fotos
              editadas e autorizadas para os convidados.
            </p>

            <a
              href={criarWhatsApp(
                antonelaConfig.mensagemConvidado
              )}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar pelo WhatsApp →
            </a>
          </article>

          <article className={styles.accessCard}>
            <small>RESPONSÁVEL PELO EVENTO</small>

            <h3>Sou responsável</h3>

            <p>
              Solicite o acesso completo às fotos,
              vídeos e arquivos originais reservados.
            </p>

            <a
              href={criarWhatsApp(
                antonelaConfig.mensagemResponsavel
              )}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar acesso completo →
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
