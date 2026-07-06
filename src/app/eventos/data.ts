export type Evento = {
  slug: string;
  numero: string;
  nome: string;
  titulo: string;
  etiqueta: string;
  chamada: string;
  descricao: string;
  tema:
    | "infantil"
    | "bebe"
    | "casamento"
    | "formatura"
    | "palestras"
    | "festas";
  cor: string;
  corSecundaria: string;
  recursos: {
    titulo: string;
    texto: string;
    botao: string;
  }[];
};

export const eventos: Evento[] = [
  {
    slug: "infantil",
    numero: "01",
    nome: "Festas infantis",
    titulo: "Infantil",
    etiqueta: "COR • ALEGRIA • MOVIMENTO",
    chamada: "Um mundo criado para grandes pequenas memórias.",
    descricao:
      "Uma experiência alegre e colorida para aniversários, festas temáticas e celebrações infantis.",
    tema: "infantil",
    cor: "#11c6d8",
    corSecundaria: "#ff779e",
    recursos: [
      {
        titulo: "Lista de presentes",
        texto:
          "Conecte a lista escolhida pela família a uma loja ou plataforma externa.",
        botao: "Configurar lista",
      },
      {
        titulo: "Confirmação de presença",
        texto:
          "Organize convidados, responsáveis e acompanhantes antes da festa.",
        botao: "Configurar RSVP",
      },
      {
        titulo: "Galeria privada",
        texto:
          "Entregue as fotografias e os vídeos por meio de um acesso protegido.",
        botao: "Acessar galeria",
      },
    ],
  },
  {
    slug: "cha-de-bebe",
    numero: "02",
    nome: "Chá de bebê e revelação",
    titulo: "Chá de bebê",
    etiqueta: "AFETO • ESPERA • DELICADEZA",
    chamada: "Uma experiência doce para anunciar uma nova história.",
    descricao:
      "Uma página delicada para chá de bebê, chá revelação, presentes e confirmação de convidados.",
    tema: "bebe",
    cor: "#ff8bb6",
    corSecundaria: "#8fdcff",
    recursos: [
      {
        titulo: "Lista do bebê",
        texto:
          "Conecte enxoval, presentes e produtos escolhidos pelos responsáveis.",
        botao: "Configurar presentes",
      },
      {
        titulo: "Chá revelação",
        texto:
          "Inclua contagem regressiva, enquete e uma apresentação especial.",
        botao: "Montar revelação",
      },
      {
        titulo: "Convites",
        texto:
          "Organize confirmações, acompanhantes e informações do evento.",
        botao: "Configurar convites",
      },
    ],
  },
  {
    slug: "casamento",
    numero: "03",
    nome: "Casamentos",
    titulo: "Casamento",
    etiqueta: "HISTÓRIA • PRESENÇA • ELEGÂNCIA",
    chamada: "Do convite à última dança, tudo em um só lugar.",
    descricao:
      "Uma experiência elegante com história do casal, RSVP, lista de presentes, programação e galeria.",
    tema: "casamento",
    cor: "#163f70",
    corSecundaria: "#d9b873",
    recursos: [
      {
        titulo: "RSVP e convidados",
        texto:
          "Confirmações, acompanhantes, restrições alimentares e informações da recepção.",
        botao: "Configurar RSVP",
      },
      {
        titulo: "Lista de presentes",
        texto:
          "Conecte lojas, cotas, experiências, PIX ou a plataforma escolhida pelo casal.",
        botao: "Configurar lista",
      },
      {
        titulo: "Convite e QR Code",
        texto:
          "Compartilhe o endereço do evento e facilite o controle de acesso.",
        botao: "Criar convite",
      },
    ],
  },
  {
    slug: "formaturas",
    numero: "04",
    nome: "Formaturas",
    titulo: "Formaturas",
    etiqueta: "CONQUISTA • FUTURO • CELEBRAÇÃO",
    chamada: "Uma trajetória inteira apresentada com presença.",
    descricao:
      "Uma experiência premium para turmas, colações, jantares, homenagens e festas de formatura.",
    tema: "formatura",
    cor: "#2879df",
    corSecundaria: "#e3ba51",
    recursos: [
      {
        titulo: "Convites e acessos",
        texto:
          "Organize convidados, confirmações, lotes e informações de entrada.",
        botao: "Configurar convites",
      },
      {
        titulo: "Cronograma",
        texto:
          "Apresente ensaio, colação, jantar, homenagens e festa.",
        botao: "Montar agenda",
      },
      {
        titulo: "Turma e homenagens",
        texto:
          "Adicione formandos, professores, mensagens e registros da trajetória.",
        botao: "Adicionar turma",
      },
    ],
  },
  {
    slug: "palestras",
    numero: "05",
    nome: "Palestras e apresentações",
    titulo: "Palestras",
    etiqueta: "CONTEÚDO • AUTORIDADE • CONEXÃO",
    chamada: "Informação, agenda e conversão em uma experiência clara.",
    descricao:
      "Uma página moderna para conferências, congressos, treinamentos e eventos empresariais.",
    tema: "palestras",
    cor: "#315eea",
    corSecundaria: "#a8ee72",
    recursos: [
      {
        titulo: "Inscrições",
        texto:
          "Conecte lotes, pagamentos e confirmação dos participantes.",
        botao: "Configurar inscrição",
      },
      {
        titulo: "Agenda e palestrantes",
        texto:
          "Apresente horários, trilhas, biografias, temas e salas.",
        botao: "Montar programação",
      },
      {
        titulo: "Controle de convite",
        texto:
          "Organize o acesso por QR Code, lista ou link individual.",
        botao: "Configurar acesso",
      },
    ],
  },
  {
    slug: "festas",
    numero: "06",
    nome: "Festas, baladas e shows",
    titulo: "Festas",
    etiqueta: "LUZ • MÚSICA • ENERGIA",
    chamada: "Uma página que começa antes do primeiro beat.",
    descricao:
      "Uma experiência intensa para baladas, shows, festivais, festas privadas e eventos noturnos.",
    tema: "festas",
    cor: "#ff2fbd",
    corSecundaria: "#6474ff",
    recursos: [
      {
        titulo: "Ingressos",
        texto:
          "Conecte plataforma de venda, lotes, reservas e acessos.",
        botao: "Configurar ingressos",
      },
      {
        titulo: "Line-up",
        texto:
          "Apresente artistas, horários, palcos, DJs e atrações.",
        botao: "Montar line-up",
      },
      {
        titulo: "Aftermovie",
        texto:
          "Publique vídeos, galeria, melhores momentos e próxima edição.",
        botao: "Adicionar mídia",
      },
    ],
  },
];

export function encontrarEvento(slug: string) {
  return eventos.find((evento) => evento.slug === slug);
}
