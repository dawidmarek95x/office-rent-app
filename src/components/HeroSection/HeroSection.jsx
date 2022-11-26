import React from "react";
import CompanySlogan from "../CompanySlogan/CompanySlogan";
import ContactForm from "../ContactForm/ContactForm";
import Container from "../Container/Container";
import ImgController from "../ImgController/ImgController";
import { Section, Wrapper } from "./HeroSection.styled";
import heroBg from "../../data/heroBg";

const HeroSection = () => {
  return (
    <Section bgImage={heroBg[0].bgImage} bgImageLarge={heroBg[0].bgImageLarge}>
      <Container>
        <Wrapper>
          <CompanySlogan />
          <ContactForm />
        </Wrapper>
      </Container>
      <ImgController />
    </Section>
  );
};

export default HeroSection;
