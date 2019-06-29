import { Bucket } from "@aws-cdk/aws-s3"
import { Construct, Stack, StackProps } from "@aws-cdk/core"

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)
    new Bucket(this, "Bucket")
  }
}
