import React from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { Div, LinesSvg } from "./ComparisonSection.styled";

const ComparisonSection = () => {
  return (
    <SectionWrapper>
      <Div>
        <div>
          <h2>
            Lorem ipsum <span>vs własne biuro</span>
          </h2>
          <LinesSvg />
        </div>
      </Div>
    </SectionWrapper>
  );
};

export default ComparisonSection;
