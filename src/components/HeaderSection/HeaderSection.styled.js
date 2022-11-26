import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 42px; 

  & > div {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    & > div {
      align-items: stretch;
      & > nav {
        padding-top: 22px;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    & > div {
      display: flex;
      
      & > nav {
        margin-left: 183px;
      }
    }
  }
`;