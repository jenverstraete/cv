import React from "../../../node_modules/react";
import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import Home from "../icons/Home";
import Text from "../UI/Text";
import { Translate } from "react-localize-redux";

const Address = () => (
  <div className="col-12 paddingTopS">
    <CircleIcon backgroundColor={colors.backgroundColorContrast}>
      <Home fill={colors.backgroundColorAccent} width="100%" height="100%" />
    </CircleIcon>
    <ContainerPaddingLeft>
      <Text>
        <Translate id="addressLine1" />
        <br />
        <Translate id="addressLine2" />
      </Text>
    </ContainerPaddingLeft>
  </div>
);

export default Address;
