import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import useScrollingUp from '../hooks/useScrollingUp';
import useScrollingDown from '../hooks/useScrollingDown';

function Header() {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isHeaderDark, setIsHeaderDark] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  const handleClick = () => {
    setIsHeaderHidden(!isHeaderHidden);
  }

  const handleClickMobile = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  const { ref, inView, entry } = useInView({
    rootMargin: '-' + headerHeight + 'px'
  });

  const scrolledUp = useScrollingUp();
  const scrolledDown = useScrollingDown();

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

        <div className={`navigation ${isMobileNavOpen ? 'navigation--open' : ''}`}>
          <nav className="navigation__list">
            <a href="#lorem" className="navigation__item">Lorem</a>
            <a href="#ipsum" className="navigation__item">Ipsum</a>
            <a href="#dolor" className="navigation__item">Dolor</a>
            <a href="#sit" className="navigation__item">Sit</a>
            <a href="#amet" className="navigation__item">Amet</a>
          </nav>
        </div>

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