import styled from "styled-components";

export const Div = styled.div`
  width: 100%;

  & h1,
  & p {
    color: var(--secondaryColor);
  }

  & h1 {
    font-size: var(--fontSize48);
    line-height: 1.4;
    margin-bottom: 13px;
  }

  & p {
    font-size: var(--fontSize28);
    line-height: 1.448;
    margin-bottom: 20px;
  }

  

  @media screen and (min-width: 1024px) {
    width: 887px;

    & h1 {
      line-height: 1.4;
      margin-bottom: 13px;
    }

    & p {
      font-size: var(--fontSize48);
      line-height: 1.448;
    }
  }
`;
