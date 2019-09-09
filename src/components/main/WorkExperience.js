import React, { Component } from "react";
import { colors } from "../../properties";
import SectionTitle from "../UI/SectionTitle";
import Suitcase from "../icons/Suitcase";
import SectionSubtitle from "../UI/SectionSubtitle";
import Text from "../UI/Text";
import { withLocalize } from "react-localize-redux";

class WorkExperience extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          icon={<Suitcase fill={colors.backgroundColorContrast} width="100%" height="100%" />}
          text={this.props.translate("workExperience")}
        />
        <div className="section">{this.employer1}</div>
        <div className="section">{this.employer2}</div>
      </div>
    );
  }

  get employer1() {
    return (
      <div>
        <SectionSubtitle text={this.props.translate("employer1info")} />
        {this.employer1project1}
        {this.employer1project2}
        {this.employer1_OtherProjects}
      </div>
    );
  }

  get employer1project1() {
    return (
      <div>
        <Text italic={true} textColor={colors.textColorContrast} underlined={true}>
          {this.props.translate("employer1projectTitle1")}
        </Text>
        <Text textColor={colors.textColorContrast}>{this.props.translate("employer1projectDescription1")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorContrast}>
          {this.props.translate("employer1project1skills1")}
          <br />
          {this.props.translate("employer1project1skills2")}
          <br />
          {this.props.translate("employer1project1skills3")}
        </Text>
      </div>
    );
  }

  get employer1project2() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorContrast} underlined={true}>
          {this.props.translate("employer1projectTitle2")}
        </Text>
        <Text textColor={colors.textColorContrast}>{this.props.translate("employer1projectDescription2")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorContrast}>
          {this.props.translate("employer1project2skills1")}
          <br />
          {this.props.translate("employer1project2skills2")}
        </Text>
      </div>
    );
  }

  get employer1_OtherProjects() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorContrast} underlined={true}>
          {this.props.translate("otherProjects")}
        </Text>
        <Text italic={true} textColor={colors.textColorContrast}>
          {this.props.translate("employer1projectTitle3")}
        </Text>
      </div>
    );
  }

  get employer2() {
    return (
      <div>
        <SectionSubtitle text={this.props.translate("employer2info")} />
        {this.employer2project1}
        {this.employer2project2}
      </div>
    );
  }

  get employer2project1() {
    return (
      <div>
        <Text italic={true} textColor={colors.textColorContrast} underlined={true}>
          {this.props.translate("employer2projectTitle1")}
        </Text>
        <Text textColor={colors.textColorContrast}>{this.props.translate("employer2projectDescription1")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorContrast}>
          {this.props.translate("employer2project1skills1")}
        </Text>
      </div>
    );
  }

  get employer2project2() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorContrast} underlined={true}>
          {this.props.translate("employer2projectTitle2")}
        </Text>
        <Text textColor={colors.textColorContrast}>{this.props.translate("employer2projectDescription2")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorContrast}>
          {this.props.translate("employer2project2skills1")}
        </Text>
      </div>
    );
  }
}

export default withLocalize(WorkExperience);
