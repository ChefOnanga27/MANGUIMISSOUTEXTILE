"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Header from "../Components/header/page";

export default function About() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation du fond pour un effet spatial futuriste
    if (backgroundRef.current) {
      anime({
        targets: backgroundRef.current,
        backgroundPositionX: ["0%", "100%"],
        easing: "easeInOutSine",
        duration: 15000,
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
        className="relative text-white bg-gradient-to-r from-amber-600 to-[#FFBF00]" // Applique le dégradé de fond
      >
        {/* Titre avec image de fond */}
        <div
          className="relative w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: 'url("/image-background.jpg")' }} // Remplace par ton image de fond
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold text-shadow-lg">
            À Propos de Manguimissou Textile
          </h1>
        </div>

        {/* Blocs de texte sous l'image */}
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          {/* Section 1 - Histoire */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-shadow-lg">Notre histoire</h3>
            <p className="text-lg mb-6">
              Fondée en 2020, Manguimissou Textile est née d'une passion commune pour les tissus
              de qualité et la mode. Notre équipe d'experts travaille sans relâche pour sélectionner
              les meilleurs matériaux et offrir une expérience client inégalée.
            </p>
          </div>

          {/* Section 2 - Mission */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-shadow-lg">Notre mission</h3>
            <p className="text-lg mb-6">
              Nous nous efforçons de créer des tissus qui inspirent et accompagnent les créateurs,
              les designers et les particuliers dans leurs projets. Notre mission est de rendre le
              textile accessible, avec une touche de qualité et de raffinement.
            </p>
          </div>

          {/* Section 3 - Valeurs */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-shadow-lg">Nos valeurs</h3>
            <p className="text-lg mb-6">
              Nous nous appuyons sur des principes solides : qualité, innovation et durabilité.
              Chaque tissu que nous fabriquons incarne ces valeurs pour garantir à nos clients des
              produits à la hauteur de leurs attentes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
