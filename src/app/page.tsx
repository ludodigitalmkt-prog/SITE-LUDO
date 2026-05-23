const whatsapp = "https://wa.me/5541995644570";

const banners = [
  "/images/banner-home.jpg",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
];

const services = [
  {
    title: "Branding",
    text: "Identidade visual, posicionamento e direção criativa para marcas que querem parecer maiores.",
  },
  {
    title: "Social Media",
    text: "Conteúdos, artes, legendas e estratégia para redes sociais com aparência profissional.",
  },
  {
    title: "Sites e Landing Pages",
    text: "Sites modernos, responsivos e pensados para gerar autoridade e conversão.",
  },
  {
    title: "Tráfego Pago",
    text: "Campanhas estratégicas para atrair o público certo e gerar oportunidades comerciais.",
  },
];

const process = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Entendemos sua marca, seus objetivos, público e presença atual.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Definimos a direção visual, comunicação e estrutura digital ideal.",
  },
  {
    number: "03",
    title: "Criação",
    text: "Criamos os materiais, páginas, identidade e conteúdos da marca.",
  },
  {
    number: "04",
    title: "Entrega",
    text: "Organizamos tudo para sua marca se apresentar com mais autoridade.",
  },
];

const portfolio = [
  "Identidade Visual",
  "Social Media",
  "Landing Page",
  "Criativo de Anúncio",
  "Perfil Profissional",
  "Campanha Digital",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02030a] text-white overflow-hidden">
      <section id="inicio" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {banners.map((banner, index) => (
            <img
              key={banner}
              src={banner}
              alt={`Banner Ludo ${index + 1}`}
              className={`hero-slide hero-slide-${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#02030a] via-[#02030a]/88 to-[#02030a]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02030a] via-transparent to-[#02030a]/50" />
        <div className="absolute inset-0 led-background" />

        <div className="light-beam beam-one" />
        <div className="light-beam beam-two" />

        <nav className="relative z-50 mx-auto mt-7 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-5 py-4 shadow-2xl backdrop-blur-2xl">
          <a href="#inicio" className="flex items-center">
            <img
              src="/images/logo-ludo.png"
              alt="Logo Ludo Digital"
              className="h-12 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-zinc-300 md:flex">
            <a href="#servicos" className="transition hover:text-blue-300">
              Serviços
            </a>
            <a href="#metodo" className="transition hover:text-blue-300">
              Método
            </a>
            <a href="#portfolio" className="transition hover:text-blue-300">
              Portfólio
            </a>
            <a href="#contato" className="transition hover:text-blue-300">
              Contato
            </a>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:scale-105 hover:bg-blue-300"
          >
            Orçamento
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 py-16">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 text-sm font-black tracking-[0.35em] text-blue-300">
              LUDO DIGITAL MKT
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Sua marca com presença digital de{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                alto impacto.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Criamos sites, identidades visuais, conteúdos e campanhas para
              empresas que querem parecer mais profissionais, atrair clientes e
              se destacar no digital.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsapp}
                target="_blank"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-black shadow-[0_0_40px_rgba(37,99,235,0.45)] transition hover:scale-105"
              >
                Começar projeto
              </a>

              <a
                href="#portfolio"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 font-black backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-black"
              >
                Ver trabalhos
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 md:grid-cols-3">
              <div className="mini-card">
                <strong>360°</strong>
                <span>presença digital</span>
              </div>
              <div className="mini-card">
                <strong>Premium</strong>
                <span>visual estratégico</span>
              </div>
              <div className="mini-card">
                <strong>+Valor</strong>
                <span>percepção de marca</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050713] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="info-card">
            <span>PROBLEMA</span>
            <h2>Sua marca parece menor do que realmente é?</h2>
            <p>
              Uma presença digital improvisada pode afastar clientes antes mesmo
              do primeiro contato.
            </p>
          </div>

          <div className="info-card featured">
            <span>SOLUÇÃO</span>
            <h2>A LUDO cria percepção de valor.</h2>
            <p>
              Unimos design, comunicação e estratégia para sua empresa parecer
              mais profissional.
            </p>
          </div>

          <div className="info-card">
            <span>RESULTADO</span>
            <h2>Mais confiança, autoridade e presença.</h2>
            <p>
              Sua marca passa a se apresentar com mais clareza, beleza e força
              comercial.
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative bg-[#02030a] px-6 py-28">
        <div className="absolute right-[-160px] top-16 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
              SERVIÇOS
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Estrutura digital completa para sua marca crescer.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.title} className="service-card">
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#050713] px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
              MÉTODO LUDO
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Processo claro, visual premium e entrega estratégica.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Antes de criar, entendemos. Depois, transformamos a comunicação da
              sua marca em uma experiência digital profissional.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {process.map((item) => (
              <div key={item.number} className="method-card">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#02030a] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
                PORTFÓLIO
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Projetos com visual profissional e presença memorável.
              </h2>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              className="w-fit rounded-full border border-white/15 px-7 py-4 font-black transition hover:bg-white hover:text-black"
            >
              Quero um projeto assim
            </a>
          </div>

<div className="grid gap-6 md:grid-cols-3">
  {portfolio.map((item, index) => (
    <div key={item} className="portfolio-card clean-card">
      <div className="portfolio-glow" />

      <article>
        <span>PROJETO {index + 1}</span>
        <h3>{item}</h3>
        <p>
          Solução visual criada para destacar marcas no digital com estética
          premium, clareza e estratégia.
        </p>
      </article>
    </div>
  ))}
</div>
        </div>
      </section>

      <section id="contato" className="relative bg-[#050713] px-6 py-28">
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] p-10 text-center shadow-2xl backdrop-blur-2xl md:p-16">
          <div className="relative z-10">
            <img
              src="/images/logo-ludo.png"
              alt="Logo Ludo Digital"
              className="mx-auto mb-8 h-16 w-auto object-contain"
            />

            <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
              PRONTO PARA EVOLUIR?
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Vamos criar uma presença digital de outro nível?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Fale com a LUDO e comece a construir uma marca mais forte, bonita,
              estratégica e profissional.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              className="mt-10 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 font-black shadow-[0_0_40px_rgba(37,99,235,0.45)] transition hover:scale-105"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#02030a] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <img
            src="/images/logo-ludo.png"
            alt="Logo Ludo Digital"
            className="h-10 w-auto object-contain"
          />

          <p className="text-sm text-zinc-500">
            © 2026 Ludo Digital MKT. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}