import React from "react";
import { colors } from "../../properties";

const TitleM = props => (
  <h2 className="centeredText" style={{ color: props.textColor ? props.textColor : colors.textColorAccent }}>
    {props.children}
  </h2>
);

export default TitleM;
