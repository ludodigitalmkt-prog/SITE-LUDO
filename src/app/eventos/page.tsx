import Link from "next/link";
import { categorias } from "./_data/categories";

const numeroWhatsapp = "5541995644570";

const mensagem = encodeURIComponent(
  "Olá, LUDO! Gostaria de solicitar um orçamento para o meu evento."
);

const whatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;

export default function EventosPage() {
  return (
    <main className="events-home">
      <div className="events-stars" />

      <header className="events-home-header">
        <Link href="/" className="events-logo-text">
          LUDO
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

      <section className="events-launch">
        <div className="events-launch-light events-launch-light-one" />
        <div className="events-launch-light events-launch-light-two" />

        <div className="events-launch-content">
          <p className="events-eyebrow">LUDO DIGITAL • EVENTOS</p>

          <div className="events-coming-label">
            EM BREVE
          </div>

          <h1>
            Uma experiência completa para transformar o seu evento.
          </h1>

          <p className="events-launch-description">
            A LUDO está preparando um novo espaço para reunir páginas
            personalizadas, convites, decoração, buffet, fotografia, listas de
            presentes e registros especiais.
          </p>

          <div className="events-launch-actions">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="events-primary-button"
            >
              Solicitar orçamento para evento
            </a>

            <a href="#experiencias" className="events-secondary-button">
              Conhecer experiências
            </a>
          </div>

          <div className="events-launch-tags">
            <span>Páginas personalizadas</span>
            <span>Convites</span>
            <span>Decoração</span>
            <span>Buffet</span>
            <span>Fotografia</span>
            <span>Álbuns digitais</span>
          </div>
        </div>
      </section>

      <section id="experiencias" className="events-experiences">
        <div className="events-section-heading events-section-heading-center">
          <p>ESCOLHA SUA EXPERIÊNCIA</p>
          <h2>Cada celebração com uma personalidade diferente.</h2>
          <span>
            Explore as categorias e acompanhe os novos serviços que serão
            lançados.
          </span>
        </div>

        <div className="events-cards-grid">
          {categorias.map((categoria) => (
            <Link
              href={`/eventos/${categoria.slug}`}
              className={`event-card events-tone-${categoria.tom}`}
              key={categoria.slug}
            >
              <div className="event-card-light" />

              <div className="event-card-arrow">↗</div>

              <div className="event-card-content">
                <p>{categoria.destaque}</p>
                <h3>{categoria.titulo}</h3>
                <span>{categoria.descricao}</span>
                <strong>Explorar experiência →</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="events-home-cta">
        <div>
          <p>SEU EVENTO, SUA EXPERIÊNCIA</p>
          <h2>Não encontrou exatamente o que procura?</h2>
          <span>
            Conte sua ideia para a LUDO e receba uma proposta personalizada.
          </span>
        </div>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="events-primary-button"
        >
          Conversar pelo WhatsApp
        </a>
      </section>
    </main>
  );
}
