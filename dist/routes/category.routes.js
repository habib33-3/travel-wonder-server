"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const category_schema_1 = require("../schemas/category.schema");
const category_controller_1 = require("../controllers/category.controller");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const router = (0, express_1.Router)();
router.post("/api/v1/category", (0, validateInput_1.default)(category_schema_1.addCategorySchema), verifyToken_1.default, category_controller_1.addCategoryHandler);
router.get("/api/v1/packages/getCategories", category_controller_1.getAllCategoriesHandler);
exports.default = router;
