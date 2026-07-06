import { notFound } from "next/navigation";
import EventExperience from "../EventExperience";
import { encontrarEvento, eventos } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return eventos.map((evento) => ({
    slug: evento.slug,
  }));
}

type EventoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventoPage({
  params,
}: EventoPageProps) {
  const { slug } = await params;
  const evento = encontrarEvento(slug);

  if (!evento) {
    notFound();
  }

  return <EventExperience evento={evento} />;
}
