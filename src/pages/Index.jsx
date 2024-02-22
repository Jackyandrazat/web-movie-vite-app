// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import { Hero, HeroFigure } from "../components/Hero";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroFigure />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Index;
