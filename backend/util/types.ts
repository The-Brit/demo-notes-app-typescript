import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, Context } from "aws-lambda";

export type LambdaType = (event: APIGatewayProxyEventV2, context: Context) => Promise<string>;
export type HandlerType = (lambda: LambdaType) => APIGatewayProxyHandlerV2;
export type ErrorType = { error: string };