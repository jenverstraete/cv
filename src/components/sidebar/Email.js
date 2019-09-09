import React from "../../../node_modules/react";
import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import Envelope from "../icons/Envelope";
import Text from "../UI/Text";
import { Translate } from "react-localize-redux";

const Email = () => (
  <div className="col-12 paddingTopS">
    <CircleIcon backgroundColor={colors.backgroundColorContrast}>
      <Envelope fill={colors.backgroundColorAccent} width="100%" height="100%" />
    </CircleIcon>
    <ContainerPaddingLeft>
      <Text>
        <Translate id="email" />
      </Text>
    </ContainerPaddingLeft>
  </div>
);

export default Email;
