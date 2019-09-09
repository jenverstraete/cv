import React, {Component} from "react";
import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import Plus from "../icons/Plus";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import { withLocalize } from "react-localize-redux";

class Advantages extends Component {
  render() {
    return (
      <div className="col-12 paddingTopM">
        <CircleIcon>
          <Plus fill={colors.backgroundColorContrast} width="100%" height="100%" />
        </CircleIcon>
        <div className="section">
          <ContainerPaddingLeft>
            <p>{this.props.translate("advantage1")}</p>
            <p>{this.props.translate("advantage2")}</p>
            <p>{this.props.translate("advantage3")}</p>
          </ContainerPaddingLeft>
        </div>
      </div>
    );
  }
}

export default withLocalize(Advantages);
