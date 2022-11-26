import React from "react";
import { Section } from "./SectionWrapper.styled";

const SectionWrapper = ({ children }) => {
  return <Section>{children}</Section>;
};

export default SectionWrapper;
