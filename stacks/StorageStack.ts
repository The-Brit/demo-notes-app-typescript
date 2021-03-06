import { Bucket, StackContext, Table } from "@serverless-stack/resources";

export const StorageStack = ({ stack, app}: StackContext ) => {
    // Create an S3 bucket
    const bucket = new Bucket(stack, "Uploads");
    
    // Create the DynamoDB table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string"
        },
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" }
    });

    return {
        table,
        bucket
    };
};