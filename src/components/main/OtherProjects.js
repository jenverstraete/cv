import React, { Component } from "react";
import SectionTitle from "../UI/SectionTitle";
import SectionSubtitle from "../UI/SectionSubtitle";
import { colors } from "../../properties";
import Star from "../icons/Star";
import { withLocalize, Translate } from "react-localize-redux";
import Text from "../UI/Text";

class OtherProjects extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          icon={<Star fill={colors.backgroundColorContrast} width="100%" height="100%" />}
          text={this.props.translate("otherProjects")}
        />
        {this.showOtherProjectEntry("otherProject1")}
        {this.showOtherProjectEntry("otherProject2")}
      </div>
    );
  }

  showOtherProjectEntry(project) {
    return (
      <div className="section">
        <SectionSubtitle text={this.props.translate(project)} />
        <Text textColor={colors.textColorContrast}>
          <Translate id={project + "Description"} />
        </Text>
      </div>
    );
  }
}

export default withLocalize(OtherProjects);
