import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;