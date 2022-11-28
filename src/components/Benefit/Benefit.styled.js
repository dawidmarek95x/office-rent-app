import styled from "styled-components";

export const Li = styled.li`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;

  & svg {
    align-self: flex-end;
  }

  & p {
    align-self: flex-start;
    padding-top: 40px;
    font-size: var(--fontSize28);
    line-height: var(--lineSpacing38);
    letter-spacing: var(--charSpacing0);
    color: var(--primaryColor);
  }
`;