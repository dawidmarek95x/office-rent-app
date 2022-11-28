import styled from "styled-components";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 495px 495px 362px 362px;
  gap: 28px 30px;
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 495px 362px;
  }
`;