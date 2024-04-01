import { css, keyframes } from '@emotion/core';

const animation = keyframes`
  0% { right: -300px; opacity: 0;}
  50% { right: 50px; opacity: 0.5;}
  100% {right: 0px; opacity: 1;};
`;

const animationLeft = keyframes`
  0% { left: -300px; opacity: 0;}
  50% { left: 50px; opacity: 0.5;}
  100% {left: 0px; opacity: 1;};
`;

export const styWithAnimation = (isActive) => css`
  position: relative;
  animation: ${isActive ? animation : animationLeft} 1s;
`;

export const styWrapperItem = css`
  h4 {
    color: #828282;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 4px 0;
    padding-top: 50px;
  }

  blockquote {
    margin-top: 16px !important;
  }

  .infoName {
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 2px;
    display: block;
  }

  .hide {
    display: none;
  }

  .active {
    diplay: block;
  }

  .description {
    font-size: 16px !important;
  }

  @media screen and (max-width: 400px) {
    .description {
      font-size: 14px !important;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .button-nav {
    font-size: 14px;
    padding: 5px 20px;
  }
`;

export const newstyButtonWrapper = css`
  display: flex;
  justify-content: center;
  color: white;

  .button-nav {
    width: 100px; /* Adjust as needed */
    height: 100px; /* Adjust as needed */
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    margin: 24px;
    background: rgba(128, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

