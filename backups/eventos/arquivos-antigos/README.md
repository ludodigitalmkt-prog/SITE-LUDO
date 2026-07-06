<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="LUDO Eventos — Casamento.">
  <title>Casamento | LUDO Eventos</title>
  <link rel="stylesheet" href="../assets/css/eventos.css">
</head>
<body data-theme="casamento" data-audio="../assets/audio/casamento.mp3">

<div class="entry-overlay">
  <div class="entry-card">
    <div class="brand-mark">L</div>
    <h2>Entre na<br><span class="glow-text">experiência.</span></h2>
    <p>Ative o som para uma navegação mais imersiva ou continue em silêncio.</p>
    <div class="entry-actions">
      <button class="btn btn-primary" data-enter-sound>Entrar com som</button>
      <button class="btn btn-ghost" data-enter-muted>Continuar sem som</button>
    </div>
  </div>
</div>


<header class="header">
  <div class="container header-inner">
    <a class="brand" href="../">
      <span class="brand-mark">L</span>
      <span>LUDO EVENTOS</span>
    </a>
    <button class="menu-btn" aria-label="Abrir menu" aria-expanded="false">☰</button>
    <nav class="nav">
      <a href="../#experiencias">Experiências</a>
      <a href="../#filme">Vídeo</a>
      <a href="../#galeria">Galeria</a>
      <a href="../#acesso">Acessar evento</a>
    </nav>
    <a class="btn btn-primary" href="#contato">Solicitar cobertura</a>
  </div>
</header>

<main>
  <section class="hero category-hero">
    <div class="hero-media"><img src="../assets/images/casamento.svg" alt="Casamento"></div>
    <div class="hero-grid"></div>
    <div class="container hero-content">
      <a class="back-link" href="../">← Voltar ao portal</a>
      <div class="hero-kicker"><span></span>Presença • Elegância • História</div>
      <h1>Casamento</h1>
      <p>Tudo que o tempo não pode apagar. Fotografia e vídeo com linguagem elegante, documental e cinematográfica.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#galeria">Ver experiência</a>
        <a class="btn btn-ghost" href="#acesso">Acessar galeria</a>
      </div>
    </div>
  </section>
  <div class="marquee"><div class="marquee-track"><span>Casamento <i>✦</i> Fotografia <i>✦</i> Vídeo <i>✦</i> Experiência digital <i>✦</i></span><span>Casamento <i>✦</i> Fotografia <i>✦</i> Vídeo <i>✦</i> Experiência digital <i>✦</i></span></div></div>

  <section class="section" id="galeria">
    <div class="container">
      <span class="eyebrow reveal">Narrativa visual</span>
      <h2 class="section-title reveal">Tudo que o tempo não pode apagar.</h2>
      <p class="section-copy reveal">Fotografia e vídeo com linguagem elegante, documental e cinematográfica.</p>
      <div class="carousel-wrap reveal">
        <div class="carousel" data-carousel>
          <article class="shot"><img src="../assets/images/momento-01.svg" alt="Imagem de apresentação"><div class="shot-caption"><b>Presença</b><span>Momentos que acontecem de verdade</span></div></article>
          <article class="shot"><img src="../assets/images/momento-02.svg" alt="Imagem de apresentação"><div class="shot-caption"><b>Detalhes</b><span>Pequenas partes de uma grande história</span></div></article>
          <article class="shot"><img src="../assets/images/momento-03.svg" alt="Imagem de apresentação"><div class="shot-caption"><b>Movimento</b><span>Energia sem poses engessadas</span></div></article>
          <article class="shot"><img src="../assets/images/momento-04.svg" alt="Imagem de apresentação"><div class="shot-caption"><b>Memória</b><span>Uma entrega feita para permanecer</span></div></article>
        </div>
        <div class="carousel-controls"><button class="icon-btn" data-prev aria-label="Anterior">←</button><button class="icon-btn" data-next aria-label="Próximo">→</button></div>
      </div>
    </div>
  </section>

  <section class="section" id="filme">
    <div class="container">
      <span class="eyebrow reveal">Filme do evento</span>
      <h2 class="section-title reveal">Uma página com <span class="glow-text">ritmo próprio.</span></h2>
      <div class="video-shell reveal">
        <video autoplay muted loop playsinline poster="../assets/images/casamento.svg">
          <source src="../assets/video/casamento.mp4" type="video/mp4">
        </video>
        <div class="video-badge">Adicione o vídeo em assets/video/casamento.mp4</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow reveal">Cobertura completa</span>
      <h2 class="section-title reveal">O evento contado em <span class="glow-text">camadas.</span></h2>
      <div class="services">
        <article class="service reveal"><small>01 / SERVIÇO</small><h3>Preparativos</h3><p>A emoção antes da cerimônia, com detalhes e bastidores.</p></article>
<article class="service reveal"><small>02 / SERVIÇO</small><h3>Cerimônia</h3><p>Olhares, votos e tudo que acontece sem repetir.</p></article>
<article class="service reveal"><small>03 / SERVIÇO</small><h3>Celebração</h3><p>A energia da pista e a presença de cada convidado.</p></article>
      </div>
    </div>
  </section>

  <section class="section" id="acesso">
    <div class="container">
      <div class="access-panel reveal">
        <div>
          <span class="eyebrow">Área do cliente</span>
          <h2>Acesse sua <span class="glow-text">galeria.</span></h2>
          <p>Use o código entregue pela equipe. Após a validação, você será encaminhado para o serviço externo de galeria protegida.</p>
        </div>
        <form class="access-form" data-access-form>
          <label for="event-code-casamento"><strong>Código do evento</strong></label>
          <div class="input-wrap">
            <input id="event-code-casamento" autocomplete="off" placeholder="DIGITE SEU CÓDIGO">
            <button class="btn btn-primary" type="submit">Acessar</button>
          </div>
          <div class="form-status" aria-live="polite"></div>
          <p class="form-note">Não coloque fotos privadas ou senhas verdadeiras diretamente no GitHub Pages.</p>
        </form>
      </div>
    </div>
  </section>
</main>

<footer class="footer" id="contato">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="../"><span class="brand-mark">L</span><span>LUDO EVENTOS</span></a>
        <p>Fotografia, vídeo e experiências digitais para transformar eventos em memórias vivas.</p>
      </div>
      <div>
        <h4>Experiências</h4>
        <div class="footer-links">
          <a href="../infantil/">Infantil</a>
          <a href="../cha-de-bebe/">Chá de bebê</a>
          <a href="../casamento/">Casamento</a>
        </div>
      </div>
      <div>
        <h4>Mais eventos</h4>
        <div class="footer-links">
          <a href="../formaturas/">Formaturas</a>
          <a href="../palestras/">Palestras</a>
          <a href="../festas/">Festas</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© <span data-year></span> LUDO Digital MKT. Todos os direitos reservados.</div>
  </div>
</footer>
<div class="sound-panel" aria-label="Controle de som">
  <button type="button" data-sound-toggle aria-label="Ativar som">🔇</button>
  <input data-volume type="range" min="0" max="1" step=".05" value=".45" aria-label="Volume">
</div>

<script src="../assets/js/eventos.js"></script>
</body>
</html>
