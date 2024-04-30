"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogsHandler = exports.addBlogHandler = void 0;
const blog_model_1 = __importDefault(require("../models/blog.model"));
const addBlogHandler = async (req, res) => {
    try {
        const blog = req.body;
        await blog_model_1.default.create(blog);
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
};
exports.addBlogHandler = addBlogHandler;
const getAllBlogsHandler = async (req, res) => {
    try {
        const blogs = await blog_model_1.default.find();
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
};
exports.getAllBlogsHandler = getAllBlogsHandler;
