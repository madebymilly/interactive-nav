import { useEffect, useState } from 'react';

/**
 * useScrollingDown custom react hook
 * @returns {boolean}
 */

const useScrollingDown = () => {
  let prevScroll = window.pageYOffset;

  const [scrollingDown, setScrollingDown] = useState(false);

  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll < currScroll;
    setScrollingDown(isScrolled);
    prevScroll = currScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  }, []);

  return scrollingDown;
}

export default useScrollingDown;