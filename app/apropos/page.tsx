"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

export default function About() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation du fond pour un effet subtil
    if (backgroundRef.current) {
      anime({
        targets: backgroundRef.current,
        opacity: [0.8, 1],
        easing: "easeInOutSine",
        duration: 5000,
        direction: "alternate",
        loop: true,
      });
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Section "À Propos" */}
      <section
        id="about"
        ref={backgroundRef}
        className="relative text-gray-800 bg-gradient-to-r from-blue-50 via-white to-pink-50"
      >
        {/* Titre de la section */}
        <div className="relative w-full py-24 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
            À Propos de <span className="text-primary">Manguimissou Textile</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez notre passion pour le textile et l'innovation.
          </p>
        </div>

        {/* Contenu structuré */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Notre Histoire */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-3xl font-semibold text-primary">Notre Histoire</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fondée en 2020, Manguimissou Textile est née d'une passion pour les tissus 
              de qualité et la mode. Depuis, nous nous engageons à sélectionner les meilleurs matériaux 
              et à offrir une expérience inégalée à nos clients.
            </p>
          </div>

          {/* Notre Mission */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-3xl font-semibold text-primary">Notre Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous nous efforçons de proposer des tissus inspirants et accessibles aux créateurs,
              designers et particuliers, tout en mettant en avant qualité et raffinement.
            </p>
          </div>

          {/* Nos Valeurs */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-3xl font-semibold text-primary">Nos Valeurs</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos principes fondamentaux reposent sur la qualité, l'innovation et la durabilité.
              Chaque tissu que nous créons incarne ces valeurs pour garantir satisfaction et excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
