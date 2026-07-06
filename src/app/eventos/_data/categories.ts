export type CategoriaEvento = {
  slug: string;
  titulo: string;
  destaque: string;
  descricao: string;
  introducao: string;
  tom:
    | "infantil"
    | "bebe"
    | "casamento"
    | "formatura"
    | "palestra"
    | "festas";
  servicos: string[];
};

export const categorias: CategoriaEvento[] = [
  {
    slug: "infantil",
    titulo: "Infantil",
    destaque: "COR • ALEGRIA • MOVIMENTO",
    descricao:
      "Experiências alegres e personalizadas para aniversários, festas temáticas e celebrações infantis.",
    introducao:
      "Em breve, a LUDO reunirá páginas personalizadas, convites, decoração, buffet, fotografia e registros digitais para festas infantis.",
    tom: "infantil",
    servicos: [
      "Página personalizada",
      "Convites digitais",
      "Decoração temática",
      "Buffet infantil",
      "Fotografia",
      "Álbum digital",
    ],
  },
  {
    slug: "cha-de-bebe",
    titulo: "Chá de bebê",
    destaque: "AFETO • ESPERA • DELICADEZA",
    descricao:
      "Uma experiência delicada para chá de bebê, chá revelação, presentes, convidados e recordações.",
    introducao:
      "Crie uma celebração especial com página personalizada, lista do bebê, convites, decoração, bolos, buffet e fotografia.",
    tom: "bebe",
    servicos: [
      "Página do evento",
      "Lista do bebê",
      "Convites personalizados",
      "Decoração e kit festa",
      "Bolos e buffet",
      "Fotografia e álbum",
    ],
  },
  {
    slug: "casamento",
    titulo: "Casamento",
    destaque: "HISTÓRIA • PRESENÇA • ELEGÂNCIA",
    descricao:
      "Uma experiência elegante para contar a história do casal, organizar convidados e guardar cada momento.",
    introducao:
      "Em breve, páginas de casamento com confirmação de presença, lista de presentes, programação, fotografia e galeria privada.",
    tom: "casamento",
    servicos: [
      "Site dos noivos",
      "Confirmação de presença",
      "Lista de presentes",
      "Programação",
      "Fotografia",
      "Galeria privada",
    ],
  },
  {
    slug: "formaturas",
    titulo: "Formaturas",
    destaque: "CONQUISTA • FUTURO • CELEBRAÇÃO",
    descricao:
      "Uma experiência premium para turmas, colações, jantares, homenagens e festas de formatura.",
    introducao:
      "Em breve, a LUDO oferecerá páginas para turmas, convites, homenagens, programação, fotografia e registros da celebração.",
    tom: "formatura",
    servicos: [
      "Página da turma",
      "Convites",
      "Programação",
      "Homenagens",
      "Fotografia",
      "Galeria do evento",
    ],
  },
  {
    slug: "palestras",
    titulo: "Palestras",
    destaque: "CONTEÚDO • AUTORIDADE • CONEXÃO",
    descricao:
      "Uma página moderna para conferências, congressos, treinamentos, apresentações e eventos empresariais.",
    introducao:
      "Em breve, experiências digitais para divulgar palestrantes, programação, inscrições, materiais e registros profissionais.",
    tom: "palestra",
    servicos: [
      "Página institucional",
      "Palestrantes",
      "Programação",
      "Inscrições",
      "Materiais",
      "Cobertura audiovisual",
    ],
  },
  {
    slug: "festas",
    titulo: "Festas",
    destaque: "LUZ • MÚSICA • ENERGIA",
    descricao:
      "Uma experiência intensa para baladas, shows, festivais, festas privadas e eventos noturnos.",
    introducao:
      "Em breve, páginas com atrações, ingressos, programação, vídeos, fotografia e conteúdos para divulgação.",
    tom: "festas",
    servicos: [
      "Página do evento",
      "Atrações",
      "Programação",
      "Ingressos e reservas",
      "Fotografia",
      "Vídeos e reels",
    ],
  },
];

export function obterCategoria(slug: string) {
  return categorias.find((categoria) => categoria.slug === slug);
}
