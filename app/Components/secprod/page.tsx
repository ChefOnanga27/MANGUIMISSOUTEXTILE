import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Sac en tissu",
    description: "Un produit de qualité supérieure pour toutes vos occasions spéciales.",
    image: "/sac-a-dos-en-tissu 5.jpg",
    price: 15000, // Prix en Franc CFA
  },
  {
    id: 2,
    title: "Sac en tissu",
    description: "Découvrez le mélange parfait de style et de fonctionnalité.",
    image: "/sac-a-dos-en-tissu 4.jpg",
    price: 20000,
  },
  {
    id: 3,
    title: "Sac en tissu",
    description: "Un produit qui combine élégance et durabilité pour votre satisfaction.",
    image: "/sac-a-dos-en-tissu 3.jpg",
    price: 18000,
  },
];

const upcomingProducts: Product[] = [
  {
    id: 4,
    title: "Bientôt Disponible 1",
    description: "Un design exclusif en préparation, restez à l'affût !",
    image: "/sac-a-dos-en-tissu.jpg",
    price: 0, // Indiquer un prix à venir si besoin
  },
  {
    id: 5,
    title: "Bientôt Disponible 2",
    description: "Une nouveauté qui va révolutionner votre garde-robe.",
    image: "/sac-a-dos-en-tissu 2.jpg",
    price: 0,
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="produits" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            Nos Produits Phares
          </h2>
          <p className="mt-4 text-lg text-black">
            Découvrez nos produits les plus populaires, sélectionnés pour répondre à vos besoins.
          </p>
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={`Image de ${product.title}`}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  <p className="mt-3 text-gray-700">{product.description}</p>
                </div>
                {/* Prix et Boutons */}
                <div className="mt-4">
                  <p className="text-lg font-semibold text-green-600">
                    {product.price.toLocaleString()} XAF
                  </p>
                  <div className="flex gap-3 mt-4">
                    {/* Bouton En savoir plus */}
                    <button className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-full 
                      hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 
                      transition duration-300">
                      En savoir plus
                    </button>
{/* Bouton Commander via WhatsApp */}
<a
  href={`https://api.whatsapp.com/send?phone=241062891575&text=Bonjour,%20je%20souhaite%20commander%20${encodeURIComponent(product.title)}%20(${product.price.toLocaleString()}%20XAF).`}
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 bg-green-500 text-white font-bold rounded-full flex items-center gap-2
  hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 
  transition duration-300"
>
  Commander
</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section "Articles à venir" */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
            Articles à Venir
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Découvrez en avant-première nos prochaines nouveautés.
          </p>
        </div>

        {/* Grille des articles à venir */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {upcomingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg opacity-70">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                <p className="mt-3 text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
