import React from 'react';

import IconIg from './assets/maps.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Join us in person</p>
        <a href="https://maps.app.goo.gl/7LVG3QA13g1wvdCP8" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Google Maps" />
              <span>Google Maps</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
