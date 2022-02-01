import { useEffect, useState } from 'react'
import { off, on } from '../utils'
/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */
const useScrollingDown = () => {
  let prevScroll = window.pageYOffset
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    const currScroll = window.pageYOffset
    const isScrolled = prevScroll < currScroll
    setScrollingUp(isScrolled)
    prevScroll = currScroll
  }
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true })
    return () => {
      off(window, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  return scrollingUp
}

export default useScrollingDown