import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  background-color: var(--primaryColor);
  background-image: linear-gradient(
      var(--secondaryColorWithOpacity),
      var(--secondaryColorWithOpacity)
    ),
    url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  transition: background-size 400ms ease;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        var(--primaryColorWithOpacity),
        var(--primaryColorWithOpacity)
      ),
      url(${props => props.bgImageLarge});
  }

  &:hover {
    background-size: 110% 110%;
    transition: background-size 400ms ease;
  }

  & div {
    &:first-child {
      padding: 29px;
      margin-right: auto;
      margin-top: ${props => props.position === "bottom" ? "auto" : 0};
    }

    &:last-child {
      margin-top: auto;
    }
  }

  &:hover > div:last-child {
    background-position: left;

    & svg {
      fill: white;
    }
  }
`;