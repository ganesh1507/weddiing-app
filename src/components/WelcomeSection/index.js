import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { Link } from 'gatsby';

import WeddingImg from '@assets/images/bappa.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return (<Fragment>
      <h2 className="to-dearest-name">Dear Family & Friends,</h2>
      <h2 className="to-dearest-name">We request the honour of your presence at our Wedding.</h2>
      <h2 className="to-dearest-name">Countdown begins to our Celebrations.....!</h2>
      </Fragment>
    );

    return (
      <Fragment>
        <h3 className="to-dearest">A nuestros queridos</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <h4 className="sub-title" style={{ fontFamily: 'Times New Roman' }}>|| Shri Ganeshay Namah ||<br /></h4>
              <img style={{paddingTop: '50px' }} src={WeddingImg} alt="wedding-Pranit-Janhavi" />
              <h1 className="title">Pranit Weds Janhavi</h1>
              {renderGuestSection()}
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
              {isInvitation && (
                <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block">Lihat e-Ticket</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
