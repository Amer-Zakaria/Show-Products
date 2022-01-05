import React from "react";
import ReactDOM from "react-dom";
import "milligram/dist/milligram.min.css";
import "./CSS/normalize.css";
import "./CSS/index.css";
import "./CSS/App.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
