import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save the Date - Maria Fernanda e Gustavo",
  description: "Save the date do casamento de Maria Fernanda e Gustavo.",
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
