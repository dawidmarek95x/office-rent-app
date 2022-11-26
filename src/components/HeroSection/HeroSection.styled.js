import styled from "styled-components";

export const Section = styled.section`
  padding-top: 120px;
  background-color: var(--primaryColor);
  background-image: linear-gradient(
      var(--primaryColorWithOpacity),
      var(--primaryColorWithOpacity)
    ),
    url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        var(--primaryColorWithOpacity),
        var(--primaryColorWithOpacity)
      ),
      url(${props => props.bgImageLarge});
  }

  @media screen and (min-width: 768px) {
    padding-top: 178px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 7px;

    & > div {
      &:first-child {
        margin-right: auto;
        padding-top: 339px;
      }
    }
  }
`;
