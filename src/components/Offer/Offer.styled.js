import styled from "styled-components";

export const Article = styled.article`
  padding: 25px;
  background-color: var(--secondaryColor);

  & > h3 {
    position: relative;
    padding-top: 8px;
    padding-left: 10px;
    z-index: 0;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      content: "";
      width: 42px;
      height: 42px;
      background-color: var(--accentColor);
      z-index: -1;
    }

    &::after {
      position: absolute;
      bottom: -26px;
      left: 0;
      display: block;
      content: "";
      width: 49px;
      height: 5px;
      background-color: var(--primaryColor);
    }

    & > span {
      display: block;
    }
  }

  & > p {
    margin-top: 36px;
    line-height: 1.389;
  }
`;