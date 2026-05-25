import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ludo Digital MKT",
  description:
    "Sites, branding, social media e estratégias digitais para marcas que querem crescer.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}