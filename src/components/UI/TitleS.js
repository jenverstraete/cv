import React from "react";
import { colors } from "../../properties";

const TitleS = props => (
  <h4 style={{ color: props.textColor ? props.textColor : colors.textColorAccent }}>
    {props.children}
  </h4>
);

export default TitleS;
