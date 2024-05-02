import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { devClient, prodClient } from "./env";
import morgan from "morgan";
import router from "./routes";

const app = express();

app.use(json());

app.use(cookieParser());

app.use(morgan("combined"));

const allowedOrigins: (string | RegExp)[] = [
    process.env.DEV_CLIENT || "", // Provide a default value to avoid undefined
    process.env.PROD_CLIENT || "", // Provide a default value to avoid undefined
    "http://localhost:5173",
    "https://travel-wonder-client.vercel.app",
];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(router);

export default app;
