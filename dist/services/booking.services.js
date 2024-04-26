"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBookingById = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
const findBookingById = (id) => {
    return booking_model_1.default.findById(id);
};
exports.findBookingById = findBookingById;
//# sourceMappingURL=booking.services.js.map