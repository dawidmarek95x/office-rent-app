import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Ul = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;

    & li {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  
  @media screen and (min-width: 1024px) {
    & li {
      margin-right: 0;
      &:nth-child(-n+2) {
        margin-right: 35px;
      }

      &:nth-last-child(-n+2) {
        margin-left: 50px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    & li {
      &:nth-child(-n+2) {
        margin-right: 62px;
      }

      &:nth-last-child(-n+2) {
        margin-left: 109px;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    margin-left: 0;
  }
`;

export const StyledLink = styled(NavLink)`
position: relative;
font-size: 16px;
line-height: 1.438;
text-align: center;
text-decoration: none;
letter-spacing: -0.32px;
color: var(--secondaryColor);

&::after {
  position: absolute;
  left: 0;
  bottom: -14px;
  content: "";
  height: 1px;
  width: 100%;
  background-color: var(--secondaryColor);
  transform: scaleX(0%);
  opacity: 0;
  transition: transform 250ms linear, opacity 250ms linear;
}


&:hover::after,
&.active::after {
  transform: scaleX(100%);
  opacity: 1;
  transition: transform 250ms linear, opacity 250ms linear;
}
`;