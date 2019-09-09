import { Component } from "react";
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import translations from "../res/translations.json";
import { properties } from "../properties.js";

class LanguageSetup extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [{ name: "Dutch", code: "nl" }, { name: "English", code: "en" }, { name: "French", code: "fr" }],
      translation: translations,
      options: {
        renderToStaticMarkup,
        defaultLanguage: properties.language,
      },
    });
  }

  render() {
    return null;
  }
}

export default withLocalize(LanguageSetup);
