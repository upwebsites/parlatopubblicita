export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Parlato Pubblicità</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Realizzazioni grafiche per la grande e media distribuzione.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <p className="text-gray-400 text-sm">
              Email: info@parlatopubblicita.it
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servizi</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Brochure</li>
              <li>Riviste</li>
              <li>Volantini</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Umberto Parlato. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
