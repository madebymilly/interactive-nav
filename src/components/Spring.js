import React from 'react'
import { useSpring, animated } from 'react-spring'

function Spring() {
  const styles = useSpring({ to: { opacity: 1, color: "red" }, from: { opacity: 0, color: "blue" } })
  return (
    <>
      <animated.div style={styles}>I will fade in and change color</animated.div>
    </>
  );
}

export default Spring;
