"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const blog_schema_1 = require("../schemas/blog.schema");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const blog_controller_1 = require("../controllers/blog.controller");
const router = (0, express_1.Router)();
router.post("/api/v1/blog/addBlog", (0, validateInput_1.default)(blog_schema_1.addBlogSchema), verifyToken_1.default, blog_controller_1.addBlogHandler);
router.get("/api/v1/blog/getBlogs", blog_controller_1.getAllBlogsHandler);
exports.default = router;
//# sourceMappingURL=blog.routes.js.map