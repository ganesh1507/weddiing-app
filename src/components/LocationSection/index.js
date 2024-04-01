import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Our Wedding Venue</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click To Open In Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Dwarkamai Hall, SaiLakshmi Lawns Gondur, Dhule</strong>
                </a>{' '}
                <br />
                Venue
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.082057236481!2d74.70916677613403!3d20.94921959050405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec54015b230d9%3A0xee48a797210d879d!2sSai%20laxmi%20lawns!5e0!3m2!1sen!2sus!4v1710131714917!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '2px solid #ccc', }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Wedding Patil & Datrange"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
