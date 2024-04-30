"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuidesReviewSchema = exports.addReviewSchema = void 0;
const zod_1 = require("zod");
exports.addReviewSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        rating: (0, zod_1.number)({
            required_error: "Rating is required",
            invalid_type_error: "Rating must be a number",
        }),
        reviewText: (0, zod_1.string)({
            required_error: "Review text is required",
            invalid_type_error: "Review text must be a string",
        }),
        guideEmail: (0, zod_1.string)({
            required_error: "Guide email is required",
            invalid_type_error: "Guide email must be a string",
        }).email({
            message: "Guide email must be a valid email address",
        }),
        userEmail: (0, zod_1.string)({
            required_error: "User email is required",
            invalid_type_error: "User email must be a string",
        }).email({
            message: "User email must be a valid email address",
        }),
        userName: (0, zod_1.string)({
            required_error: "User name is required",
            invalid_type_error: "User name must be a string",
        }),
        userPic: (0, zod_1.string)({
            required_error: "User picture is required",
            invalid_type_error: "User picture must be a string",
        }),
    }),
});
exports.getGuidesReviewSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "User email is required",
            invalid_type_error: "User email must be a string",
        }).email({
            message: "User email must be a valid email address",
        }),
    }),
});
