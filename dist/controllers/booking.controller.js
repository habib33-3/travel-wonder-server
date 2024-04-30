"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingHandler = exports.changeBookingStatusHandler = exports.getGuideBookingHandler = exports.getUserBookingHandler = exports.getAllBookingHandler = exports.addBookingHandler = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const booking_services_1 = require("../services/booking.services");
const addBookingHandler = async (req, res) => {
    try {
        const booking = req.body;
        await booking_model_1.default.create(booking);
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
};
exports.addBookingHandler = addBookingHandler;
const getAllBookingHandler = async (req, res) => {
    try {
        const bookings = await booking_model_1.default.find();
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
};
exports.getAllBookingHandler = getAllBookingHandler;
const getUserBookingHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const bookings = await booking_model_1.default.find({
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
};
exports.getUserBookingHandler = getUserBookingHandler;
const getGuideBookingHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const bookings = await booking_model_1.default.find({
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
};
exports.getGuideBookingHandler = getGuideBookingHandler;
const changeBookingStatusHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const booking = await (0, booking_services_1.findBookingById)(id);
        if (!booking) {
            return res.status(404).json({
                message: "not found",
            });
        }
        booking.status = status;
        await booking.save();
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
};
exports.changeBookingStatusHandler = changeBookingStatusHandler;
const deleteBookingHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await booking_model_1.default.findByIdAndDelete(id);
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
};
exports.deleteBookingHandler = deleteBookingHandler;
