"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogsHandler = exports.addBlogHandler = void 0;
const blog_model_1 = __importDefault(require("../models/blog.model"));
const addBlogHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = req.body;
        yield blog_model_1.default.create(blog);
        res.status(200).json({
            message: "blog created",
            success: true,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "blog created error",
            success: false,
        });
    }
});
exports.addBlogHandler = addBlogHandler;
const getAllBlogsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_model_1.default.find();
        res.status(200).json({
            message: "blog loaded",
            success: true,
            blogs,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "blog loaded error",
            success: false,
        });
    }
});
exports.getAllBlogsHandler = getAllBlogsHandler;
//# sourceMappingURL=blog.controller.js.map