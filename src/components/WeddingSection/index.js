import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4" style={{ display: 'contents' }}>
          <WeddingInfoBox title="Mehandi Ceremony" time="04:00 PM" date="Thursday, 25 April 2024"
            description='Asados El Campeche San Sebastian de Yali'
          />
          <WeddingInfoBox title="Ring Ceremony" time="11:00 PM" date="Saturday, 27 April 2024"
            description='Asados El Campeche San Sebastian de Yali'
          />
          <WeddingInfoBox title="Sangeet Ceremony" time="2:00 PM" date="Saturday, 27 April 2024"
            description='Asados El Campeche San Sebastian de Yali'
          />
          <WeddingInfoBox title="Haldi Ceremony" time="5:00 PM" date="Saturday, 27 April 2024"
            description='Asados El Campeche San Sebastian de Yali'
          />
          <WeddingInfoBox title="Vaidik Ceremony" time="10:00 AM" date="Sunday, 28 April 2024"
            description='Asados El Campeche San Sebastian de Yali'
          />
          <WeddingInfoBox title="Varmala Ceremony" time="1:00 PM" date="Sunday, 28 April 2024"
            description='Asados El Campeche San Sebastian de Yali'
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
              <span className="bismillah">We are HAPPY TO HAVE YOU on our special day.</span>
              <h2 className="main-font main-font__wedding">Wedding Events</h2>
              <span className="sub-title sub-title__wedding">Please peruse the details of our wedding rituals and celebrations. Your presence is the perfect touch to make our special day complete:</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Ceremonia"
                  time="Se implementara en la mañana "
                  date="Sunday, 28 April 2024"
                  description="Asados El Campeche <br/>San Sebastian de Yali"
                />
                <WeddingInfoBox
                  title="Recepcion"
                  time="Se Implementara en la Tarde "
                  date="Sunday, 28 April 2024"
                  description=""
                />
              </div>
            )}
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
