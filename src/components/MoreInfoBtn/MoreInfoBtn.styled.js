import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0%, 100% {
    opacity: 1;
  }
  1% {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  display: flex;
  max-width: 380px;
  width: 100%;
  height: 78px;
  background: ${props => props.bgColor || "#000000"};
  padding: 0;
  border: none;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: var(--fontWeightBold);
    letter-spacing: 3.55px;
    line-height: 1.333;
    text-transform: uppercase;
    color: ${props => props.color || "#FFFFFF"};
    background: ${props => props.bgColor || "#000000"};
  }

  &:hover {
    animation: ${flash} 1000ms both;

    & span {
      background-color: ${props => props.bgColorOnHover || "#FFCC48"};
      color: ${props => props.color || "#000000"};
      transition: 100ms ease-out;
    }
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 27px 25px;
    background-color: ${props => props.bgColor || "#000000"};

    & svg {
      fill: ${props => props.color || "#FFFFFF"};
    }
  }
`;