import React from "react";
import Container from "../Container/Container";
import Offer from "../Offer/Offer";
import OfferCard from "../OfferCard/OfferCard";
import OffersList from "../OffersList/OffersList";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import offers from "../../data/offers";

const OffersSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <OffersList>
          {offers.map((offer) => (
            <OfferCard key={offer.id} bgImage={offer.bgImage} bgImageLarge={offer.bgImageLarge} position={offer.position}>
              <Offer content={offer.content} />
            </OfferCard>
          ))}
        </OffersList>
      </Container>
    </SectionWrapper>
  );
};

export default OffersSection;
