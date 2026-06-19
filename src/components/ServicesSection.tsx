"use client";

import { useState } from "react";

const tabs = [
  { id: "brochure", label: "Brochure" },
  { id: "riviste", label: "Riviste" },
  { id: "volantini", label: "Volantini" },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("brochure");

  return (
    <section id="servizi" className="pt-6 pb-8 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Tab menu */}
          <div className="flex justify-center gap-6 md:gap-10 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm md:text-base font-normal transition-all duration-300 cursor-pointer font-helvetica ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image area */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl h-80 flex items-center justify-center">
              {activeTab === "brochure" && (
                <img src="/images/brochure.png" alt="Brochure" className="max-w-full h-full object-contain scale-125" />
              )}
              {activeTab === "riviste" && (
                <img src="/images/riviste.png" alt="Riviste" className="max-w-full max-h-full object-contain" />
              )}
              {activeTab === "volantini" && (
                <img src="/images/volantini.png" alt="Volantini" className="max-w-full max-h-full object-contain" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
