"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const tour_schema_1 = require("../schemas/tour.schema");
const tour_controller_1 = require("../controllers/tour.controller");
const router = (0, express_1.Router)();
router.post("/api/v1/packages/addPackage", (0, validateInput_1.default)(tour_schema_1.addTourSchema), verifyToken_1.default, tour_controller_1.addTourHandler);
router.get("/api/v1/packages/getAllPackages", tour_controller_1.getAllToursHandler);
exports.default = express_1.Router;
//# sourceMappingURL=tour.routes.js.map