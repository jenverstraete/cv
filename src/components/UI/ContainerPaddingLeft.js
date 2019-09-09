import React from "react";
import { dimensions } from "../../properties";

const ContainerPaddingLeft = props => (
  <div className={"inline verticalAligned " + (props.fullWidth && "fullWidth")} style={{ paddingLeft: props.largeMargin ? dimensions.distanceL : dimensions.distanceM }}>
    {props.children}
  </div>
);

export default ContainerPaddingLeft;
