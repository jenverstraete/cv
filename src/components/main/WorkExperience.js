import React, { Component } from "react";
import { colors } from "../../properties";
import SectionTitle from "../UI/SectionTitle";
import Suitcase from "../icons/Suitcase";
import SectionSubtitle from "../UI/SectionSubtitle";
import Text from "../UI/Text";
import { withTranslation } from 'react-i18next';

class WorkExperience extends Component {

  render() {
    return (
      <div>
        <SectionTitle
          icon={<Suitcase fill={colors.white} width="100%" height="100%" />}
          text={this.props.t("workExperience")}
        />
        <div className="section">{this.employer3}</div>
        <div className="section">{this.employer2}</div>
        <div className="section">{this.employer1}</div>
      </div>
    );
  }

  get employer3() {
    return (
      <div>
        <SectionSubtitle text={this.props.t("employer3info")} />
        {this.employer3project1}
        {this.employer3project2}
        {this.employer3_otherProjects}
      </div>
    );
  }

  get employer3project1() {
    return (
      <div>
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer3projectTitle1")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer3projectDescription1")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer3project1skills1")}
        </Text>
      </div>
    );
  }

  get employer3project2() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer3projectTitle2")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer3projectDescription2")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer3project2skills1")}
        </Text>
      </div>
    );
  }

  get employer3_otherProjects() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer3projectTitle3")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer3projectDescription3")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer3project3skills1")}
        </Text>
      </div>
    );
  }

  get employer2() {
    return (
      <div>
        <SectionSubtitle text={this.props.t("employer2info")} />
        {this.employer2project1}
        {this.employer2project2}
      </div>
    );
  }

  get employer2project1() {
    return (
      <div>
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer2projectTitle1")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer2projectDescription1")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer2project1skills1")}
        </Text>
      </div>
    );
  }

  get employer2project2() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer2projectTitle2")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer2projectDescription2")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer2project2skills1")}
        </Text>
      </div>
    );
  }

  get employer1() {
    return (
      <div>
        <SectionSubtitle text={this.props.t("employer1info")} />
        {this.employer1project1}
        {this.employer1project2}
        {this.employer1_OtherProjects}
      </div>
    );
  }

  get employer1project1() {
    return (
      <div>
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer1projectTitle1")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer1projectDescription1")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer1project1skills1")}
          <br />
          {this.props.t("employer1project1skills2")}
          <br />
          {this.props.t("employer1project1skills3")}
        </Text>
      </div>
    );
  }

  get employer1project2() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("employer1projectTitle2")}
        </Text>
        <Text textColor={colors.textColorDefault}>{this.props.t("employer1projectDescription2")}</Text>
        <Text italic={true} bold={true} small={true} textColor={colors.textColorDefault}>
          {this.props.t("employer1project2skills1")}
          <br />
          {this.props.t("employer1project2skills2")}
        </Text>
      </div>
    );
  }

  get employer1_OtherProjects() {
    return (
      <div className="paddingTopM">
        <Text italic={true} textColor={colors.textColorDefault} underlined={true}>
          {this.props.t("otherProjects")}
        </Text>
        <Text italic={true} textColor={colors.textColorDefault}>
          {this.props.t("employer1projectTitle3")}
        </Text>
      </div>
    );
  }
}

export default withTranslation()(WorkExperience);
