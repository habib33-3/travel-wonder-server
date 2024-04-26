import { createTokenSchema } from "./../schemas/auth.schema";
import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { clearToken, createToken } from "../controllers/auth.controller";

const router = Router();

router.post(
    "/api/v1/auth/createToken",
    validateInput(createTokenSchema),
    createToken
);

router.post("/api/v1/auth/logout", clearToken);

export default router;
