import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Div(props) {
  return (
    <animated.div style={props.springProps}>Div</animated.div>
  )
}


// const NestedComp = ({ springStyle1, springStyle2 }) => {
//   ...
//   return (
//       <animated.div style={ springStyle1 }>
//           <animated.div style={ springStyle2 }>
//               ....
//           </animated.div>
//       </animated.div>
//   )
// }