import Image from "next/image";

export default function WorkflowSection() {
  return (
    <section
      className="workflow-section relative py-14 mx-auto max-w-7xl my-20 px-4 rounded-xl"
      style={{
        border: "2px solid #b35c00",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-helvetica text-center mb-10 text-white">
          Il nostro flusso di lavoro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-base md:text-lg text-white leading-relaxed font-helvetica">
              Il nostro processo inizia con un briefing approfondito per comprendere
              le esigenze del cliente e gli obiettivi della campagna. Analizziamo il
              target di riferimento, studiamo il mercato della Grande Distribuzione
              Organizzata e definiamo insieme la strategia comunicativa più efficace.
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed font-helvetica">
              Nella fase di realizzazione, il nostro team di grafici e designer
              trasforma le idee in elementi visivi professionali. Impaghiniamo
              volantini, brochure e riviste con attenzione ai dettagli tipografici,
              cromatici e compositivi. Ogni progetto viene sottoposto a revisioni
              per garantire la qualità e la conformità agli standard di stampa
              richiesti dalla grande distribuzione.
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed font-helvetica">
              La stampa e la consegna rappresentano la fase finale del nostro lavoro.
              Collaboriamo con tipografie di prim&apos;ordine per ottenere risultati
              eccellenti rispettando tempi e budget concordati. Seguiamo personalmente
              la distribuzione nei punti vendita, monitorando il posizionamento e
              l&apos;efficacia delle inserzioni pubblicitarie per garantire il massimo
              ritorno sull&apos;investimento.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/comelavoriamo.jpeg"
              alt="Il nostro flusso di lavoro"
              width={480}
              height={360}
              className="rounded-lg border-2 border-[#b35c00] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
