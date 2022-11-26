import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  padding: 20px 0;
  text-align: center;

  h1 {
    font-size: 64px;
    font-weight: 700;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: blue;

  &:hover,
  &:focus {
    color: #FFCC48;
  }
`;