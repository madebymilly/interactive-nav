import { useEffect, useState } from 'react';

/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */

const useScrollingUp = () => {
  let prevScroll = window.pageYOffset;

  const [scrollingUp, setScrollingUp] = useState(false);

  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled);
    prevScroll = currScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  }, []);

  return scrollingUp;
}

export default useScrollingUp;