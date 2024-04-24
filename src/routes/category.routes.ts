import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { addCategorySchema } from "../schemas/category.schema";
import { addCategoryHandler } from "../controllers/category.controller";
import verifyJWT from "../middlewares/verifyToken";

const router = Router();

router.post(
    "/api/v1/category",
    validateInput(addCategorySchema),
    verifyJWT,
    addCategoryHandler
);

export default router;
