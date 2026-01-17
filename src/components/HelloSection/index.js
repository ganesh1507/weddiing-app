import React from 'react';
import { bool } from 'prop-types';

import CoupleImage from '@assets/images/bride-groom-img.jpg';
import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation
    ? '07 Feb 2026, Asados El Campeche, San Sebastian De Yali'
    : 'Saturday, 07 February 2026';

  return (
    <div id="fh5co-couple" css={styWrapper}>
      <div className="container">
        <div className="couple-wrap couple-wrap--grid">
          {/* LEFT CONTENT */}
          <div className="couple-half content">
            <h2 className="main-font">The Wedding Day</h2>
            <h3 className="sub-title">{finalSubtitle}</h3>

            <p className="info">
              As we step into a new chapter of our lives, we can't imagine it without your love and warmth.
              Please join us in celebrating the joy of our marriage and making this day truly special...!
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="couple-half image-wrapper">
            <img
              src={CoupleImage}
              alt="Bride and Groom"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
