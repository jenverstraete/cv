import React from "../../../node_modules/react";
import Text from "../UI/Text";
import { withLocalize, Translate } from "react-localize-redux";

const Languages = () => (
  <div className="col-12 paddingTopS">
    <Text centered={true}>
      <Translate id="languages" />
    </Text>
  </div>
);

export default withLocalize(Languages);
