"use client";

import React from "react";

export default function Techniques() {
  return (
    <section className="bg-gray-50 py-16">
    <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Image à gauche */}
      <div className="flex justify-center">
        <img
          src="/tech.jpg" // Remplacez par le chemin réel de l'image
          alt="Teinture artisanale"
          className="rounded-xl shadow-2xl object-cover w-full h-auto md:max-w-md"
        />
      </div>

      {/* Texte à droite */}
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
          Nos techniques de création textile
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Chez <span className="font-semibold text-yellow-500">Manguimissou Textile</span>, 
          nous combinons innovation et tradition pour créer des textiles 
          uniques qui racontent une histoire. 
          Nos techniques comprennent des teintures artisanales, des motifs imprimés 
          avec précision et des traitements respectueux de l’environnement.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Chaque étape de la production est réalisée avec soin, en utilisant des teintures naturelles 
          pour réduire notre impact environnemental. 
          Nous visons à produire des tissus qui inspirent la créativité et qui respectent 
          l’environnement tout en garantissant une qualité exceptionnelle.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
          Découvrir nos créations
        </button>
      </div>
    </div>
      {/* Section sur les avantages */}
      <div className="mt-16 bg-yellow-50 py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">
            Pourquoi choisir nos techniques ?
          </h3>
          <p className="text-lg text-gray-600">
            Nos tissus sont non seulement esthétiques mais aussi durables, 
            conçus pour répondre aux besoins des créateurs les plus exigeants.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✅ Utilisation de teintures naturelles et sans produits toxiques</li>
            <li>✅ Procédés respectueux de l'environnement</li>
            <li>✅ Design exclusif et personnalisé</li>
            <li>✅ Qualité supérieure garantie</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
