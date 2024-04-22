import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";

const router = Router();

router.use(userRouter);
router.use(authRouter);

router.get("/api/health", async (_, res) => {
    res.send("server running");
});

export default router;
