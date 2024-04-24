import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import categoryRouter from "./category.routes";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(categoryRouter);

router.get("/api/health", async (_, res) => {
    res.send("server running");
});

export default router;
