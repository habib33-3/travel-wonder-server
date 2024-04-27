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
exports.deleteBookingHandler = exports.changeBookingStatusHandler = exports.getGuideBookingHandler = exports.getUserBookingHandler = exports.getAllBookingHandler = exports.addBookingHandler = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const booking_services_1 = require("../services/booking.services");
const addBookingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = req.body;
        yield booking_model_1.default.create(booking);
        res.status(200).json({
            message: "successful",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.addBookingHandler = addBookingHandler;
const getAllBookingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield booking_model_1.default.find();
        res.status(200).json({
            message: "successful",
            bookings,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.getAllBookingHandler = getAllBookingHandler;
const getUserBookingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const bookings = yield booking_model_1.default.find({
            touristEmail: email,
        });
        res.status(200).json({
            message: "successful",
            bookings,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.getUserBookingHandler = getUserBookingHandler;
const getGuideBookingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const bookings = yield booking_model_1.default.find({
            guideEmail: email,
        });
        res.status(200).json({
            message: "successful",
            bookings,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.getGuideBookingHandler = getGuideBookingHandler;
const changeBookingStatusHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const booking = yield (0, booking_services_1.findBookingById)(id);
        if (!booking) {
            return res.status(404).json({
                message: "not found",
            });
        }
        booking.status = status;
        yield booking.save();
        res.status(200).json({
            message: "successful",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.changeBookingStatusHandler = changeBookingStatusHandler;
const deleteBookingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield booking_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "successful",
            success: true,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.deleteBookingHandler = deleteBookingHandler;
