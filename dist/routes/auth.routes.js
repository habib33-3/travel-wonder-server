"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_schema_1 = require("./../schemas/auth.schema");
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post("/api/v1/auth/createToken", (0, validateInput_1.default)(auth_schema_1.createTokenSchema), auth_controller_1.createToken);
router.post("/api/v1/auth/logout", auth_controller_1.clearToken);
exports.default = router;
