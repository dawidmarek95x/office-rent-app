import styled from "styled-components";
import backgroundMobileImg from "../../images/comparison/background-mobile.jpg";
import backgroundImg from "../../images/comparison/background.jpg";
import backgroundImgDpi from "../../images/comparison/background@2x.jpg";
import { ReactComponent as Lines } from "../../images/comparison/lines.svg";

export const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 72px;
  padding-left: 50px;

  @media screen and (min-width: 768px) {
    padding-left: 70px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 290px;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 335px;
  }

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 211px;
    padding-bottom: 265px;
    background-image: url(${backgroundMobileImg});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
      padding-top: 211px;
      padding-bottom: 265px;
      background-image: url(${backgroundImg});

      @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${backgroundImgDpi});
      }
    }

    @media screen and (min-width: 1024px) {
      background-size: cover;
    }

    & > h2 {
      position: relative;
      display: inline-block;
      margin-left: -30px;
      padding: 15px;
      font-size: var(--fontSize28);
      line-height: var(--lineSpacing38);
      letter-spacing: var(--charSpacing0);
      background-color: white;
      z-index: 1;

      @media screen and (min-width: 480px) {
        font-size: 38px;
        line-height: 1.265;
      }

      @media screen and (min-width: 768px) {
        display: block;
        background-color: transparent;
        font-size: var(--fontSize48);
        line-height: var(--lineSpacing72);
      }

      @media screen and (min-width: 1440px) {
        margin-left: -160px;
        font-size: var(--fontSize65);
        line-height: 1.277;
      }

      & > span {
        display: block;
      }

      &::after {
        position: absolute;
        bottom: -183px;
        left: 0;
        width: 230px;
        height: 20px;
        content: "";
        background-color: var(--primaryColor);

        @media screen and (min-width: 768px) {
          width: 460px;
        }

        @media screen and (min-width: 1440px) {
          width: 610px;
        }
      }
    }
  }
`;

export const LinesSvg = styled(Lines)`
  position: absolute;
  top: -72px;
  right: 10px;

  @media screen and (min-width: 768px) {
    right: 40px;
  }

  @media screen and (min-width: 1024px) {
    right: 70px;
  }

  @media screen and (min-width: 1440px) {
    right: 130px;
  }

  @media screen and (min-width: 1920px) {
    right: 175px;
  }
`;