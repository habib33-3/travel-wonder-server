"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGuidesHandler = exports.createGuideHandler = void 0;
const guide_model_1 = __importDefault(require("../models/guide.model"));
const createGuideHandler = async (req, res) => {
    try {
        const guide = req.body;
        await guide_model_1.default.create(guide);
        res.status(200).json({
            message: "guide created",
            success: true,
        });
    }
    catch (error) {
        console.log(error.message);
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }
        else {
            console.error("error during save user : \n", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
};
exports.createGuideHandler = createGuideHandler;
const getAllGuidesHandler = async (req, res) => {
    try {
        const guides = await guide_model_1.default.find();
        res.status(200).json({
            success: true,
            message: "guide loaded",
            guides,
        });
    }
    catch (error) {
        console.error("error during save user : \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.getAllGuidesHandler = getAllGuidesHandler;
