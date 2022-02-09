import { useEffect, useState } from 'react';

/**
 * useScrolling custom react hook
 * @returns {ojbect}
 */

const useScrollingDown = () => {
  let prevScroll = window.pageYOffset;

  const [scrolling, setScrolling] = useState({ scrolling: false, direction: null });

  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll !== currScroll;
    setScrolling({scrolling: isScrolled, direction: prevScroll < currScroll ? 'down' : 'up'});
    prevScroll = currScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  }, []);

  return scrolling;
}

export default useScrollingDown;