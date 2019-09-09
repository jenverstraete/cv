import React, { Component } from "react";
import { colors } from "../../properties";
import TitleL from "../UI/TitleL";
import { withLocalize } from "react-localize-redux";

class Function extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <TitleL textColor={colors.textColorContrast}>{this.props.translate("function")}</TitleL>
        </div>
      </div>
    );
  }
}

export default withLocalize(Function);
