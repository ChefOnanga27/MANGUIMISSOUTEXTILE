export default function Footer(){
    return (
        <>
       < footer className="bg-pink-900 opacity-100 text-white py-10 mt-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Section de gauche */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-extrabold">Manguimissou Textile</h2>
              <p className="mt-2 text-gray-400">
                Des textiles de qualité pour des créations exceptionnelles.
              </p>
            </div>

            {/* Navigation footer */}
            <div className="flex space-x-6">
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <a href="#home" className="hover:text-yellow-300">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-yellow-300">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-yellow-300">
                    Produits
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-300">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Manguimissou Textile. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}