import React from "../../../node_modules/react";
import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import PhoneIcon from "../icons/Phone";
import Text from "../UI/Text";
import { Translate } from "react-localize-redux";

const Phone = () => (
  <div className="col-12 paddingTopS">
    <CircleIcon backgroundColor={colors.backgroundColorContrast}>
      <PhoneIcon fill={colors.backgroundColorAccent} width="100%" height="100%" />
    </CircleIcon>
    <ContainerPaddingLeft>
      <Text>
        <Translate id="phone" />
      </Text>
    </ContainerPaddingLeft>
  </div>
);

export default Phone;
