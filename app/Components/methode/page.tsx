"use client";

import React from "react";
import Link from "next/link";

// Définition du type Product
interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
}

// Composant ProductCard
const ProductCard = ({ product }: { product: Product }) => {
  const whatsappMessage = `Bonjour, je suis intéressé par "${product.name}" à ${product.price.toLocaleString()} FCFA. Pouvez-vous me donner plus de détails ?`;
  const whatsappUrl = `https://wa.me/24162891575?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Image à gauche */}
      <img
        src={product.imageUrl}
        alt={`Image de ${product.name}`}
        className="w-full md:w-1/2 h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none filter brightness-95 hover:brightness-100 transition-all"
      />

      {/* Contenu à droite */}
      <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
        <h3 className="text-xl font-semibold text-primary">{product.name}</h3>
        <p className="text-md text-gray-600 my-2">{product.description}</p>
        <div className="text-lg font-bold text-black mb-4">
          {product.price.toLocaleString()} FCFA
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Commander via WhatsApp
        </a>
      </div>
    </div>
  );
};

// Composant principal Techniques
export default function Techniques() {
  const products: Product[] = [
    { id: 1, name: "Pagne de haute qualité", description: "Tissu en coton motifs floraux.", imageUrl: "/pagne1.jpg", price: 7200, category: "Coton" },
    { id: 2, name: "Tissu rideau thermique", description: "Tissu rideau isolant thermique.", imageUrl: "/pagne2.jpg", price: 10500, category: "Rideaux" },
    { id: 3, name: "Biais dentelle menthe", description: "Biais élastique en dentelle.", imageUrl: "/pagne3.jpg", price: 800, category: "Accessoires" },
    { id: 4, name: "Tissu lin naturel", description: "Léger et respirant, idéal pour l'été.", imageUrl: "/pagne4.jpg", price: 8900, category: "Lin" },
    { id: 5, name: "Tissu satin luxe", description: "Tissu doux et brillant.", imageUrl: "/pagne5.jpg", price: 12000, category: "Satin" },
    { id: 6, name: "Tissu velours premium", description: "Velours épais pour un toucher luxueux.", imageUrl: "/pagne6.jpg", price: 18500, category: "Velours" },
  ];

  return (
    <section className="bg-grey-200/80 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Titre */}
        <h1 className="text-5xl font-extrabold text-center text-primary mb-12 tracking-wide">
          Nouveaux Tissus Africains
        </h1>

        {/* Liste des produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bouton Voir Plus */}
        <div className="flex justify-end mt-10">
          <Link href="/produits">
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition duration-300">
              Voir plus
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
