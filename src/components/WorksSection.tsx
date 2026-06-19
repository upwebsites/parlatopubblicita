"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Flipbook = dynamic(() => import("./Flipbook"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-48">
      <div className="text-gray-500">Caricamento flipbook...</div>
    </div>
  ),
});

const shelf1 = [
  { id: "book1", pdf: "/pdf/IPERFRESCO_2026_01.pdf", title: "Iperfresco" },
  { id: "book2", pdf: "/pdf/PACCASH_2026_01_.pdf", title: "PAC Cash" },
  { id: "book3", pdf: "/pdf/2026_05_SPECIALI.pdf", title: "Speciali" },
];

const shelf2 = [
  { id: "book4", pdf: "/pdf/Bimarket_2025_17.pdf", title: "Bimarket" },
  { id: "book5", pdf: "/pdf/IL_NEGOZIETTO_05_2026.pdf", title: "Il Negozietto" },
  { id: "book6", pdf: "/pdf/ledelizie_Supermercati_27_2025.pdf", title: "Le Delizie" },
];

export default function WorksSection() {
  return (
    <section id="lavori" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          I Nostri Lavori
        </h2>

        <div className="mb-16 flex flex-col items-center">
          <div className="relative flex items-end justify-center gap-4 -mb-2.5">
            {shelf1.map((book) => (
              <Flipbook key={book.id} bookId={book.id} pdfSrc={book.pdf} title={book.title} />
            ))}
          </div>
          <Image src="/wall-bookshelf.png" alt="Scaffale" width={500} height={44} className="h-auto" />
        </div>

        <div className="mb-8 flex flex-col items-center">
          <div className="relative flex items-end justify-center gap-4 -mb-2.5">
            {shelf2.map((book) => (
              <Flipbook key={book.id} bookId={book.id} pdfSrc={book.pdf} title={book.title} />
            ))}
          </div>
          <Image src="/wall-bookshelf.png" alt="Scaffale" width={500} height={44} className="h-auto" />
        </div>
      </div>
    </section>
  );
}
