import React from "react";
import { Ul } from "./OffersList.styled";

const OffersList = ({ children }) => {
  return <Ul>{children}</Ul>;
};

export default OffersList;