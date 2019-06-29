import { App } from "@aws-cdk/core"
import { ExampleStack } from "./ExampleStack"

const app = new App()
new ExampleStack(app, "ExampleStack", {
  stackName: "example"
})
