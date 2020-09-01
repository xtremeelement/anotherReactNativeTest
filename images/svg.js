import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export default function SVG(props) {
  return (
    <Svg width={100} height={50} viewBox="0 0 48 1" {...props}>
      <Path d="M0 0h48v1H0z" fill="black" fillRule="evenodd" />
    </Svg>
  )
}



