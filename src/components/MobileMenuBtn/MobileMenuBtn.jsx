import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./MobileMenuBtn.styled";

const MobileMenuBtn = () => {
  return (
    <Button type="button">
      <GiHamburgerMenu color="black" size="20px" />
    </Button>
  );
};

export default MobileMenuBtn;
