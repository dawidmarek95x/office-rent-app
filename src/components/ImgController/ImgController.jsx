import React from "react";
import LeftController from "../LeftController/LeftController";
import ProgressBar from "../ProgressBar/ProgressBar";
import RightController from "../RightController/RightController";
import { Div } from "./ImgController.styled";

const ImgController = () => {
  return (
    <Div>
      <LeftController
        width="160px"
        height="118px"
        arrowWidth="38px"
        arrowHeight="34px"
      />
      <RightController
        width="145px"
        height="118px"
        arrowWidth="38px"
        arrowHeight="34px"
      />
      <ProgressBar />
    </Div>
  );
};

export default ImgController;
