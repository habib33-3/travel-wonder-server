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
exports.getGuidesReviewHandler = exports.addReviewHandler = void 0;
const review_model_1 = __importDefault(require("../models/review.model"));
const addReviewHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = req.body;
        yield review_model_1.default.create(review);
        return res.status(200).json({
            success: true,
            message: "created",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("something went wrong");
    }
});
exports.addReviewHandler = addReviewHandler;
const getGuidesReviewHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const reviews = yield review_model_1.default.find({ guideEmail: email });
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
});
exports.getGuidesReviewHandler = getGuidesReviewHandler;
