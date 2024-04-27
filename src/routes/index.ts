import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import categoryRouter from "./category.routes";
import tourRouter from "./tour.routes";
import guideRouter from "./guide.routes";
import reviewRouter from "./review.routes";
import bookingRouter from "./booking.routes";
import wishlistRouter from "./wishlist.routes";
import blogRouter from "./blog.routes";

const router = Router();

router.get("/api/health", async (req, res) => {
    res.send("server running|");
});

router.use(userRouter);
router.use(authRouter);
router.use(categoryRouter);
router.use(tourRouter);
router.use(guideRouter);
router.use(reviewRouter);
router.use(bookingRouter);
router.use(wishlistRouter);
router.use(blogRouter);

export default router;
