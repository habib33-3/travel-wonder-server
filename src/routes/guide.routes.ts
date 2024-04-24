import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { createGuideSchema } from "../schemas/guide.schema";
import {
    createGuideHandler,
    getAllGuidesHandler,
} from "../controllers/guide.controller";

const router = Router();

router.post(
    "/api/v1/guide/saveGuide",
    validateInput(createGuideSchema),
    createGuideHandler
);

router.get("/api/v1/guides/getAllGuide", getAllGuidesHandler);

export default router;
