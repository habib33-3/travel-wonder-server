import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import categoryRouter from "./category.routes";
import tourRouter from "./tour.routes";
import guideRouter from "./guide.routes";
import reviewRouter from "./review.routes";
import bookingRouter from "./booking.routes";
import wishlistRouter from "./wishlist.routes";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(categoryRouter);
router.use(tourRouter);
router.use(guideRouter);
router.use(reviewRouter);
router.use(bookingRouter);
router.use(wishlistRouter);

router.get("/api/health", async (_, res) => {
    res.send("server running");
});

export default router;
