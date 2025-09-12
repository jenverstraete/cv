import React, { Component } from "react";
import { colors } from "../../properties";
import SectionTitle from "../UI/SectionTitle";
import Graduationcap from "../icons/GraduationCap";
import Text from "../UI/Text";
import { withTranslation } from 'react-i18next';

class Courses extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          icon={<Graduationcap fill={colors.white} width="100%" height="100%" />}
          text={this.props.t("courses")}
        />

        <div className="section">
          <div className="fullWidth">
            {this.showCourseEntry("course1")}
            {this.showCourseEntry("course5")}
            {this.showCourseEntry("course2")}
            {this.showCourseEntry("course3")}
            {this.showCourseEntry("course4")}
          </div>
        </div>
      </div>
    );
  }

  showCourseEntry(course) {
    return (
      <div className="row marginBottomSmall">
        <div className="col-6">
          <Text textColor={colors.textColorDefault}>
            {this.props.t(course + "a")}
          </Text>
        </div>
        <div className="col-6">
          <Text textColor={colors.textColorDefault}>
            {this.props.t(course + "b")}
          </Text>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Courses);
