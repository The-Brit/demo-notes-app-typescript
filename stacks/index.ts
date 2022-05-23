// import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack);
  // app.stack(MyStack);
}
