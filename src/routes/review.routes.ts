import { Router } from "express";
import verifyJWT from "../middlewares/verifyToken";
import validateInput from "../middlewares/validateInput";
import {
    addReviewSchema,
    getGuidesReviewSchema,
} from "../schemas/review.schema";
import { addCategoryHandler } from "../controllers/category.controller";
import { getGuidesReviewHandler } from "../controllers/review.controller";

const router = Router();

router.post(
    "/api/v1/review/addReview",
    validateInput(addReviewSchema),
    verifyJWT,
    addCategoryHandler
);

router.get(
    "/api/v1/review/getReview/:email",
    validateInput(getGuidesReviewSchema),
    getGuidesReviewHandler
);
export default router;
