import React, { Component } from "react";
import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import Minus from "../icons/Minus";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import { withTranslation } from 'react-i18next';

class Disadvantages extends Component {
  render() {
    return (
      <div className="col-12 paddingTopM">
        <CircleIcon>
          <Minus fill={colors.backgroundColorContrast} width="100%" height="100%" />
        </CircleIcon>
        <div className="section">
          <ContainerPaddingLeft>
            <p>{this.props.t("disadvantage1")}</p>
            <p>{this.props.t("disadvantage2")}</p>
            <p>{this.props.t("disadvantage3")}</p>
          </ContainerPaddingLeft>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Disadvantages);
