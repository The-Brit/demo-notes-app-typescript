import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import HttpStatusCode from "./httpStatusCode";
import { HandlerType, ErrorType } from "./types";

const handler : HandlerType = (lambda) => {
    const func: APIGatewayProxyHandlerV2 = async (event, context) => {
        let body: string | ErrorType;
        let statusCode: HttpStatusCode;

        try {
            body = await lambda(event, context);
            statusCode = HttpStatusCode.OK;
        }
        catch (ex: any) {
            console.log(ex);
            body = { error: ex.Message },
            statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
        }

        return {
            statusCode: statusCode,
            body: JSON.stringify(body),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        }
    };

    return func;
};

export default handler;