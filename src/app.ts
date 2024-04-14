import express, { Express, Request, Response } from "express";

const app: Express = express();

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("server started");
});

app.listen(port, () => {
    console.log(`server at ${port}`);
});
