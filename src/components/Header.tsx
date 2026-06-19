"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-6 lg:px-12 h-14 flex items-center justify-center">
        <nav className="flex gap-6 text-sm font-helvetica text-gray-700">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-black transition-colors">Servizi</a>
          <a href="#chi-siamo" className="hover:text-black transition-colors">Chi siamo</a>
          <a href="#lavori" className="hover:text-black transition-colors">Lavori</a>
          <a href="#contatti" className="hover:text-black transition-colors">Contatti</a>
        </nav>
      </div>
    </header>
  );
}
