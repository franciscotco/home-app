import React from "react";

import ReactDOM from "react-dom/client";

import "./serviceWorker";

/* eslint-disable import/order */
import "./index.css";
import App from "./App";
/* eslint-enable import/order */

const rootNode = document.getElementById("root");

if (rootNode) {
  const root = ReactDOM.createRoot(rootNode);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw Error("Missing the root node in the DOM.");
}
