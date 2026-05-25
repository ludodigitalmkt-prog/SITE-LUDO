"use client";

import { useState } from "react";

const basePath = "";
const whatsapp = "https://wa.me/5541995644570";

const banners = [
  `${basePath}/images/banner-home.jpg`,
  `${basePath}/images/1.png`,
  `${basePath}/images/2.png`,
  `${basePath}/images/3.png`,
  `${basePath}/images/4.png`,
  `${basePath}/images/5.png`,
  `${basePath}/images/6.png`,
  `${basePath}/images/7.png`,
  `${basePath}/images/8.png`,
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

const parceiros = [
  `${basePath}/images/parceiros/parceiro-1.png`,
  `${basePath}/images/parceiros/parceiro-2.png`,
  `${basePath}/images/parceiros/parceiro-3.png`,
  `${basePath}/images/parceiros/parceiro-4.png`,
  `${basePath}/images/parceiros/parceiro-5.png`,
];

const planos = [
  {
    nome: "Plano Essencial",
    descricao:
      "Ideal para empresas que querem começar com uma presença digital mais profissional.",
    itens: [
      "Artes para redes sociais",
      "Organização visual da marca",
      "Direção básica de conteúdo",
      "Comunicação mais profissional",
    ],
    mensagem:
      "Olá, LUDO! Tenho interesse no Plano Essencial e gostaria de saber mais detalhes.",
  },
  {
    nome: "Plano Profissional",
    descricao:
      "Para marcas que querem consistência, estratégia e visual mais forte no digital.",
    itens: [
      "Social media estratégico",
      "Identidade visual aplicada",
      "Planejamento de comunicação",
      "Criativos para campanhas",
    ],
    mensagem:
      "Olá, LUDO! Tenho interesse no Plano Profissional e gostaria de saber mais detalhes.",
  },
  {
    nome: "Plano Premium",
    descricao:
      "Para empresas que querem uma estrutura digital completa, com site, branding e campanhas.",
    itens: [
      "Site ou landing page",
      "Branding e direção criativa",
      "Criativos de anúncio",
      "Estratégia digital completa",
    ],
    mensagem:
      "Olá, LUDO! Tenho interesse no Plano Premium e gostaria de saber mais detalhes.",
  },
];

type ClimaAtual = {
  temperatura: number;
  vento: number;
  codigo: number;
  descricao: string;
  horario: string;
};

const criarLinkWhatsapp = (mensagem: string) =>
  `${whatsapp}?text=${encodeURIComponent(mensagem)}`;

const traduzirClima = (codigo: number) => {
  if (codigo === 0) return "Céu limpo";
  if ([1, 2, 3].includes(codigo)) return "Parcialmente nublado";
  if ([45, 48].includes(codigo)) return "Neblina";
  if ([51, 53, 55, 56, 57].includes(codigo)) return "Garoa";
  if ([61, 63, 65, 66, 67].includes(codigo)) return "Chuva";
  if ([71, 73, 75, 77].includes(codigo)) return "Neve";
  if ([80, 81, 82].includes(codigo)) return "Pancadas de chuva";
  if ([95, 96, 99].includes(codigo)) return "Tempestade";
  return "Clima em atualização";
};

export default function Home() {
  const [clima, setClima] = useState<ClimaAtual | null>(null);
  const [carregandoClima, setCarregandoClima] = useState(false);
  const [mensagemClima, setMensagemClima] = useState(
    "Ative a experiência para ver o clima da sua região."
  );

  const buscarClima = () => {
    if (!navigator.geolocation) {
      setMensagemClima("Seu navegador não permite acessar localização.");
      return;
    }

    setCarregandoClima(true);
    setMensagemClima("Conectando localização em tempo real...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const resposta = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`
          );

          if (!resposta.ok) {
            throw new Error("Erro ao buscar clima.");
          }

          const dados = await resposta.json();
          const atual = dados.current;

          setClima({
            temperatura: Math.round(atual.temperature_2m),
            vento: Math.round(atual.wind_speed_10m),
            codigo: atual.weather_code,
            descricao: traduzirClima(atual.weather_code),
            horario: atual.time,
          });

          setMensagemClima("Experiência climática sincronizada.");
        } catch {
          setMensagemClima(
            "Não foi possível carregar o clima agora. Tente novamente."
          );
        } finally {
          setCarregandoClima(false);
        }
      },
      () => {
        setCarregandoClima(false);
        setMensagemClima(
          "Permissão de localização negada. Ative para ver a experiência."
        );
      }
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#02030a] text-white">
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
              src={`${basePath}/images/logo-ludo.png`}
              alt="Logo Ludo Digital"
              className="h-12 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-zinc-300 md:flex">
            <a href="#servicos" className="transition hover:text-blue-300">
              Serviços
            </a>
            <a href="#clima" className="transition hover:text-blue-300">
              Clima
            </a>
            <a href="#planos" className="transition hover:text-blue-300">
              Planos
            </a>
            <a href="#parceiros" className="transition hover:text-blue-300">
              Parceiros
            </a>
            <a href="#portfolio" className="transition hover:text-blue-300">
              Portfólio
            </a>
            <a href="#contato" className="transition hover:text-blue-300">
              Contato
            </a>
          </div>

          <a
            href={criarLinkWhatsapp(
              "Olá, LUDO! Vim pelo site e gostaria de solicitar um orçamento."
            )}
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
                href={criarLinkWhatsapp(
                  "Olá, LUDO! Quero começar um projeto com vocês."
                )}
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

      <section id="clima" className="relative bg-[#02030a] px-6 py-24">
        <div className="absolute left-[-160px] top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute right-[-160px] bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl backdrop-blur-2xl md:grid-cols-[1fr_0.8fr] md:p-12">
          <div className="absolute inset-0 opacity-30 led-background" />

          <div className="relative z-10">
            <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
              EXPERIÊNCIA EM TEMPO REAL
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              O digital muda a cada segundo. Sua marca também precisa se mover.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Uma experiência futurista que usa a localização do visitante para
              mostrar o clima atual da região em tempo real.
            </p>

            <button
              type="button"
              onClick={buscarClima}
              disabled={carregandoClima}
              className="mt-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-black shadow-[0_0_40px_rgba(37,99,235,0.35)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {carregandoClima ? "Sincronizando..." : "Ver clima da minha região"}
            </button>

            <p className="mt-4 text-sm text-zinc-500">{mensagemClima}</p>
          </div>

          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/45 p-8 shadow-[0_0_80px_rgba(59,130,246,0.12)]">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-blue-400/20 blur-2xl" />
            <div className="absolute bottom-[-40px] left-[-40px] h-36 w-36 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-sm font-black tracking-[0.3em] text-blue-300">
                CLIMA AGORA
              </p>

              <div className="mt-8 flex items-end gap-3">
                <span className="text-7xl font-black">
                  {clima ? `${clima.temperatura}°` : "--°"}
                </span>

                <span className="mb-3 text-zinc-400">
                  {clima ? clima.descricao : "aguardando localização"}
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <span className="text-xs text-zinc-500">Vento</span>
                  <p className="mt-1 font-black">
                    {clima ? `${clima.vento} km/h` : "-- km/h"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <span className="text-xs text-zinc-500">Status</span>
                  <p className="mt-1 font-black">
                    {clima ? "Online" : "Stand-by"}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm leading-relaxed text-blue-100">
                {clima
                  ? "Dados conectados com sua localização. Uma experiência digital viva, dinâmica e personalizada."
                  : "Clique no botão e permita a localização para ativar a experiência."}
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

      <section id="planos" className="relative bg-[#050713] px-6 py-28">
        <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
              PLANOS E SERVIÇOS
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Escolha o caminho ideal para fortalecer sua marca.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Cada plano foi pensado para uma fase diferente da sua empresa,
              desde a presença inicial até uma estrutura digital completa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {planos.map((plano, index) => (
              <div
                key={plano.nome}
                className={`rounded-[2.2rem] border border-white/10 p-8 transition duration-300 hover:-translate-y-2 ${
                  index === 1
                    ? "bg-gradient-to-br from-blue-600/25 to-purple-700/25 shadow-[0_0_60px_rgba(37,99,235,0.2)]"
                    : "bg-white/[0.045]"
                }`}
              >
                <span className="text-sm font-black tracking-[0.25em] text-blue-300">
                  PLANO {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-3xl font-black">{plano.nome}</h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {plano.descricao}
                </p>

                <div className="my-8 h-px bg-white/10" />

                <ul className="space-y-4">
                  {plano.itens.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-zinc-300">
                      <span className="text-blue-400">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={criarLinkWhatsapp(plano.mensagem)}
                  target="_blank"
                  className="mt-9 inline-block w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-center font-black transition hover:scale-105"
                >
                  Quero este plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#02030a] px-6 py-28">
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

      <section id="parceiros" className="relative bg-[#050713] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-black tracking-[0.35em] text-blue-400">
              EMPRESAS PARCEIRAS
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Marcas que já caminham com a LUDO.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Empresas que confiaram na LUDO para fortalecer sua presença
              digital, identidade visual e comunicação.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] py-8">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#050713] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#050713] to-transparent" />

            <div className="partner-track flex w-max items-center gap-10">
              {[...parceiros, ...parceiros].map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex h-24 w-44 items-center justify-center rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <img
                    src={logo}
                    alt={`Empresa parceira ${(index % parceiros.length) + 1}`}
                    className="max-h-14 max-w-full object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
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
              href={criarLinkWhatsapp(
                "Olá, LUDO! Quero um projeto com visual profissional para minha marca."
              )}
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
                    Solução visual criada para destacar marcas no digital com
                    estética premium, clareza e estratégia.
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
              src={`${basePath}/images/logo-ludo.png`}
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
              href={criarLinkWhatsapp(
                "Olá, LUDO! Vim pelo site e gostaria de falar sobre uma presença digital para minha marca."
              )}
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
            src={`${basePath}/images/logo-ludo.png`}
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