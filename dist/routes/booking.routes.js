"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const booking_schema_1 = require("../schemas/booking.schema");
const booking_controller_1 = require("../controllers/booking.controller");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const router = (0, express_1.Router)();
router.post("/api/v1/booking/addBooking", (0, validateInput_1.default)(booking_schema_1.addBookingSchema), verifyToken_1.default, booking_controller_1.addBookingHandler);
router.get("/api/v1/booking/getAllBooking", verifyToken_1.default, booking_controller_1.getAllBookingHandler);
router.get("/api/v1/bookings/userBookings", (0, validateInput_1.default)(booking_schema_1.getUserBookingSchema), verifyToken_1.default, booking_controller_1.getUserBookingHandler);
router.get("/api/v1/bookings/guideBookings", (0, validateInput_1.default)(booking_schema_1.getGuideBookingSchema), verifyToken_1.default, booking_controller_1.getGuideBookingHandler);
router.put("/api/v1/bookings/changeStatus/:id", (0, validateInput_1.default)(booking_schema_1.changeBookingStatusSchema), verifyToken_1.default, booking_controller_1.changeBookingStatusHandler);
router.delete("/api/v1/booking/cancelBooking/:id", (0, validateInput_1.default)(booking_schema_1.deleteBookingSchema), verifyToken_1.default, booking_controller_1.deleteBookingHandler);
exports.default = express_1.Router;
