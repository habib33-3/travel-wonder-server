"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuidesReviewHandler = exports.addReviewHandler = void 0;
const review_model_1 = __importDefault(require("../models/review.model"));
const addReviewHandler = async (req, res) => {
    try {
        const review = req.body;
        await review_model_1.default.create(review);
        return res.status(200).json({
            success: true,
            message: "created",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("something went wrong");
    }
};
exports.addReviewHandler = addReviewHandler;
const getGuidesReviewHandler = async (req, res) => {
    try {
        const { email } = req.params;
        const reviews = await review_model_1.default.find({ guideEmail: email });
        return res.status(200).json({
            success: true,
            message: "loaded",
            reviews,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("something went wrong");
    }
};
exports.getGuidesReviewHandler = getGuidesReviewHandler;
