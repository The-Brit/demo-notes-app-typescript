import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import handler from "./../util/handler";
import { LambdaType } from "./../util/types";

const lambda: LambdaType = async (event) => {
  // return `Hello, World! Your request was received at ${event.requestContext.time}.`;
  return `The time in Lambda is ${event.requestContext.time}.`;
}

export const main: APIGatewayProxyHandlerV2 = handler(lambda);

// export const main: APIGatewayProxyHandlerV2 = handler(async (event: APIGatewayProxyEventV2) => {
//   return {
//     statusCode: 200,
//     headers: { "Content-Type": "text/plain" },
//     body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
//   };
// });
