"use client";

import { useState } from "react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-gradient min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[220px] items-center max-w-5xl mx-auto">
          {/* Left side - Text and CTA */}
          <div className="order-1 lg:order-1 text-left">
            <img src="/logo.svg" alt="Logo" className="h-16 mb-4 block" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-helvetica mb-3 tracking-tight" style={{ backgroundImage: "linear-gradient(to bottom, #b0b0b0, #333333)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Parlato Pubblicità
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              Realizzazioni grafiche per GDO
            </p>
            <p className="text-sm md:text-base text-gray-500 mb-6 max-w-md mx-auto lg:mx-0">
              Creiamo contenuti visivi d'impatto per il mercato della Grande Distribuzione Organizzata, unendo creatività e strategia.
            </p>
            <button
              className="btn-orange text-white font-semibold py-3 px-8 rounded-full text-base cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHovered
                  ? "0 8px 25px rgba(230, 122, 0, 0.4)"
                  : "0 4px 15px rgba(230, 122, 0, 0.3)",
              }}
            >
              Contattaci
            </button>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-2">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              <img src="/images/copertina.png" alt="Copertina" className="w-full h-full object-contain scale-150" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
