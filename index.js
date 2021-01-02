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
registerMicroApps([
  {
    name: "mf-product", // app name registered
    entry: "//localhost:8001",
    container: "#mf-container",
    loader,
    activeRule: "/mf-product",
  },
]);
prefetchApps([{ name: "mf-product", entry: "//locahost:7101" }]);
start();
setDefaultMountApp("/mf-product");
addGlobalUncaughtErrorHandler((event) => console.log(event));
