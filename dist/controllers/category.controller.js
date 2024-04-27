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
exports.getAllCategoriesHandler = exports.addCategoryHandler = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const addCategoryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.body;
        yield category_model_1.default.create(category);
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
});
exports.addCategoryHandler = addCategoryHandler;
const getAllCategoriesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.default.find();
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
});
exports.getAllCategoriesHandler = getAllCategoriesHandler;
