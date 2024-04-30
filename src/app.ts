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

app.use(
    cors({
        origin: [devClient, prodClient],
        credentials: true,
    })
);

app.use(router);

app.get("/", (req, res) => {
    res.send("travel wonder");
});
export default app;
