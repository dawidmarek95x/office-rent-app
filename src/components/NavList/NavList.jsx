import React from 'react'
import { StyledLink, Ul } from "./NavList.styled";

const NavList = () => {
  return (
    <Ul>
      <li>
        <StyledLink to="/" end>
          Poznaj przestrzeń
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/offer">Oferta</StyledLink>
      </li>
      <li>
        <StyledLink to="/location">Lokalizacja</StyledLink>
      </li>
      <li>
        <StyledLink to="/own-office">Własne biuro</StyledLink>
      </li>
      <li>
        <StyledLink to="/contact">Kontakt</StyledLink>
      </li>
    </Ul>
  )
}

export default NavList