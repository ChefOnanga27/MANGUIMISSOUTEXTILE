"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anime from "animejs";
import Link from "next/link"; // Assurez-vous que vous utilisez `next/link` pour la navigation

export default function Hero() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation des cercles de fond avec Anime.js
    anime({
      targets: ".floating-circle",
      translateX: [
        { value: 50, duration: 2000 },
        { value: -50, duration: 2000 },
      ],
      translateY: [
        { value: 50, duration: 2000 },
        { value: -50, duration: 2000 },
      ],
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    });
  }, []);

  const settings = {
    dots: true,  // Activer la pagination
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Ajout d'un défilement automatique pour le carrousel
  };

  return (
    <section
  className="relative h-screen w-full overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/jaune.jpg')" }} // Remplacer par ton image dans le dossier public
>
  {/* Animation de fond */}
  <div className="absolute inset-0">
    <div className="floating-circle absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
    <div className="floating-circle absolute top-1/2 left-1/3 w-40 h-40 bg-white rounded-full opacity-10"></div>
  </div>

  {/* Texte défilant */}
  <div className="absolute top-5 left-0 w-full overflow-hidden">
    <div className="animate-marquee whitespace-nowrap text-center text-white text-xl font-semibold">
      <span className="inline-block mx-4">
        Seulement pour vous!
      </span>
      <span className="inline-block mx-4">
        Explorez des textiles uniques et de qualité exceptionnelle.
      </span>
      <span className="inline-block mx-4">
        Restez curieux et découvrez notre univers créatif !
      </span>
    </div>
  </div>

  {/* Contenu de la section Hero */}
  <div className="relative z-10 flex items-center justify-between h-full text-white p-5">
    {/* Partie Texte */}
    <div className="flex-1 pl-10">
      <h1 className="text-5xl font-extrabold drop-shadow-md leading-tight">
        Bienvenue chez Manguimissou Textile
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
        Découvrez notre gamme de textiles de haute qualité, conçus pour sublimer chaque occasion.
      </p>

      {/* Bouton Voir Plus */}
      <Link href="#produits" passHref>
        <button className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Voir plus
        </button>
      </Link>
    </div>

    {/* Partie Images (à gauche et à droite du texte) */}
    <div className="flex-1 flex justify-between">
      {/* Image à gauche */}
      <div className="w-1/3">
        <img
          src="/anime.gif" // Remplacer par ton image
          alt="Image gauche"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Image à droite */}
      <div className="w-1/3">
        <img
          src="/mel.jpg" // Remplacer par ton image
          alt="Image droite"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  </div>



      {/* Carrousel (optionnel, en bas de l'écran ou ailleurs) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <Slider {...settings}>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Nos textiles haut de gamme
              </h3>
              <p className="text-gray-600">
                Explorez notre collection de tissus modernes et élégants, parfaits pour toutes vos créations.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Livraison rapide et fiable
              </h3>
              <p className="text-gray-600">
                Profitez de nos services d'expédition rapides et fiables, où que vous soyez dans le monde.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Des designs uniques
              </h3>
              <p className="text-gray-600">
                Nos designs sont créés avec soin et attention aux détails, pour des créations exclusives.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
