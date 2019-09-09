import React from "../../../node_modules/react";
import TitleS from "../UI/TitleS";
import Text from "../UI/Text";
import { withLocalize, Translate } from "react-localize-redux";

const Hobbies = () => (
  <div className="col-12 paddingTopM">
    <TitleS>
      <Translate id="hobbyTitle" />
    </TitleS>
    <Text>
      <Translate id="hobbyInfo" />
    </Text>
  </div>
);

export default withLocalize(Hobbies);
