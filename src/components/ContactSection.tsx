export default function ContactSection() {
  return (
    <section id="contatti" className="contact-section relative py-14 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col flex-1">
        <h2 className="text-3xl md:text-4xl font-bold font-helvetica text-center mb-10 text-white">
          Contatti
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 flex-1">
          <p className="text-base md:text-lg text-white/90 leading-relaxed font-helvetica text-center">
            Sei interessato ai nostri servizi? Contattaci per un preventivo
            personalizzato o per qualsiasi informazione. Saremo lieti di
            rispondere alle tue domande e aiutarti a trovare la soluzione
            pubblicitaria più adatta alle tue esigenze.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-4 justify-center mt-auto">
          <a
            href="tel:+393478042565"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-gray-800 text-sm font-helvetica shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:brightness-110 transition-all"
            style={{ background: "linear-gradient(180deg, #d8d8d8 0%, #b0b0b0 50%, #a0a0a0 100%)", border: "1px solid #888" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            +39 347 804 2565
          </a>
          <a
            href="mailto:info@parlatopubblicita.it"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-gray-800 text-sm font-helvetica shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:brightness-110 transition-all"
            style={{ background: "linear-gradient(180deg, #d8d8d8 0%, #b0b0b0 50%, #a0a0a0 100%)", border: "1px solid #888" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            info@parlatopubblicita.it
          </a>
        </div>
      </div>
    </section>
  );
}
