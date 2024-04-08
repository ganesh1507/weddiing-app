import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/gp.png';
import Groom from '@assets/images/pd.png';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '28 April 2024, Asados El Campeche, San Sebastian De Yali' : 'Sunday, 28 April 2024';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">The Wedding Day</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                As we step into a new chapter of our lives, we can't imagine it without your love and warmth.
                Please join us in celebrating the joy of our marriage and making this day truly special...!
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Ganesh Patil</h3>
                <p className="parent-name parent-name__top">
                  <br />
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Pooja Datrange</h3>
                <p className="parent-name">
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
