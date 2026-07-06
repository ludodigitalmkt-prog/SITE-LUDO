import Link from "next/link";
import { notFound } from "next/navigation";
import { obterCategoria } from "../_data/categories";
import { eventosRealizados } from "../_data/eventos";

const numeroWhatsapp = "5541995644570";

type CategoryPageProps = {
  slug: string;
};

export default function CategoryPage({ slug }: CategoryPageProps) {
  const categoria = obterCategoria(slug);

  if (!categoria) {
    notFound();
  }

  const eventosDaCategoria = eventosRealizados.filter(
    (evento) => evento.categoria === categoria.slug
  );

  const mensagem = encodeURIComponent(
    `Olá, LUDO! Gostaria de solicitar um orçamento para um evento da categoria ${categoria.titulo}.`
  );

  const whatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;

  return (
    <main className={`events-category events-tone-${categoria.tom}`}>
      <div className="events-stars" />

      <header className="events-category-header">
        <Link href="/eventos" className="events-back">
          ← Voltar para experiências
        </Link>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="events-header-button"
        >
          Solicitar orçamento
        </a>
      </header>

      <section className="events-category-hero">
        <div className="events-category-glow" />

        <div className="events-category-content">
          <p className="events-eyebrow">{categoria.destaque}</p>

          <h1>{categoria.titulo}</h1>

          <p className="events-category-description">
            {categoria.descricao}
          </p>

          <div className="events-coming-badge">
            <span>EM BREVE</span>
            Uma experiência completa de serviços para o seu evento.
          </div>

          <p className="events-category-intro">
            {categoria.introducao}
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="events-primary-button"
          >
            Quero solicitar um orçamento
          </a>
        </div>
      </section>

      <section className="events-inner-section">
        <div className="events-section-heading">
          <p>EXPERIÊNCIA COMPLETA</p>
          <h2>Serviços pensados para cada detalhe.</h2>
        </div>

        <div className="events-services-grid">
          {categoria.servicos.map((servico, index) => (
            <article className="events-service-card" key={servico}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{servico}</h3>
              <p>
                Esta opção será personalizada de acordo com o estilo, tamanho e
                necessidades do evento.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="events-inner-section events-realized-section">
        <div className="events-section-heading">
          <p>PORTFÓLIO</p>
          <h2>Eventos realizados</h2>
          <span>
            Acesse experiências que já foram desenvolvidas pela LUDO.
          </span>
        </div>

        {eventosDaCategoria.length > 0 ? (
          <div className="events-realized-grid">
            {eventosDaCategoria.map((evento) => (
              <Link
                href={evento.href}
                className="events-realized-card"
                key={evento.href}
              >
                <div className="events-realized-image">
                  <img src={evento.imagem} alt={evento.nome} />
                </div>

                <div className="events-realized-content">
                  <p>{evento.etiqueta}</p>
                  <h3>{evento.nome}</h3>
                  <span>{evento.descricao}</span>
                  <strong>Acessar evento →</strong>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="events-empty-state">
            <span>Novas experiências serão adicionadas em breve.</span>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Seja o primeiro projeto desta categoria →
            </a>
          </div>
        )}
      </section>

      <section className="events-final-cta">
        <p>LUDO EVENTOS</p>
        <h2>Seu evento também pode se tornar uma experiência.</h2>
        <span>
          Fale com a LUDO e conte como você imagina a sua celebração.
        </span>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="events-primary-button"
        >
          Solicitar orçamento
        </a>
      </section>

    </main>
  );
}
