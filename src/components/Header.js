import React from 'react';

import headerImage from '../img/header-1-large.jpg';

// TODO: move nav to sep component?!

function Header() {
  return (
    <header className="header">
      <div className={`header__nav-bar`}>
      {/* <div className={`header__nav-bar header__nav-bar--dark`}> */}
        <a href="/" className="header__logo">
          KALIBER
        </a>
        <nav className="navigation">
          {/* <nav className={`nav ${up ? 'stickyNavUp' : ''} ${down ? 'stickyNavDown' : ''}`}>navigation</nav> */}
          <a href="#" className="navigation__item">Lorem</a>
          <a href="#" className="navigation__item">Ipsum</a>
          <a href="#" className="navigation__item">Dolor</a>
          <a href="#" className="navigation__item">Sit</a>
          <a href="#" className="navigation__item">Amet</a>
          <button className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </button>
        </nav>
        
      </div>
      <div className="header__image-container"></div>
    </header>
  );
}

export default Header;
