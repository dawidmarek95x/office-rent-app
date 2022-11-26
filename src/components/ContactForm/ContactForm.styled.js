import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  padding: 28px 33px 33px 33px;
  background-color: var(--secondaryColor);

  & h3 {
    line-height: 1.429;
    margin-bottom: 5px;

    & span {
      display: block;
    }
  }

  & p,
  & h4 {
    line-height: 1.389;
  }

  & p {
    margin-bottom: 12px;
  }

  & h4 {
    margin-bottom: 35px;
  }

  & form {
    & input {
      border: 1px solid var(--primaryColor);
    }

    & > input {
      width: 100%;
      margin-bottom: 20px;
      padding: 13px 19px;
      line-height: 1.333;
      outline: none;
      transition: box-shadow 300ms ease;

      &:focus {
        box-shadow: 1px 1px 0 0 var(--primaryColor), -1px -1px 0 0 var(--primaryColor), -1px 1px 0 0 var(--primaryColor), 1px -1px 0 0 var(--primaryColor);
        transition: box-shadow 500ms ease;
      }

      &::placeholder {
        color: #727272;
      }
    }

    & label {
      display: flex;
      margin-bottom: 23px;

      & input {
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:checked {
          accent-color: var(--accentColor);
        }
      }

      & span {
        padding-left: 15px;
        font-size: 10px;
        line-height: 1.6;
        letter-spacing: var(--charSpacing0);
        color: #161615;
      }
    }

    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 14px 0;
      border: none;
      font-weight: var(--fontWeightBold);
      text-transform: uppercase;
      line-height: 1.333;
      letter-spacing: 3.6px;
      color: var(--secondaryColor);
      background: var(--primaryColor);
      background: linear-gradient(to left, var(--primaryColor) 50%, var(--accentColor) 50%) right;
      background-size: 200%;
      transition: 300ms ease-out;

      &:hover {
        background-position: left;
        color: var(--primaryColor);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 449px;
  }
`;
