import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

import Div from './Div';

function Spring() {
  
  const styles = useSpring({ 
    to: { opacity: 1, color: "red" }, 
    from: { opacity: 0, color: "blue" } 
  });

  const [springProps, api] = useSpring(() => ({ backgroundColor: "green", color: "white" }))
  const [springProps2, api2] = useSpring(() => ({ backgroundColor: "red", color: "white" }))

  const AnimatedBox = animated(Div);

  const [isToggled, setIsToggled] = useState(false);

  const fade = useSpring({
    color: isToggled ? '#000' : 'green',
    fontSize: isToggled ? '2rem' : '3rem',
  });

  const handleClick = () => {
    setIsToggled(!isToggled);
  }
  
  const handleClick2 = () => {
    api.start({ 
      backgroundColor: springProps.backgroundColor.goal === "yellow" ? "green" : "yellow", 
      color: springProps.color.goal === "black" ? "white" : "black" 
    });
    api2.start({ 
      backgroundColor: springProps2.backgroundColor.goal === "yellow" ? "red" : "yellow", 
      color: springProps2.color.goal === "black" ? "white" : "black" 
    });
  }

  return (
    <>
      <animated.div style={styles}>I will fade in and change color</animated.div>
      <div>
        <animated.h1 style={fade}>Hello {isToggled ? 'true' : 'false'}</animated.h1>
        <button onClick={handleClick}>Toggle!</button>
      </div>
      <div>
        <animated.h2 style={springProps}>Hello again</animated.h2>
        <br/>
        <Div springProps={springProps2} />
        <button onClick={handleClick2}>Toggle!</button>
      </div>
    </>
  );
}

export default Spring;
