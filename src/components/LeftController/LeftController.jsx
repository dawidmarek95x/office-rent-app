import React from "react";
import { TfiArrowLeft } from "react-icons/tfi";
import { Div } from "./LeftController.styled";

const LeftController = ({
  width = "130px",
  height = "130px",
  arrowWidth = "25px",
  arrowHeight = "22px",
  bgColor = "white",
  arrowColor = "black",
}) => {
  return (
    <Div width={width} height={height} bgColor={bgColor} bgColorOnHover={arrowColor}>
      <TfiArrowLeft 
        style={{
          width: arrowWidth,
          height: arrowHeight,
        }}
      />
    </Div>
  );
};

export default LeftController;
