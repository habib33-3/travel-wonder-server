"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookingSchema = exports.changeBookingStatusSchema = exports.getUserBookingSchema = exports.getGuideBookingSchema = exports.addBookingSchema = void 0;
const zod_1 = require("zod");
exports.addBookingSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        touristName: (0, zod_1.string)({
            required_error: "Tourist name is required",
            invalid_type_error: "Tourist name must be a string",
        }),
        touristEmail: (0, zod_1.string)({
            required_error: "Tourist email is required",
            invalid_type_error: "Tourist email must be a string",
        }).email({
            message: "Tourist email must be a valid email address",
        }),
        touristPic: (0, zod_1.string)({
            required_error: "Tourist picture is required",
            invalid_type_error: "Tourist picture must be a string",
        }),
        price: (0, zod_1.number)({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
        tourName: (0, zod_1.string)({
            required_error: "Tour name is required",
            invalid_type_error: "Tour name must be a string",
        }),
        tourDate: (0, zod_1.date)({
            required_error: "Tour date is required",
            invalid_type_error: "Tour date must be a valid date",
        }),
        guideEmail: (0, zod_1.string)({
            required_error: "Guide email is required",
            invalid_type_error: "Guide email must be a string",
        }).email({
            message: "Guide email must be a valid email address",
        }),
    }),
});
exports.getGuideBookingSchema = (0, zod_1.object)({
    query: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: " email is required",
            invalid_type_error: " email must be a string",
        }).email({
            message: " email must be a valid email address",
        }),
    }),
});
exports.getUserBookingSchema = (0, zod_1.object)({
    query: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: " email is required",
            invalid_type_error: " email must be a string",
        }).email({
            message: " email must be a valid email address",
        }),
    }),
});
exports.changeBookingStatusSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({
            required_error: "ID is required",
            invalid_type_error: "ID must be a string",
        }),
    }),
    body: (0, zod_1.object)({
        status: (0, zod_1.enum)(["accepted", "rejected", "in review"], {
            invalid_type_error: "status must be accepted or rejected or in review",
            required_error: "status is required",
        }),
    }),
});
exports.deleteBookingSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({
            required_error: "ID is required",
            invalid_type_error: "ID must be a string",
        }),
    }),
});
