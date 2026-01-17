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
  /* ===== TEXT STYLES ===== */

  h4 {
    color: #828282;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 4px 0;
    padding-top: 0;
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

  .description {
    font-size: 16px !important;
    line-height: 1.6;
  }

  .hide {
    display: none;
  }

  .active {
    display: block; /* fixed typo */
  }

  /* ===== 2 SECTION LAYOUT ===== */

  .wishes-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 32px;
    align-items: center;
  }

  /* ===== IMAGE ===== */

  .wishes-image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .wishes-image__inner {
    width: 100%;
    max-width: 240px;
    aspect-ratio: 3 / 4;
    overflow: hidden;
  }

  .wishes-image__inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0;
  }

  /* ===== TEXT ALIGNMENT ===== */

  .wishes-text {
    text-align: center;
  }

  /* ===== TABLET ===== */

  @media screen and (max-width: 900px) {
    .wishes-layout {
      grid-template-columns: 200px 1fr;
      gap: 24px;
    }
  }

  /* ===== MOBILE ===== */

  @media screen and (max-width: 600px) {
    .wishes-layout {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .wishes-text {
      text-align: center;
    }

    .wishes-image__inner {
      max-width: 280px;
      margin: 0 auto;
    }

    .description {
      font-size: 15px !important;
    }
  }

  /* ===== SMALL MOBILE ===== */

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

