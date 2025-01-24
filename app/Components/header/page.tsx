import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-pink-900 p-4 text-white">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Logo de MANGUIMISSOUTEXTILE"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="text-2xl font-extrabold">MANGUIMISSOUTEXTILE</h1>
      </div>
      <nav>
        <ul className="flex gap-8 font-medium">
          <li className="group">
            <Link href="/" className="hover:text-yellow-300 px-3 py-2 transition duration-300">
              Accueil
            </Link>
          </li>
          <li className="group">
            <Link href="./apropos" className="hover:text-yellow-300 px-3 py-2 transition duration-300">
              À Propos
            </Link>
          </li>
          <li className="group">
            <Link href="/produits" className="hover:text-yellow-300 px-3 py-2 transition duration-300">
              Produits
            </Link>
          </li>
          <li className="group">
            <Link href="/contacts" className="hover:text-yellow-300 px-3 py-2 transition duration-300">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <button className="bg-white text-orange-500 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-white transition duration-300">
        Commander
      </button>
    </header>
  );
};

export default Header;
