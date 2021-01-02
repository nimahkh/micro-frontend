import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  prefetchApps,
  addGlobalUncaughtErrorHandler,
} from "qiankun";
import render from "./render/ReactRender";
render({ loading: true });

const loader = (loading) => render({ loading });
console.log("OK");
registerMicroApps([
  {
    name: "mf-product", // app name registered
    entry: "//localhost:8001",
    container: "#mf-container",
    loader,
    activeRule: "/mf-product",
  },
]);
console.log("NOOOOO");
prefetchApps([{ name: "mf-product", entry: "//locahost:7101" }]);
console.log("Start");
start();
console.log("STARTEDDDD");
setDefaultMountApp("/mf-product");
addGlobalUncaughtErrorHandler((event) => console.log(event));
