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
exports.getAllToursHandler = exports.addTourHandler = void 0;
const tour_model_1 = __importDefault(require("../models/tour.model"));
const addTourHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tour = req.body;
        yield tour_model_1.default.create(tour);
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
});
exports.addTourHandler = addTourHandler;
const getAllToursHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tours = yield tour_model_1.default.find();
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
});
exports.getAllToursHandler = getAllToursHandler;
//# sourceMappingURL=tour.controller.js.map