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
exports.getAllGuidesHandler = exports.createGuideHandler = void 0;
const guide_model_1 = __importDefault(require("../models/guide.model"));
const createGuideHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const guide = req.body;
        yield guide_model_1.default.create(guide);
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
});
exports.createGuideHandler = createGuideHandler;
const getAllGuidesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const guides = yield guide_model_1.default.find();
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
});
exports.getAllGuidesHandler = getAllGuidesHandler;
//# sourceMappingURL=guide.controller.js.map