import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  
  & div {
    &:last-child {
      margin: 0 10px;
    }
  }
`;