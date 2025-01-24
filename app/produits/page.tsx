"use client";

import React from "react";
import Header from "../Components/header/page";
import OrderButton from "../Components/commander/OrderButton";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Tissu Premium",
      description: "Tissu de haute qualité, idéal pour les créations élégantes.",
      imageUrl: "/tissu1.jpg", // Remplace par le chemin correct de l'image
      price: "€30",
    },
    {
      id: 2,
      name: "Tissu Imprimé",
      description: "Tissu imprimé avec des motifs uniques, parfait pour la mode.",
      imageUrl: "/tissu2.jpg", // Remplace par le chemin correct de l'image
      price: "€25",
    },
    {
      id: 3,
      name: "Tissu Naturel",
      description: "Tissu fabriqué à partir de fibres naturelles pour un confort optimal.",
      imageUrl: "/tissu3.jpg", // Remplace par le chemin correct de l'image
      price: "€40",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Section Produits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
            Nos Produits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                  <p className="text-xl font-bold text-gray-800">{product.price}</p>

                  {/* Bouton Commander */}
                  <OrderButton
                    productName={product.name}
                    productPrice={product.price}
                    productDescription={product.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
