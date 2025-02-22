"use client";

import React, { useState } from "react";

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Envoi des données (peut être relié à une API)
    console.log("Avis soumis :", { name, message });

    setSubmitted(true);
    setName("");
    setMessage("");
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#d88041] mb-8">Laissez votre avis</h2>
      <div className="w-4/5 mx-auto bg-white p-6 rounded-lg shadow-lg border border-[#8B4513]">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Nom */}
            <div>
              <label className="block text-left text-[#8B4513] font-semibold">Nom</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border border-[#8B4513] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Champ Avis */}
            <div>
              <label className="block text-left text-[#8B4513] font-semibold">Votre Avis</label>
              <textarea
                className="w-full mt-2 p-3 border border-[#8B4513] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                placeholder="Exprimez votre expérience"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Bouton Soumettre */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-[#A0522D] transition"
            >
              Soumettre
            </button>
          </form>
        ) : (
          <p className="text-[#228B22] font-semibold text-lg">Merci pour votre avis !</p>
        )}
      </div>
    </section>
  );
};

export default FeedbackForm;
