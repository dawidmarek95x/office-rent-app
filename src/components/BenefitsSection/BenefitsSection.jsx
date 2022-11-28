import React from "react";
import Benefit from "../Benefit/Benefit";
import BenefitsGrid from "../BenefitsGrid/BenefitsGrid";
import BenefitsHeader from "../BenefitsHeader/BenefitsHeader";
import Container from "../Container/Container";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import benefits from "../../data/benefits";
import MoreInfoBtn from "../MoreInfoBtn/MoreInfoBtn";
import { ContentWrapper } from "./BenefitsSection.styled";

const BenefitsSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <BenefitsGrid>
            <BenefitsHeader>Lorem ipsum dolor sit amet, conse</BenefitsHeader>
            {benefits.map((b) => (
              <Benefit key={b.id} iconSrc={b.iconSrc}>
                {b.content}
              </Benefit>
            ))}
          </BenefitsGrid>
          <MoreInfoBtn>Dowiedz się więcej</MoreInfoBtn>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default BenefitsSection;
