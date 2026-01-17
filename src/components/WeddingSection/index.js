import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ }) {
  const renderFunctionDetails = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4" style={{ display: 'contents' }}>
          <WeddingInfoBox
            title="Mehendi- Groom"
            time="06:00 PM"
            date="Thursday, 05 February 2026"
            description="R.H No-1, Gokul Park,<br />Near Tulip Hospital,<br />Pathardi Phata, Nashik"
          />

          <WeddingInfoBox
            title="Mehendi- Bride"
            time="06:00 PM"
            date="Thursday, 05 February 2026"
            description="58, Mahalaxmi Row Bunglow,<br/>Near renuka jewellers,<br/> Damodar Nagar, Nashik"
          />

          <WeddingInfoBox
            title="Haldi & Sangeet"
            time="06:00 PM to 10:00 PM"
            date="Friday, 06 February 2026"
            description="Sanjivani AC Banquet Hall & Lawns,<br />Jatra Hotel Nandur Naka Link Road,<br />Panchavati, Nashik"
          />

          <WeddingInfoBox
            title="Saptapadi"
            time="09:30 AM"
            date="Saturday, 07 February 2026"
            description="Sanjivani AC Banquet Hall & Lawns,<br />Jatra Hotel Nandur Naka Link Road,<br />Panchavati, Nashik"
          />

          <WeddingInfoBox
            title="Varmala"
            time="12:35 PM"
            date="Saturday, 07 February 2026"
            description="Sanjivani AC Banquet Hall & Lawns,<br />Jatra Hotel Nandur Naka Link Road,<br />Panchavati, Nashik"
          />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <span className="thankgod">We are HAPPY TO HAVE YOU on our special day.</span> */}
              <h2 className="main-font main-font__wedding">Wedding Events</h2>
              <span className="sub-title sub-title__wedding">Please peruse the details of our wedding rituals and celebrations. Your presence is the perfect touch to make our special day complete:</span>
            </div>
          </div>
          <div className="row">
            {renderFunctionDetails()}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
