import { Router } from "express";
import userRouter from "./user.routes";

const router = Router();

router.use(userRouter);

router.get("/api/health", async (_, res) => {
    res.send("server running");
});
