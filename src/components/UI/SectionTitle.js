import React from "react";
import CircleIcon from "../icons/CircleIcon";
import ContainerPaddingLeft from "./ContainerPaddingLeft";
import TitleM from "./TitleM";
import { colors } from "../../properties";

const SectionTitle = props => (
  <div className="row">
    <div className="col-12 paddingTopM">
      <CircleIcon backgroundColor={colors.backgroundColorContrast}>{props.icon}</CircleIcon>
      <ContainerPaddingLeft>
        <TitleM textColor={colors.textColorContrast}>{props.text}</TitleM>
      </ContainerPaddingLeft>
    </div>
  </div>
);

export default SectionTitle;
