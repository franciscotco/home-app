import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if ("serviceWorker" in navigator && !webpackDevServer) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").then((registration) => {
      console.log("SW registered: ", registration);
    }).catch((registrationError) => {
      console.log("SW registration failed: ", registrationError);
    });
  });
}

const getNode = (): HTMLElement => {
  const rootNode = document.getElementById("root");

  if (rootNode) {
    return rootNode;
  } else {
    const domNode = document.createElement("div");

    domNode.id = "root";
    document.body.appendChild(domNode);
    return domNode;
  }
}

const root = ReactDOM.createRoot(getNode());

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
