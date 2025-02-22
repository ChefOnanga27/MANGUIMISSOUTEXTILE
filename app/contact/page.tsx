'use client';
import { useState } from "react";
import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  // Gestion du changement des inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Effacer les erreurs lors de la saisie
  };

  // Validation du formulaire
  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis.";
      valid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Un email valide est requis.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Message envoyé :", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire après soumission
      setTimeout(() => setSuccess(false), 5000); // Effacer le message de succès après 5s
    }
  };

  return (
    <>
      <Header />

      {/* Section Contact */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center text-primary mb-12">
            Contactez-moi
          </h2>

          {/* Invitation à contacter */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              N'hésitez pas à nous contacter pour toute question ou information. Vous pouvez nous envoyer un message via ce formulaire ou nous joindre directement sur WhatsApp en cliquant sur le bouton ci-dessous.
            </p>
            <a
              href="https://wa.me/24177123456" // Remplacez par votre lien WhatsApp
              className="mt-4 inline-block bg-green-500 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all"
            >
              Contacter sur WhatsApp
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            {/* Message de succès */}
            {success && (
              <div className="mb-6 text-green-600 text-lg font-semibold text-center">
                ✅ Votre message a été envoyé avec succès !
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-primary"
                  }`}
                  placeholder="Votre nom"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-primary"
                  }`}
                  placeholder="Votre email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                    errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-primary"
                  }`}
                  placeholder="Votre message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Bouton Envoyer */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Coordonnées de contact */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-primary">Informations de contact</h3>
            <p className="text-lg text-gray-700 mt-2">📍 Libreville, Gabon</p>
            <p className="text-lg text-gray-700 mt-1">📧 contact@votre-site.com</p>
            <p className="text-lg text-gray-700 mt-1">📞 +241 77 12 34 56</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
