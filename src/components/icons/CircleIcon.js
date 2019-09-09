import React from "react";
import { dimensions, colors } from "../../properties";

const CircleIcon = props => (
  <div
    className="circle inline"
    style={{
      backgroundColor: props.backgroundColor ? props.backgroundColor : colors.backgroundColorDefault,
      width: dimensions.iconSize,
      height: dimensions.iconSize,
    }}
  >
    {props.children}
  </div>
);

export default CircleIcon;
