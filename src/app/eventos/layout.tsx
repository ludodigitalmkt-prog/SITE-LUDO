import type { ReactNode } from "react";
import PersistentEventMusic from "./_components/PersistentEventMusic";
import "./eventos.css";

export default function EventosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <PersistentEventMusic />
    </>
  );
}
