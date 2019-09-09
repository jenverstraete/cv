import React from "react";
import { colors } from "../../properties";

const TitleL = props => (
  <h1 className="centeredText" style={{ color: props.textColor ? props.textColor : colors.textColorAccent }}>
    {props.children}
  </h1>
);

export default TitleL;
