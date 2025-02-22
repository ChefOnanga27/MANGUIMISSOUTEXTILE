"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo et Titre */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="Logo de MANGUIMISSOUTEXTILE"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold">
            MANGUIMISSOUTEXTILE
          </h1>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation - Desktop & Mobile */}
        <nav
          className={`absolute top-16 left-0 w-full bg-black p-4 flex flex-col items-center gap-4 md:static md:flex-row md:w-auto md:bg-transparent md:p-0 md:gap-8 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          {["Accueil", "Produits", "A propos", "Contacts"].map((item, index) => (
            <Link
              key={index}
              href={item === "Accueil" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-yellow-300 px-3 py-2 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
