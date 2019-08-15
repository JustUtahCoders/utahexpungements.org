import React from "react";
import ReactDOM from "react-dom";
import Root from "./root.component.js";

const rootElement = document.createElement("div");
rootElement.id = "root-element";
document.body.appendChild(rootElement);

const printElement = document.createElement("div");
printElement.id = "print-element";
document.body.appendChild(printElement);

ReactDOM.render(<Root />, rootElement);
