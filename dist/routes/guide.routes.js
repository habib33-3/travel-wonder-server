"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const guide_schema_1 = require("../schemas/guide.schema");
const guide_controller_1 = require("../controllers/guide.controller");
const router = (0, express_1.Router)();
router.post("/api/v1/guide/saveGuide", (0, validateInput_1.default)(guide_schema_1.createGuideSchema), guide_controller_1.createGuideHandler);
router.get("/api/v1/guides/getAllGuide", guide_controller_1.getAllGuidesHandler);
exports.default = router;
//# sourceMappingURL=guide.routes.js.map