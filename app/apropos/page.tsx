"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Components/header/page";
import Footer from "../Components/footer/page";

export default function About() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (backgroundRef.current) {
      anime({
        targets: backgroundRef.current,
        opacity: [0.7, 1],
        easing: "easeInOutSine",
        duration: 5000,
        direction: "alternate",
        loop: true,
      });
    }
  }, []);

  const sections = [
    {
      title: "Notre Histoire",
      content:
        "Fondée en 2020, Manguimissou Textile est née d'une passion pour les tissus de qualité et la mode. Depuis, nous nous engageons à sélectionner les meilleurs matériaux et à offrir une expérience inégalée à nos clients.",
      image: "/history.jpg",
    },
    {
      title: "Notre Mission",
      content:
        "Nous nous efforçons de proposer des tissus inspirants et accessibles aux créateurs, designers et particuliers, tout en mettant en avant qualité et raffinement.",
      image: "/mission.jpg",
    },
    {
      title: "Nos Valeurs",
      content:
        "Nos principes fondamentaux reposent sur la qualité, l'innovation et la durabilité. Chaque tissu que nous créons incarne ces valeurs pour garantir satisfaction et excellence.",
      image: "/tech.jpg",
    },
  ];

  return (
    <>
      <Header />

      <section
        id="about"
        ref={backgroundRef}
        className="relative text-gray-800 bg-gradient-to-r from-blue-100 via-white to-pink-100 overflow-hidden"
      >
        <div className="relative w-full py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold text-gray-900 drop-shadow-md"
          >
            À Propos de <span className="text-primary">Manguimissou Textile</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl text-gray-700 font-medium"
          >
            Découvrez notre passion pour le textile et l'innovation.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-20 space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="flex flex-col md:flex-row items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12"
            >
              <Image
                src={section.image}
                alt={section.title}
                width={550}
                height={350}
                className="w-full md:w-1/2 rounded-lg shadow-2xl"
              />
              <div className="md:w-1/2">
                <h3 className="text-4xl font-bold text-primary">{section.title}</h3>
                <p className="text-xl text-gray-800 leading-relaxed font-medium">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
