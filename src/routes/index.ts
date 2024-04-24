import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import categoryRouter from "./category.routes";
import tourRouter from "./tour.routes";
import guideRouter from "./guide.routes";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(categoryRouter);
router.use(tourRouter);
router.use(guideRouter);

router.get("/api/health", async (_, res) => {
    res.send("server running");
});

export default router;
