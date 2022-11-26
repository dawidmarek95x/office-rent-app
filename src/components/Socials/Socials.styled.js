import styled from "styled-components";

export const Ul = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0;
    list-style-type: none;

    & li {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 27px;
      height: 27px;
      background-color: var(--secondaryColor);
      transition: background-color 300ms ease;

      &:hover {
        background-color: var(--accentColor);
      }
    }
  }

  @media screen and (min-width: 1920px) {
    & li {
      &:not(:last-child) {
        margin-right: 23px;
      }
    }
  }
`;