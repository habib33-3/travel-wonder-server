import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { getAllUsers, saveUser } from "../controllers/user.controllers";
import { saveUserSchema } from "../schemas/user.schemas";

const router = Router();

router.post(
    "/api/v1/user/saveUser",
    validateInput(saveUserSchema),
    saveUser
);

router.get("/api/v1/user/getAllUsers", getAllUsers);

export default router;
