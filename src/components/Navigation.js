import React from 'react';

function Navigation(props) {
  return (         
    <div className={`navigation ${props.isMobileNavOpen ? 'navigation--open' : ''}`}>
      <nav className="navigation__list">
        <a href="#lorem" className="navigation__item">Lorem</a>
        <a href="#ipsum" className="navigation__item">Ipsum</a>
        <a href="#dolor" className="navigation__item">Dolor</a>
        <a href="#sit" className="navigation__item">Sit</a>
        <a href="#amet" className="navigation__item">Amet</a>
      </nav>
    </div>
  );
}

export default Navigation;
