import styled from "styled-components";

export const Ul = styled.ul`
  display: grid;
  list-style-type: none;
  padding: 0;
  grid-template-columns: 1fr;
  gap: 50px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 100px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 109px 137px;
  }
`;