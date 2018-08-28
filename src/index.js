import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./containers/App";
import registerServiceWorker from "./utils/registerServiceWorker";
// import Routes from "./routes";
import { browserHistory } from "react-router";
import App from "./containers/App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
