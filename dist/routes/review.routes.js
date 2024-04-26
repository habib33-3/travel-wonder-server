"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const review_schema_1 = require("../schemas/review.schema");
const category_controller_1 = require("../controllers/category.controller");
const review_controller_1 = require("../controllers/review.controller");
const router = (0, express_1.Router)();
router.post("/api/v1/review/addReview", (0, validateInput_1.default)(review_schema_1.addReviewSchema), verifyToken_1.default, category_controller_1.addCategoryHandler);
router.get("/api/v1/review/getReview/:email", (0, validateInput_1.default)(review_schema_1.getGuidesReviewSchema), review_controller_1.getGuidesReviewHandler);
exports.default = router;
//# sourceMappingURL=review.routes.js.map