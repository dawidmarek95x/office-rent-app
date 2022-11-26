import React from "react";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import NavList from "../NavList/NavList";
import Socials from "../Socials/Socials";
import { Nav } from "./MainNav.styled";

const MainNav = () => {
  return (
    <Nav>
      <NavList />
      <Socials />
      <MobileMenuBtn />
    </Nav>
  );
};

export default MainNav;
