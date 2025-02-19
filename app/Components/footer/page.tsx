export default function Footer() {
    return (
      <footer className="bg-amber-900 opacity-100 text-white py-10 mt-20">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Conteneur principal */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Section de gauche */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold">Manguimissou Textile</h2>
              <p className="mt-2 text-gray-400">
                Des textiles de qualité pour des créations exceptionnelles.
              </p>
            </div>
  
            {/* Navigation footer */}
            <div>
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <li>
                  <a href="/" className="hover:text-yellow-300">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/apropos" className="hover:text-yellow-300">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#produits" className="hover:text-yellow-300">
                    Produits
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-300">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Informations supplémentaires */}
          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © 2025 Manguimissou Textile. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  