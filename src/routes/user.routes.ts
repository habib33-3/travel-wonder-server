import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import {
    getAllUsers,
    makeAdmin,
    makeGuide,
    saveUser,
} from "../controllers/user.controllers";
import {
    makeAdminSchema,
    makeGuideSchema,
    saveUserSchema,
} from "../schemas/user.schemas";

const router = Router();

router.post("/api/v1/user/saveUser", validateInput(saveUserSchema), saveUser);

router.get("/api/v1/user/getAllUsers", getAllUsers);

router.patch(
    "/api/v1/users/makeAdmin/:id",
    validateInput(makeAdminSchema),
    makeAdmin
);

router.patch(
    "/api/v1/users/makeGuide/:id",
    validateInput(makeGuideSchema),
    makeGuide
);

export default router;
