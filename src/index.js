import React from "react";
import ReactDOM from "react-dom";
import { setGlobal } from "reactn";
import App from "./App";
import INITIAL_STATE from "./utils/state";

setGlobal(INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
