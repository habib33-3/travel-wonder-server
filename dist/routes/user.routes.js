"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const user_controllers_1 = require("../controllers/user.controllers");
const user_schemas_1 = require("../schemas/user.schemas");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const router = (0, express_1.Router)();
router.post("/api/v1/user/saveUser", (0, validateInput_1.default)(user_schemas_1.saveUserSchema), user_controllers_1.saveUser);
router.get("/api/v1/user/getAllUsers", user_controllers_1.getAllUsers);
router.patch("/api/v1/users/makeAdmin/:id", (0, validateInput_1.default)(user_schemas_1.makeAdminSchema), user_controllers_1.makeAdmin);
router.patch("/api/v1/users/makeGuide/:id", (0, validateInput_1.default)(user_schemas_1.makeGuideSchema), user_controllers_1.makeGuide);
router.get("/api/v1/checkAdmin/:email", (0, validateInput_1.default)(user_schemas_1.checkAdminSchema), verifyToken_1.default, user_controllers_1.checkAdminHandler);
router.get("/api/v1/checkGuide/:email", (0, validateInput_1.default)(user_schemas_1.checkGuideSchema), verifyToken_1.default, user_controllers_1.checkGuideHandler);
exports.default = router;
