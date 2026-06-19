import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parlato Pubblicità - Realizzazioni grafiche per GDO",
  description:
    "La Umberto Parlato è un'azienda composta da un team di professionisti specializzati nella creazione di elementi grafici e l'impaginazione di volantini, brochure e riviste per la grande e media distribuzione organizzata.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-helvetica bg-white">
        {children}
      </body>
    </html>
  );
}
