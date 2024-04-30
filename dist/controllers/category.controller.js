"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategoriesHandler = exports.addCategoryHandler = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const addCategoryHandler = async (req, res) => {
    try {
        const category = req.body;
        await category_model_1.default.create(category);
        return res.status(200).json({
            success: true,
            message: "category created",
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
exports.addCategoryHandler = addCategoryHandler;
const getAllCategoriesHandler = async (req, res) => {
    try {
        const categories = await category_model_1.default.find();
        res.status(200).json({
            success: true,
            message: "catagories loaded",
            categories,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
exports.getAllCategoriesHandler = getAllCategoriesHandler;
