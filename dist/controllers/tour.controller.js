"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllToursHandler = exports.addTourHandler = void 0;
const tour_model_1 = __importDefault(require("../models/tour.model"));
const addTourHandler = async (req, res) => {
    try {
        const tour = req.body;
        await tour_model_1.default.create(tour);
        return res.status(200).json({
            success: true,
            message: "tour created",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
            success: false,
        });
    }
};
exports.addTourHandler = addTourHandler;
const getAllToursHandler = async (req, res) => {
    try {
        const tours = await tour_model_1.default.find();
        return res.status(200).json({
            success: true,
            message: "tour loaded",
            tours,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
            success: false,
        });
    }
};
exports.getAllToursHandler = getAllToursHandler;
