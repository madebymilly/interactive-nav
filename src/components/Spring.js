import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

function Spring() {
  const styles = useSpring({ to: { opacity: 1, color: "red" }, from: { opacity: 0, color: "blue" } });

  const [isToggled, setIsToggled] = useState(false);

  const fade = useSpring({
    color: isToggled ? '#000' : 'green',
    fontSize: isToggled ? '2rem' : '3rem',
  });

  const handleClick = () => {
    setIsToggled(!isToggled);
  }

  return (
    <>
      <animated.div style={styles}>I will fade in and change color</animated.div>
      <div>
        <animated.h1 style={fade}>Hello {isToggled ? 'true' : 'false'}</animated.h1>
        <button onClick={handleClick}>Toggle!</button>
      </div>
    </>
  );
}

export default Spring;
