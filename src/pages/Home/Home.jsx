import React from "react";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import ComparisonSection from "../../components/ComparisonSection/ComparisonSection";
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
        <BenefitsSection />
        <ComparisonSection />
      </main>
    </>
  );
};

export default Home;
