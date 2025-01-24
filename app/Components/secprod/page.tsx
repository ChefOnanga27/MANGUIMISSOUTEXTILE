import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Produit 1",
    description: "Un produit de qualité supérieure pour toutes vos occasions spéciales.",
    image: "/produit1.jpg", // Remplacez par le chemin de votre image
  },
  {
    id: 2,
    title: "Produit 2",
    description: "Découvrez le mélange parfait de style et de fonctionnalité.",
    image: "/produit2.jpg", // Remplacez par le chemin de votre image
  },
  {
    id: 3,
    title: "Produit 3",
    description: "Un produit qui combine élégance et durabilité pour votre satisfaction.",
    image: "/produit3.jpg", // Remplacez par le chemin de votre image
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="produits" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Nos Produits Phares
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez nos produits les plus populaires, sélectionnés pour répondre à vos besoins.
          </p>
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={`Image de ${product.title}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.title}
                </h3>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <button
                  className="mt-6 px-6 py-2 bg-yellow-500 text-white font-bold rounded-full 
                  hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 
                  transition duration-300"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
