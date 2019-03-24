import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";

import { store } from "./_helpers";
import { App } from "./App";

// setup fake backend
//import { configureFakeBackend } from "./_helpers";
//configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
