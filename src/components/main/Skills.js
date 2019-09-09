import React, { Component } from "react";
import SectionTitle from "../UI/SectionTitle";
import { colors } from "../../properties";
import Tools from "../icons/Tools";
import { withLocalize, Translate } from "react-localize-redux";
import Text from "../UI/Text";

class Skills extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          icon={<Tools fill={colors.backgroundColorContrast} width="100%" height="100%" />}
          text={this.props.translate("skillsTitle")}
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
        <Text textColor={colors.textColorContrast}>
          <Translate id={skill} />
        </Text>
      </div>
    );
  }
}

export default withLocalize(Skills);
