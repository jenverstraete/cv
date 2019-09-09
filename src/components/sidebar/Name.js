import React from "../../../node_modules/react";
import TitleM from "../UI/TitleM";
import { withLocalize, Translate } from "react-localize-redux";

const Name = () => (
  <div className="col-12 paddingTopS">
    <TitleM>
      <Translate id="name" />
    </TitleM>
  </div>
);

export default withLocalize(Name);
