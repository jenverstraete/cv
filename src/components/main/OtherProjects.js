import React, { Component } from "react";
import SectionTitle from "../UI/SectionTitle";
import SectionSubtitle from "../UI/SectionSubtitle";
import { colors } from "../../properties";
import Star from "../icons/Star";
import Text from "../UI/Text";
import { withTranslation } from 'react-i18next';

class OtherProjects extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          icon={<Star fill={colors.white} width="100%" height="100%" />}
          text={this.props.t("otherProjects")}
        />
        {this.showOtherProjectEntry("otherProject1")}
        {this.showOtherProjectEntry("otherProject2")}
      </div>
    );
  }

  showOtherProjectEntry(project) {
    return (
      <div className="section">
        <SectionSubtitle text={this.props.t(project)} />
        <Text textColor={colors.textColorDefault}>
          {this.props.t(project + "Description")}
        </Text>
      </div>
    );
  }
}

export default withTranslation()(OtherProjects);
