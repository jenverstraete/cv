import React from "react";
import ContainerPaddingLeft from "./ContainerPaddingLeft";
import TitleS from "./TitleS";
import { colors } from "../../properties";

const SectionSubtitle = props => (
  <div className="row">
    <ContainerPaddingLeft>
      <TitleS textColor={colors.textColorContrast}>{props.text}</TitleS>
    </ContainerPaddingLeft>
  </div>
);

export default SectionSubtitle;
