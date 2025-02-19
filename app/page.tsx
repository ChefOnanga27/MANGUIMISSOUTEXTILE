"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import des composants
import Header from "./Components/header/page";
import Hero from "./Components/hero/page";
import Techniques from "./Components/methode/page";
import FeaturedProducts from "./Components/secprod/page";
import FeedbackForm from "./Components/catalogue/page";
import Footer from "./Components/footer/page";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Section de bienvenue */}
      <section className="bg-grey-100 text-black px-8 md:px-24 py-16 shadow-lg">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950">
            Bienvenue chez <span className="text-black">Manguimissou Textile</span> !
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-black">
            Découvrez une large sélection de tissus africains de qualité premium, des couvre-chefs élégants et des accessoires de mode uniques.
          </p>
          <div className="bg-white text-amber-900 px-6 py-4 rounded-lg shadow-md inline-block">
            <p className="text-md md:text-lg font-semibold">
              📦 Livraison rapide en province sous <span className="font-bold">2 jours ouvrables</span>.
              <br />🚚 Livraison disponible dans tout le <span className="font-bold">Gabon</span> !
            </p>
          </div>
          <p className="text-md md:text-lg">
            Besoin de plus d’informations ?{" "}
            <a href="/apropos" className="underline font-semibold hover:text-amber-200 transition duration-300">
              Cliquez ici
            </a>.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <Techniques />

      {/* Produits mis en avant */}
      <FeaturedProducts />

      {/* Catalogue */}
      <FeedbackForm/>

      {/* Footer */}
      <Footer />
    </>
  );
}
