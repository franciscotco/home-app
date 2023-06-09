import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";
import "./serviceWorker";

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
