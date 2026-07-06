export type CategoriaEvento = {
  slug: string;
  numero: string;
  titulo: string;
  tituloCurto: string;
  destaque: string;
  descricao: string;
  imagem: string;
  cor: string;
  corSecundaria: string;
  etiqueta: string;
  servicos: {
    titulo: string;
    texto: string;
  }[];
  galeria: string[];
};

export const categorias: CategoriaEvento[] = [
  {
    slug: "infantil",
    numero: "01",
    titulo: "Festas infantis",
    tituloCurto: "Infantil",
    destaque: "Alegria em movimento.",
    descricao:
      "Uma cobertura viva, espontânea e colorida para guardar cada brincadeira, sorriso e descoberta.",
    imagem: "/eventos/imagens/momento-01.svg",
    cor: "#ff4db8",
    corSecundaria: "#50e8ff",
    etiqueta: "COR • ALEGRIA • MOVIMENTO",
    servicos: [
      {
        titulo: "Momentos espontâneos",
        texto: "Registros naturais das crianças, brincadeiras, convidados e encontros."
      },
      {
        titulo: "Decoração e detalhes",
        texto: "Mesa, lembranças, personagens, brinquedos e toda a construção visual."
      },
      {
        titulo: "Conteúdo para redes",
        texto: "Vídeos verticais e pequenas prévias prontas para compartilhar."
      }
    ],
    galeria: [
      "/eventos/imagens/momento-01.svg",
      "/eventos/imagens/momento-03.svg",
      "/eventos/imagens/momento-05.svg"
    ]
  },
  {
    slug: "cha-de-bebe",
    numero: "02",
    titulo: "Chá de bebê",
    tituloCurto: "Chá de bebê",
    destaque: "O começo de uma nova história.",
    descricao:
      "Uma experiência delicada, afetiva e leve para registrar a família e todos os detalhes dessa espera.",
    imagem: "/eventos/imagens/cha-de-bebe.svg",
    cor: "#dda8ff",
    corSecundaria: "#a6ecff",
    etiqueta: "AFETO • ESPERA • DELICADEZA",
    servicos: [
      {
        titulo: "Retratos de família",
        texto: "Imagens afetivas com quem faz parte dessa fase tão especial."
      },
      {
        titulo: "Pequenos detalhes",
        texto: "Decoração, lembranças, presentes e momentos preparados com carinho."
      },
      {
        titulo: "Galeria personalizada",
        texto: "Uma entrega digital suave, elegante e pensada para a identidade do evento."
      }
    ],
    galeria: [
      "/eventos/imagens/cha-de-bebe.svg",
      "/eventos/imagens/momento-02.svg",
      "/eventos/imagens/momento-04.svg"
    ]
  },
  {
    slug: "casamento",
    numero: "03",
    titulo: "Casamentos",
    tituloCurto: "Casamento",
    destaque: "Tudo que o tempo não pode apagar.",
    descricao:
      "Fotografia e vídeo com linguagem elegante, documental e cinematográfica para contar uma história completa.",
    imagem: "/eventos/imagens/momento-02.svg",
    cor: "#d5b675",
    corSecundaria: "#fff0c2",
    etiqueta: "HISTÓRIA • PRESENÇA • ELEGÂNCIA",
    servicos: [
      {
        titulo: "Preparativos",
        texto: "A emoção antes da cerimônia, os detalhes e os bastidores."
      },
      {
        titulo: "Cerimônia",
        texto: "Olhares, votos, encontros e tudo que acontece sem repetir."
      },
      {
        titulo: "Celebração",
        texto: "A energia dos convidados, da pista e dos momentos mais marcantes."
      }
    ],
    galeria: [
      "/eventos/imagens/momento-02.svg",
      "/eventos/imagens/momento-04.svg",
      "/eventos/imagens/momento-05.svg"
    ]
  },
  {
    slug: "formaturas",
    numero: "04",
    titulo: "Formaturas",
    tituloCurto: "Formaturas",
    destaque: "Uma conquista desse tamanho merece impacto.",
    descricao:
      "Uma experiência visual forte para cerimônias, colações, jantares, homenagens e festas de formatura.",
    imagem: "/eventos/imagens/formaturas.svg",
    cor: "#479dff",
    corSecundaria: "#ffd268",
    etiqueta: "CONQUISTA • FUTURO • CELEBRAÇÃO",
    servicos: [
      {
        titulo: "Cerimônia",
        texto: "Entrada, entrega de diplomas, discursos, homenagens e encontros."
      },
      {
        titulo: "Retratos",
        texto: "Fotos individuais, da turma, dos amigos e da família."
      },
      {
        titulo: "Filme da conquista",
        texto: "Um vídeo com ritmo, emoção e a energia de uma grande noite."
      }
    ],
    galeria: [
      "/eventos/imagens/formaturas.svg",
      "/eventos/imagens/momento-03.svg",
      "/eventos/imagens/momento-01.svg"
    ]
  },
  {
    slug: "palestras",
    numero: "05",
    titulo: "Palestras e eventos",
    tituloCurto: "Palestras",
    destaque: "Sua mensagem também precisa ser vista.",
    descricao:
      "Cobertura estratégica para conferências, treinamentos, eventos empresariais, lançamentos e apresentações.",
    imagem: "/eventos/imagens/palestras.svg",
    cor: "#41d9ff",
    corSecundaria: "#6877ff",
    etiqueta: "CONTEÚDO • AUTORIDADE • CONEXÃO",
    servicos: [
      {
        titulo: "Palco e apresentação",
        texto: "Registros profissionais dos palestrantes, conteúdo e interação."
      },
      {
        titulo: "Marca e ambiente",
        texto: "Fotos de estrutura, patrocinadores, telões e ativações."
      },
      {
        titulo: "Conteúdo rápido",
        texto: "Recortes verticais e imagens preparados para divulgação."
      }
    ],
    galeria: [
      "/eventos/imagens/palestras.svg",
      "/eventos/imagens/momento-03.svg",
      "/eventos/imagens/momento-04.svg"
    ]
  },
  {
    slug: "festas",
    numero: "06",
    titulo: "Festas e celebrações",
    tituloCurto: "Festas",
    destaque: "A noite acaba. A energia permanece.",
    descricao:
      "Uma linguagem intensa, moderna e ousada para festas, confraternizações e eventos noturnos.",
    imagem: "/eventos/imagens/festas.svg",
    cor: "#ff37c7",
    corSecundaria: "#8a5dff",
    etiqueta: "LUZ • MÚSICA • ENERGIA",
    servicos: [
      {
        titulo: "Atmosfera",
        texto: "Luz, movimento, pista e toda a energia que constrói a noite."
      },
      {
        titulo: "Convidados",
        texto: "Retratos naturais, vivos e sem poses rígidas."
      },
      {
        titulo: "Teasers",
        texto: "Conteúdo curto e intenso para redes sociais e divulgação."
      }
    ],
    galeria: [
      "/eventos/imagens/festas.svg",
      "/eventos/imagens/momento-05.svg",
      "/eventos/imagens/momento-03.svg"
    ]
  }
];

export function encontrarCategoria(slug: string) {
  return categorias.find((categoria) => categoria.slug === slug);
}
