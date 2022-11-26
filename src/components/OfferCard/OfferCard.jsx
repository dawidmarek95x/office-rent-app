import React from "react";
import RightController from "../RightController/RightController";
import { Li } from "./OfferCard.styled";

const OfferCard = ({ children, bgImage, bgImageLarge, position }) => {
  return (
    <Li bgImage={bgImage} bgImageLarge={bgImageLarge} position={position}>
      <div>
        {children}
      </div>
      <RightController />
    </Li>
  );
};

export default OfferCard;
