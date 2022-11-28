import React from "react";
import { Li } from "./BenefitsHeader.styled";

const BenefitsHeader = ({ children }) => {
  return (
    <Li>
      <h2>{children}</h2>
    </Li>
  );
};

export default BenefitsHeader;
