import { loadMicroApp, initGlobalState, setDefaultMountApp } from "qiankun";

let app;
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: "qiankun",
});

onGlobalStateChange((value, prev) =>
  console.log("[onGlobalStateChange - master]:", value, prev)
);

setGlobalState({
  ignore: "master",
  user: {
    name: "master",
  },
});

function mount() {
  app = loadMicroApp(
    { name: "mf-product", entry: "//localhost:8001", container: "#mf-product" },
    { sandbox: { experimentalStyleIsolation: true } }
  );
  console.log("Mount");
}

function unmount() {
  app.unmount();
  console.log("Unmolunt");
}

setDefaultMountApp("/mf-product");

loadMicroApp({
  name: "mf-product",
  entry: "//localhost:8001",
  container: "#mf-product",
});
