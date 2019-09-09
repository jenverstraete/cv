import React from "../../../node_modules/react";
import TitleS from "../UI/TitleS";
import Text from "../UI/Text";
import { withLocalize, Translate } from "react-localize-redux";

const Aboutme = () => (
  <div className="col-12 paddingTopM">
    <TitleS>
      <Translate id="generalTitle" />
    </TitleS>
    <Text>
      <Translate id="generalInfo" />
    </Text>
  </div>
);

export default withLocalize(Aboutme);
