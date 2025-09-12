import React, { Component } from "react";
import SectionTitle from "../UI/SectionTitle";
import { colors } from "../../properties";
import Tools from "../icons/Tools";
import Text from "../UI/Text";
import { withTranslation } from 'react-i18next';

class Skills extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          icon={<Tools fill={colors.white} width="100%" height="100%" />}
          text={this.props.t("skillsTitle")}
        />
        <div className="section">
          {this.showSkill("skills1")}
          {this.showSkill("skills2")}
          {this.showSkill("skills3")}
        </div>
      </div>
    );
  }

  showSkill(skill) {
    return (
      <div className="paddingTopS">
        <Text textColor={colors.textColorDefault}>
          {this.props.t(skill)}
        </Text>
      </div>
    );
  }
}

export default withTranslation()(Skills);
