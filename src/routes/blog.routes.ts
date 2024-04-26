import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { addBlogSchema } from "../schemas/blog.schema";
import verifyJWT from "../middlewares/verifyToken";
import {
    addBlogHandler,
    getAllBlogsHandler,
} from "../controllers/blog.controller";

const router = Router();

router.post(
    "/api/v1/blog/addBlog",
    validateInput(addBlogSchema),
    verifyJWT,
    addBlogHandler
);

router.get("/api/v1/blog/getBlogs", getAllBlogsHandler);
export default router;
