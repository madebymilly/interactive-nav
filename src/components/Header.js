import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import useScrollingUp from '../hooks/useScrollingUp';
import useScrollingDown from '../hooks/useScrollingDown';

function Header() {

  const scrolledUp = useScrollingUp()
  const scrolledDown = useScrollingDown()

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null)

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  const { ref, inView, entry } = useInView({
    rootMargin: '-' + headerHeight + 'px'
  });

  let up = false;
  let down = false;

  if (!inView && scrolledUp) {
    up = true;
  } else if (!inView && scrolledDown) {
    down = true;
  }

  return (
    <header className="header">
      <div 
        className={`header__nav-bar ${up ? 'header__nav-bar--dark' : ''} ${down ? 'header__nav-bar--hidden' : ''}`} 
        ref={headerRef}
      >
        <a href="/" className="header__logo">
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

        <button className="header__button">
          <span className="header__icon">&nbsp;</span>
        </button>
        
      </div>
      <div className="header__image-container" ref={ref}></div>
    </header>
  );
}

export default Header;
