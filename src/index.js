import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { LocalizeProvider } from "react-localize-redux";

ReactDOM.render(
  <LocalizeProvider>
    <App />
  </LocalizeProvider>,
  document.getElementById("root")
);
