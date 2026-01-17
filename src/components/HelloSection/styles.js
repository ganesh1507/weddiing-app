import { css } from '@emotion/core';

export const styWrapper = css`
  padding: 80px 0;

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }

  .info {
    font-size: 18px;
    line-height: 1.6;
    max-width: 520px;
  }

  /* GRID USING EXISTING CLASS NAMES */
  .couple-wrap--grid {
    display: flex;
    align-items: center;
    gap: 48px;
  }

  .couple-half {
    flex: 1;
  }

  /* IMAGE SAFETY (NO CLS) */
  .image-wrapper {
    display: flex;
    justify-content: center;
  }

  .image-wrapper img {
    width: 100%;
    max-width: 420px;
    height: auto;

    aspect-ratio: 4976 / 7465; /* 🔑 prevents scroll jump */
    object-fit: cover;
    border-radius: 12px;
  }

  /* TABLET */
  @media (max-width: 900px) {
    .couple-wrap--grid {
      gap: 32px;
    }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    padding: 56px 0;

    .couple-wrap--grid {
      flex-direction: column;
      text-align: center;
    }

    .info {
      font-size: 16px;
      max-width: 100%;
    }

    .image-wrapper img {
      max-width: 300px;
    }
  }
`;
