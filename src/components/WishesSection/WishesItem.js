import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';

function WishesItem({ image, name, infoName, description, isActive }) {
  if (!isActive) return null;

  const renderItem = () => {
    return (
      <div className="item" css={styWrapperItem}>
        <div className={`testimony-slide ${isActive ? 'active' : 'hide'}`}>
          <div className="wishes-layout">
            {/* IMAGE SECTION */}
            <div className="wishes-image">
              <div className="wishes-image__inner">
                <img src={image} alt="user" loading="lazy" />
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="wishes-text">
              <h4>{name}</h4>
              <span className="infoName">{infoName}</span>
              <blockquote>
                <p className="description">{description}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

    );
  };

  return <div css={styWithAnimation(isActive)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  infoName: string.isRequired,
  description: string.isRequired,
  isActive: bool.isRequired,
};

export default React.memo(WishesItem);
