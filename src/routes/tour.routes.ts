import { Router } from "express";
import verifyJWT from "../middlewares/verifyToken";
import validateInput from "../middlewares/validateInput";
import { addTourSchema } from "../schemas/tour.schema";
import {
    addTourHandler,
    getAllToursHandler,
} from "../controllers/tour.controller";

const router = Router();

router.post(
    "/api/v1/packages/addPackage",
    validateInput(addTourSchema),
    verifyJWT,
    addTourHandler
);

router.get("/api/v1/packages/getAllPackages", getAllToursHandler);

export default Router;
