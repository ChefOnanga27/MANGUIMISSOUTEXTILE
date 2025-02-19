
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center bg-amber-900 p-4 text-white">
      {/* Logo et Titre */}
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <img
          src="/logo.jpg"
          alt="Logo de MANGUIMISSOUTEXTILE"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
        />
        <h1 className="text-xl sm:text-2xl font-extrabold">
          MANGUIMISSOUTEXTILE
        </h1>
      </div>

      {/* Navigation */}
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end font-medium">
          <li className="group">
            <Link
              href="/"
              className="hover:text-yellow-300 px-2 sm:px-3 py-2 transition duration-300"
            >
              Accueil
            </Link>
          </li>
          <li className="group">
            <Link
              href="/apropos"
              className="hover:text-yellow-300 px-2 sm:px-3 py-2 transition duration-300"
            >
              À Propos
            </Link>
          </li>
          <li className="group">
            <Link
              href="/produits"
              className="hover:text-yellow-300 px-2 sm:px-3 py-2 transition duration-300"
            >
              Produits
            </Link>
          </li>
          <li className="group">
            <Link
              href="/contact"
              className="hover:text-yellow-300 px-2 sm:px-3 py-2 transition duration-300"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      </header>
  );
};

export default Header;
