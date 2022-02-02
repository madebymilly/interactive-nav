import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import useScrollingUp from '../hooks/useScrollingUp';
import useScrollingDown from '../hooks/useScrollingDown';

function Header() {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isNavOpen, toggleIsNavOpen] = useState(false); // Hook?
  const [isHeaderDark, setIsHeaderDark] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  const handleClick = () => {
    toggleIsNavOpen(!isNavOpen);
    setIsHeaderHidden(isNavOpen);
  }

  const { ref, inView, entry } = useInView({
    rootMargin: '-' + headerHeight + 'px'
  });

  const scrolledUp = useScrollingUp();
  const scrolledDown = useScrollingDown();

  useEffect(() => {
    if(!inView) {
      // console.log('scrolled up', scrolledUp);
      // console.log('scrolled down', scrolledDown);
      // console.log('isNavOpen', isNavOpen);
      setIsHeaderDark(true);
      toggleIsNavOpen(true);
      if ( scrolledUp ) {
        setIsHeaderDark(true)
        setIsHeaderHidden(false);
        toggleIsNavOpen(true);
      } else if ( scrolledDown ) {
        setIsHeaderHidden(true);
        toggleIsNavOpen(false);
      }
    } else {
      setIsHeaderHidden(false);
      setIsHeaderDark(false);
      toggleIsNavOpen(false);
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

        <div className="navigation">
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
          <span className={`header__icon ${isNavOpen ? 'header__icon--close' : ''}`}>&nbsp;</span>
        </button>
        
      </div>
      <div className="header__image-container" ref={ref}></div>
    </header>
  );
}

export default Header;
