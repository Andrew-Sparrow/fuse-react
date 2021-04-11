import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/styles.css";
import "./sass/styles.scss";

const mountNode = document.querySelector("bg-home");
ReactDOM.render(<App />, mountNode);
