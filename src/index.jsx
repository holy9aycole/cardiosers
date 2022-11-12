import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./component/App";
import "./style/main.scss";

const reactContainer = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  reactContainer
);
