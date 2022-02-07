import React from 'react';
import classnames from 'classnames';
import styles from '../sass/MenuButton.module.scss';

export default function MenuButton(props) {
  const { handleClick, handleClickMobile, isHeaderDark, isHeaderHidden, isMobileNavOpen } = props;
  const menuBtnClasses = classnames(styles.menuButton, {
    [styles.menuButtonShown]: isHeaderHidden || isHeaderDark,
    [styles.menuButtonFixed]: isHeaderHidden
  });
  return (
    <>
      <button 
          className={menuBtnClasses} 
          onClick={handleClick}>
          <span className={`header__icon ${!isHeaderHidden && isHeaderDark ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>

        <button 
          className={`${styles.menuButton} ${styles.menuButtonMobile}`}
          onClick={handleClickMobile}>
          <span className={`header__icon ${isMobileNavOpen ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>
    </>
  );
}
