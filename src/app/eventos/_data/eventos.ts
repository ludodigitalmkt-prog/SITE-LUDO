export type EventoRealizado = {
  nome: string;
  categoria: string;
  descricao: string;
  imagem: string;
  href: string;
  etiqueta: string;
};

export const eventosRealizados: EventoRealizado[] = [
  {
    nome: "Chá da Antonela",
    categoria: "cha-de-bebe",
    descricao:
      "Uma página delicada criada para reunir fotografias, convidados e momentos especiais do chá da Antonela.",
    imagem: "/eventos/antonela-2026/entrada-banners/AMIGOS1.png",
    href: "/eventos/antonela-2026",
    etiqueta: "Evento realizado",
  },
];
