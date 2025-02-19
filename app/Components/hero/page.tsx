"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anime from "animejs";
import Link from "next/link";

export default function Hero() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Ajout d'un délai de 3 secondes entre les slides
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/pagne6.jpg')" }}
    >
      {/* Animation de fond */}
      <div className="absolute inset-0">
        <div className="floating-circle absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="floating-circle absolute top-1/2 left-1/3 w-40 h-40 bg-white rounded-full opacity-10"></div>
      </div>

      {/* Contenu de la section Hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Partie Texte */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_20px_rgba(34,197,94,1)]">
            Bienvenue chez Manguimissou Textile
          </h1>
          <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed">
            Découvrez notre gamme de textiles de haute qualité, conçus pour sublimer chaque occasion.
          </p>

          {/* Bouton Voir Plus */}
          <Link href="/produits" passHref>
            <button className="mt-4 px-6 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
              Voir plus
            </button>
          </Link>
        </div>

        {/* Partie Image */}
       
      </div>

      {/* Carrousel d'infos */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
        <Slider {...settings}>
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white">Nos textiles haut de gamme</h3>
            <p className="text-white mt-2">
              Explorez notre collection de tissus modernes et élégants, parfaits pour toutes vos créations.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white">Livraison rapide et fiable</h3>
            <p className="text-white mt-2">
              Profitez de nos services d'expédition rapides et fiables, où que vous soyez dans le monde.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white">Des designs uniques</h3>
            <p className="text-white mt-2">
              Nos designs sont créés avec soin et attention aux détails, pour des créations exclusives.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
