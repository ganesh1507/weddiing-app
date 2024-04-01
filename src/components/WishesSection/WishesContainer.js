import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { wishlist } from './wishlist-data';
import { styButtonWrapper, newstyButtonWrapper } from './styles';

const INTERVAL_SLIDE = 35000;

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = wishlist.length || 0;

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const renderWishlist = () => {
    return wishlist.map((w, index) => <WishesItem key={index} {...w} isActive={index === active} />);
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  const handleGroomText = () => {
    window.open('https://wa.me/917773959955?text=Greetings%20to%20sender%20from%20Ganesh-Weds-Pooja%20invitation.%0AWe%20have%20successfully%20land%20you%20to%20send%20wishes%20for%20both%20Of%20them.%0A%0AHello%20Ganesh%2C%0A%0AHere%27s%20what%20sender%20wants%20to%20wish%20you%3A%20%3Cwrite%20text%20here%3E%0ARegards%2C%20%0A%3CYour%20Name%20Here%3E', '_blank');
  };

  const handleBrideText = () => {
    window.open('https://wa.me/918796746808?text=Greetings%20to%20sender%20from%20Ganesh-Weds-Pooja%20invitation.%0AWe%20have%20successfully%20land%20you%20to%20send%20wishes%20for%20both%20Of%20them.%0A%0AHello%20Pooja%2C%0A%0AHere%27s%20what%20sender%20wants%20to%20wish%20you%3A%20%3Cwrite%20text%20here%3E%0ARegards%2C%20%0A%3CYour%20Name%20Here%3E%0A', '_blank');
  };

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      <div css={styButtonWrapper}>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Previous`}</button>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Next >`}</button>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 className="main-font" style={{fontSize: '35px', paddingTop:'27px'}}>⬇ Tap below to wish us ⬇</h3>
      </div>
      <div css={newstyButtonWrapper}>
        <button className="btn btn-sm button-nav" onClick={handleGroomText}>{`GROOM`}</button>
        <button className="btn btn-sm button-nav" onClick={handleBrideText}>{` BRIDE  `}</button>
      </div>
    </div>
  );
}

export default React.memo(WishesContainer);
