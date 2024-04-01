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
          <WeddingInfoBox title="Mehandi" time="05:00 PM" date="Thursday, 25 April 2024"
            description='Anand Mangal Soc, Opp Tikhat <br /> Pahunchar, Gangapur road, Nashik'
          />
          <WeddingInfoBox title="Ring Ceremony" time="11:00 PM" date="Saturday, 27 April 2024"
            description='Dwarkamai, Sai Lakshmi Lawns,<br />Near Dhule airport, Gondur, Dhule'
          />
          <WeddingInfoBox title="Sangeet" time="03:00 PM" date="Saturday, 27 April 2024"
            description='Dwarkamai, Sai Lakshmi Lawns,<br />Near Dhule airport, Gondur, Dhule'
          />
          <WeddingInfoBox title="Haldi & DJ" time="05:00 PM" date="Saturday, 27 April 2024"
            description='Dwarkamai, Sai Lakshmi Lawns,<br />Near Dhule airport, Gondur, Dhule'
          />
          <WeddingInfoBox title="Saptapadi" time="09:30 AM" date="Sunday, 28 April 2024"
            description='Dwarkamai, Sai Lakshmi Lawns,<br /> Near Dhule airport, Gondur, Dhule'
          />
          <WeddingInfoBox title="Jaymala" time="01:00 PM" date="Sunday, 28 April 2024"
            description='Dwarkamai, Sai Lakshmi Lawns,<br /> Near Dhule airport, Gondur, Dhule'
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
