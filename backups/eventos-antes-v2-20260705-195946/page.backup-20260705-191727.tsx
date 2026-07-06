import Link from "next/link";

const categorias = [
  {
    titulo: "Festas infantis",
    texto: "Alegria, movimento e memórias espontâneas.",
    imagem: "/eventos/imagens/infantil.svg",
    link: "/eventos/infantil",
  },
  {
    titulo: "Chá de bebê",
    texto: "Delicadeza e afeto em cada detalhe.",
    imagem: "/eventos/imagens/cha-de-bebe.svg",
    link: "/eventos/cha-de-bebe",
  },
  {
    titulo: "Casamentos",
    texto: "Histórias registradas com elegância.",
    imagem: "/eventos/imagens/casamento.svg",
    link: "/eventos/casamento",
  },
  {
    titulo: "Formaturas",
    texto: "Grandes conquistas merecem grandes registros.",
    imagem: "/eventos/imagens/formaturas.svg",
    link: "/eventos/formaturas",
  },
  {
    titulo: "Palestras",
    texto: "Conteúdo, autoridade e presença.",
    imagem: "/eventos/imagens/palestras.svg",
    link: "/eventos/palestras",
  },
  {
    titulo: "Festas",
    texto: "Luz, música e energia em movimento.",
    imagem: "/eventos/imagens/festas.svg",
    link: "/eventos/festas",
  },
];

export default function EventosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #32115b 0%, #09080f 45%, #030305 100%)",
        color: "#ffffff",
        paddingBottom: "100px",
      }}
    >
      <section
        style={{
          minHeight: "90vh",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          padding: "120px 6vw 70px",
        }}
      >
        <img
          src="/eventos/imagens/portal-hero.svg"
          alt="LUDO Eventos"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #050509 5%, transparent 70%), linear-gradient(to right, rgba(3,3,6,.8), transparent)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
          }}
        >
          <p
            style={{
              color: "#5ce8ff",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Fotografia • Vídeo • Experiências
          </p>

          <h1
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              lineHeight: 0.82,
              letterSpacing: "-0.07em",
              margin: "20px 0",
              textTransform: "uppercase",
            }}
          >
            LUDO
            <br />
            Eventos
          </h1>

          <p
            style={{
              maxWidth: "680px",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "#ded9e7",
            }}
          >
            Fotografia, vídeo e experiências digitais para transformar eventos
            em memórias que continuam vivas.
          </p>

          <a
            href="#experiencias"
            style={{
              display: "inline-flex",
              marginTop: "28px",
              padding: "16px 25px",
              borderRadius: "999px",
              background: "linear-gradient(120deg, #55e8ff, #a855f7)",
              color: "#07070a",
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            Explorar experiências
          </a>
        </div>
      </section>

      <section
        id="experiencias"
        style={{
          width: "min(1200px, calc(100% - 32px))",
          margin: "0 auto",
          paddingTop: "100px",
        }}
      >
        <p
          style={{
            color: "#5ce8ff",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Portal de eventos
        </p>

        <h2
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.055em",
            maxWidth: "900px",
            margin: "20px 0 50px",
          }}
        >
          Cada evento com uma experiência diferente.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {categorias.map((categoria) => (
            <Link
              key={categoria.titulo}
              href={categoria.link}
              style={{
                minHeight: "430px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "#111018",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <img
                src={categoria.imagem}
                alt={categoria.titulo}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(3,3,6,.98), transparent 70%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: "24px",
                  right: "24px",
                  bottom: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.2rem",
                    margin: "0 0 8px",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {categoria.titulo}
                </h3>

                <p style={{ margin: 0, color: "#d6d0df" }}>
                  {categoria.texto}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
