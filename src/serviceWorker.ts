if ("serviceWorker" in navigator && !webpackDevServer) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}
