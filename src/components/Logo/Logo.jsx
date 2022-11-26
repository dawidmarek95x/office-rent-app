import React from "react";
import { LogoLink } from "./Logo.styled";

const Logo = ({ children }) => {
  return <LogoLink to="/">{children}</LogoLink>;
};

export default Logo;
