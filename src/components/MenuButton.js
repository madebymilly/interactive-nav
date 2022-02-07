import React from 'react';
import styles from '../sass/MenuButton.module.scss';

export default function MenuButton(props) {
  const { handleClick, handleClickMobile, isHeaderDark, isHeaderHidden, isMobileNavOpen } = props;
  return (
    <>
      <button 
          className={`${styles.menuButton} header__button ${isHeaderHidden ? 'header__button--shown header__button--fixed' : ''} ${isHeaderDark ? 'header__button--shown' : ''}`} 
          onClick={handleClick}>
          <span className={`header__icon ${!isHeaderHidden && isHeaderDark ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>

        <button 
          className={`${styles.menuButton} header__button header__button--mobile`}
          onClick={handleClickMobile}>
          <span className={`header__icon ${isMobileNavOpen ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>
    </>
  );
}
