"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form-section relative py-14 rounded-xl overflow-hidden h-full flex flex-col">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-1 flex items-center justify-center">
          <p className="text-lg text-gray-600 font-helvetica text-center">Grazie per il tuo messaggio! Ti contatteremo al più presto.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-section relative py-10 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col flex-1">
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors bg-white/60"
            />
            <input
              type="tel"
              placeholder="Telefono"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors bg-white/60"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors bg-white/60"
          />
          <textarea
            placeholder="Messaggio"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none bg-white/60 flex-1"
          />
          <div className="text-center pt-2 mt-auto">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-white text-sm font-helvetica shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:brightness-110 transition-all cursor-pointer"
              style={{ background: "linear-gradient(180deg, #808080 0%, #606060 50%, #505050 100%)", border: "1px solid #555" }}
            >
              Invia messaggio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
