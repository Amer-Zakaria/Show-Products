import React from "react";
import ReactDOM from "react-dom";
import "./CSS/normalize.css";
import "./CSS/index.css";
import "milligram/dist/milligram.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);