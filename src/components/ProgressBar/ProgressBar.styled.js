import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  max-width: 290px;
  width: 100%;

  & span {
    margin: 10px;
    font-weight: var(--fontWeightBold);
    line-height: 1.056;
    color: var(--secondaryColor);
    cursor: default;

    &:last-child {
      text-align: right;
    }
  }

  & div {
    max-width: 208px;
    width: 100%;
    height: 6px;
    margin: 0 auto;
    background: linear-gradient(to right, white 80%, black 80% , black 100%);
  }

  @media screen and (min-width: 768px) {
    & span {
    margin: 0;
  }
  }
`;