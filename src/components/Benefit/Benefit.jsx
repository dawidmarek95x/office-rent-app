import React from "react";
import { Li } from "./Benefit.styled";

const Benefit = ({ iconSrc, children }) => {
  return (
    <Li>
      {iconSrc}
      <p>{children}</p>
    </Li>
  );
};

export default Benefit;
