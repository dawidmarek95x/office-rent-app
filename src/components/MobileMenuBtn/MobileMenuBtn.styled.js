import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: var(--secondaryColor);

  &:hover {
    background-color: var(--accentColor);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;