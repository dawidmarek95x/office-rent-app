import React from "react";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import OffersSection from "../../components/OffersSection/OffersSection";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <OffersSection />
      </main>
    </>
  );
};

export default Home;
