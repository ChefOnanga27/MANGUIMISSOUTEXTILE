"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import des composants
import Header from "./Components/header/page";
import Hero from "./Components/hero/page";
import Techniques from "./Components/methode/page";
import FeaturedProducts from "./Components/secprod/page";
import Footer from "./Components/footer/page";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Techniques */}
      <Techniques />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Footer */}
      <Footer />
    </>
  );
}
