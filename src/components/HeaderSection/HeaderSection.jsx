import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import { Header } from "./HeaderSection.styled";

const HeaderSection = () => {
  return (
    <Header>
      <Container>
        <Logo>LOGO</Logo>
        <MainNav />
      </Container>
    </Header>
  );
};

export default HeaderSection;
