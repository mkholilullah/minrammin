import { version } from "mongoose";
import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFile = ["../routes/api.ts"]; 
const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi API MINRAMMIN",
        description: "Dokumentasi API MINRAMMIN"
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
                identifier: "muskkopi29",
                password: "HbD4Os2lhY982wqpIe2",
            },
            RegisterRequest: {
                fullname: "MuskKopi Mask",
                username: "muskkopi29",
                email: "muskkopi29@domain.com",
                password: "HbD4Os2lhY982wqpIe2",
                confirmPassword: "HbD4Os2lhY982wqpIe2",
            },
            ActivationRequest: {
                code: "abcdef",
            }
        },
    }
};


swaggerAutogen({openapi: "3.0.0"})(outputFile, endpointsFile, doc);