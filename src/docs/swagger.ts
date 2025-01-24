import { version } from "mongoose";
import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFile = ["../routes/api.ts"]; 
const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi API SAEVENT",
        description: "Dokumentasi API EVENT"
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server",
        },
        {
            url: "https://minrammin.vercel.app/api",
            description: "Deploy Server"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            LoginRequest: {
                identifier: "Maskopi",
                password: "43211234",
            }
        },
    }
};


swaggerAutogen({openapi: "3.0.0"})(outputFile, endpointsFile, doc);