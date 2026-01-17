import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">You are very special to us</h2>
                <p className="info">
                  “They say that when you meet the love of your life, time stops… And, it's true.
                  What they don't say is that when it starts up again, it moves even faster, to make up for lost time.”
                </p>
                <h3 style={{ fontFamily: 'Your Font Name', color: '#800000', fontWeight: 'bold', paddingTop: '80px' }}>
                  We're eagerly anticipating the joy of celebrating alongside you on our big day! Join us as we count down the moments, excited to share this special occasion with you!...!
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2026 Pranit Weds Janhavi. All Rights Reserved.</small>

              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
