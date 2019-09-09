import React from "react";
import { colors } from "../../properties";

const Text = props => (
  <p
    className={(props.centered ? "centeredText" : "") + " " + (props.underlined ? "underlined" : "")}
    style={{
      color: props.textColor ? props.textColor : colors.textColorDefault,
      marginBottom: 0,
      fontStyle: props.italic ? "italic" : "normal",
      fontWeight: props.bold ? "bold": "",
      fontSize: props.small ? "small": ""
    }}
  >
    {props.children}
  </p>
);

export default Text;
