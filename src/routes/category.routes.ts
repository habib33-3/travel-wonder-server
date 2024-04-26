import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { addCategorySchema } from "../schemas/category.schema";
import {
    addCategoryHandler,
    getAllCategoriesHandler,
} from "../controllers/category.controller";
import verifyJWT from "../middlewares/verifyToken";

const router = Router();

router.post(
    "/api/v1/category",
    validateInput(addCategorySchema),
    verifyJWT,
    addCategoryHandler
);

router.get("/api/v1/packages/getCategories", getAllCategoriesHandler);

export default router;
