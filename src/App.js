import React, { Component } from "react";
import "./App.css";
import { withLocalize } from "react-localize-redux";
import LanguageSetup from "./containers/LanguageSetup";
import WorkExperience from "./components/main/WorkExperience";
import Courses from "./components/main/Courses";
import OtherProjects from "./components/main/OtherProjects";
import Skills from "./components/main/Skills";
import Advantages from "./components/main/Advantages";
import Disadvantages from "./components/main/Disadvantages";
import Function from "./components/main/Function";
import ProfilePic from "./components/sidebar/ProfilePic";
import Name from "./components/sidebar/Name";
import Languages from "./components/sidebar/Languages";
import Phone from "./components/sidebar/Phone";
import Email from "./components/sidebar/Email";
import Address from "./components/sidebar/Address";
import AboutMe from "./components/sidebar/AboutMe";
import Hobbies from "./components/sidebar/Hobbies";

class App extends Component {
  render() {
    return (
      <div className="container-fluid h-100 w-100 backgroundLightgrey">
        <LanguageSetup />
        <div className="row">
          <div className="col-8 paddingM">{this.main}</div>
          <div className="col-4 backgroundBlack paddingM">{this.sidebar}</div>
        </div>
      </div>
    );
  }

  get main() {
    return (
      <div>
        <Function />
        <WorkExperience />
        <OtherProjects />
        <Courses />
        <Skills />
      </div>
    );
    /*
        <div className="row">
          <Advantages />
          <Disadvantages />
        </div> */
  }

  get sidebar() {
    return (
      <div>
        <ProfilePic />
        <Name />
        <Languages />
        <Phone />
        <Email />
        <Address />
        <AboutMe />
        <Hobbies />
      </div>
    );
  }
}

export default withLocalize(App);
