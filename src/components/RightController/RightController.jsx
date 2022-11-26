import React from "react";
import { TfiArrowRight } from "react-icons/tfi";
import { Div } from "./RightController.styled";

const RightController = ({
  width = "130px",
  height = "130px",
  arrowWidth = "25px",
  arrowHeight = "22px",
  bgColor = "white",
  arrowColor = "black",
}) => {
  return (
    <Div width={width} height={height} bgColor={bgColor} bgColorOnHover={arrowColor}>
      <TfiArrowRight
        style={{
          width: arrowWidth,
          height: arrowHeight,
        }}
      />
    </Div>
  );
};

export default RightController;

