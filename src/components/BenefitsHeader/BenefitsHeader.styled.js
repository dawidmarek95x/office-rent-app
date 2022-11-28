import styled from "styled-components";

export const Li = styled.li`
  padding-bottom: 70px;

  & h2 {
    position: relative;
    line-height: 1.208;

    &::after {
      position: absolute;
      left: 0;
      bottom: -57px;
      content: "";
      display: block;
      width: 130px;
      height: 10px;
      background-color: var(--primaryColor);
    }
  }
`;