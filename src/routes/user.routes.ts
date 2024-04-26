import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import {
    checkAdminHandler,
    checkGuideHandler,
    getAllUsers,
    makeAdmin,
    makeGuide,
    saveUser,
} from "../controllers/user.controllers";
import {
    checkAdminSchema,
    checkGuideSchema,
    makeAdminSchema,
    makeGuideSchema,
    saveUserSchema,
} from "../schemas/user.schemas";
import verifyJWT from "../middlewares/verifyToken";

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

router.get(
    "/api/v1/checkAdmin/:email",
    validateInput(checkAdminSchema),
    verifyJWT,
    checkAdminHandler
);

router.get(
    "/api/v1/checkGuide/:email",
    validateInput(checkGuideSchema),
    verifyJWT,
    checkGuideHandler
);

export default router;
