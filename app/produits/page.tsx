"use client";

import { useState } from "react";
import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

// Définition du type Product
interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
}

// Composant ProductCard avec bouton WhatsApp
const ProductCard = ({ product }: { product: Product }) => {
  const whatsappMessage = `Bonjour, je suis intéressé par "${product.name}" à ${product.price.toLocaleString()} FCFA. Pouvez-vous me donner plus de détails ?`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=24162891575&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={`Image de ${product.name}`}
          className="w-full h-64 object-cover rounded-t-lg filter brightness-95 hover:brightness-100 transition-all"
        />
        <div className="absolute top-2 right-2 bg-secondary text-white px-3 py-1 rounded-lg text-sm font-semibold">
          {product.price.toLocaleString()} FCFA
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
        <p className="text-md text-gray-600">{product.description}</p>

        {/* Bouton WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-green-600 transition"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </div>
  );
};

// Composant principal Products
export default function Products() {
  const [category, setCategory] = useState<string>("all");

  // Liste des produits
  const products: Product[] = [
    { id: 1, name: "Sac à dos en pagne", description: "Élégant et résistant.", imageUrl: "/sac-a-dos-en-tissu2.jpg", price: 15000, category: "Sac à dos" },
    { id: 2, name: "Sac à dos special", description: "Parfait pour le quotidien.", imageUrl: "/sac-a-dos-en-tissu.jpg", price: 12000, category: "Sac à dos" },
    { id: 3, name: "Pagne wax africain", description: "Tissu coloré de qualité.", imageUrl: "/pagne3.jpg", price: 7200, category: "Pagne" },
    { id: 4, name: "Pagne en coton", description: "Idéal pour la couture.", imageUrl: "/pagne2.jpg", price: 10500, category: "Pagne" },
    { id: 5, name: "Pagne de haute qualité", description: "Tissu en coton motifs floraux.", imageUrl: "/pagne1.jpg", price: 7200, category: "Pagne" },
    { id: 6, name: "Tissu rideau thermique", description: "Tissu rideau isolant thermique.", imageUrl: "/pagne2.jpg", price: 10500, category: "Pagne" },
    { id: 7, name: "Biais dentelle menthe", description: "Biais élastique en dentelle.", imageUrl: "/pagne3.jpg", price: 800, category: "Pagne" },
    { id: 8, name: "Tissu lin naturel", description: "Léger et respirant, idéal pour l'été.", imageUrl: "/pagne4.jpg", price: 8900, category: "Pagne" },
    { id: 9, name: "Tissu satin luxe", description: "Tissu doux et brillant.", imageUrl: "/pagne5.jpg", price: 12000, category: "Pagne" },
  ];

  // Filtrage par catégorie
  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Section Produits */}
      <section className="py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Titre */}
          <h1 className="text-6xl font-extrabold text-center text-primary mb-12 tracking-wide">
            Découvrez Nos Produits
          </h1>

          {/* Filtres */}
          <div className="flex justify-center gap-4 mb-10">
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white shadow-sm"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Toutes les catégories</option>
              <option value="Sac à dos">Sac à dos</option>
              <option value="Pagne">Pagne</option>
            </select>
          </div>

          {/* Liste des produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
