import ymljs from "yamljs";
import { IOpenAPI } from "./v3x";

const example: IOpenAPI = {
    openapi: "3.0.0",
    info: {
        title: "myapi",
        version: "1.0"
    },
    servers: [
        {
            url: "http://testapi.example.org"
        },
        {
            url: "https://api.example.org",
            description: "This is the production api",
            variables: {
                some: {
                    default: "100",
                    description: "some number",
                    enum: ["100", "200"]
                }
            }
        }
    ],
    paths: {
        "/records": {
            description: "this is the gets records",
            summary: "This path does something very cool",
            get: {
                tags: ["tag1"],
                summary: "this is a summary",
                deprecated: true,
                operationId: "someid",
                parameters: [
                    {
                        name: "param1",
                        in: "cookie"
                    }
                ]
            }
        }
    }
};

console.log(ymljs.stringify(example, 36));
