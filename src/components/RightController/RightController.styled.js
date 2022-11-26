import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bgColor};
  background: linear-gradient(to left, ${props => props.bgColor} 50%, ${props => props.bgColorOnHover} 50%) right;
  background-size: 200%;
  transition: 300ms ease-out;

  & svg {
    fill: ${props => props.bgColorOnHover};
    transition: 200ms ease-out;
  }

  &:hover {
    background-position: left;

    & svg {
      fill: ${props => props.bgColor};
    }
  }
`;

