import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import useScrollingUp from '../hooks/useScrollingUp';
import useScrollingDown from '../hooks/useScrollingDown';

import Navigation from './Navigation';

function Header() {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderDark, setIsHeaderDark] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClick = () => {
    setIsHeaderHidden(!isHeaderHidden);
  }

  const handleClickMobile = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  // Set header height to use it in 'useInView' for rootMargin:
  const headerRef = useRef(null);
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  const { ref, inView, entry } = useInView({
    rootMargin: '-' + headerHeight + 'px'
  });

  const scrolledUp = useScrollingUp();
  const scrolledDown = useScrollingDown();

  // Check if header is dark and/or header is hidden based on scroll & if header image is inview:
  useEffect(() => {
    if(!inView) {
      setIsHeaderDark(true);
      if ( scrolledUp ) {
        setIsHeaderDark(true)
        setIsHeaderHidden(false);
      } else if ( scrolledDown ) {
        setIsHeaderHidden(true);
      }
    } else {
      setIsHeaderHidden(false);
      setIsHeaderDark(false);
    }
  }, [inView, scrolledUp, scrolledDown]);

  return (
    <header className="header">
      <div 
        className={`header__nav-bar ${isHeaderDark ? 'header__nav-bar--dark' : ''} ${isHeaderHidden ? 'header__nav-bar--hidden' : ''}`} 
        ref={headerRef}
      >
        <a href="/" className={`header__logo ${isHeaderHidden ? 'header__logo--dark' : ''}`}>
          KALIBER
        </a>

        <Navigation isMobileNavOpen={isMobileNavOpen} />

        <button 
          className={`header__button ${isHeaderHidden ? 'header__button--shown header__button--fixed' : ''} ${isHeaderDark ? 'header__button--shown' : ''}`} 
          onClick={handleClick}>
          <span className={`header__icon ${!isHeaderHidden && isHeaderDark ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>

        <button 
          className="header__button header__button--mobile"
          onClick={handleClickMobile}>
          <span className={`header__icon ${isMobileNavOpen ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>
        
      </div>
      <div className="header__image-container" ref={ref}></div>
    </header>
  );
}

export default Header;