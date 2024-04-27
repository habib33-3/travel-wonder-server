"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishlistSchema = exports.getUsersWishlistSchema = exports.addWishlistSchema = void 0;
const zod_1 = require("zod");
exports.addWishlistSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        thumbnail: (0, zod_1.string)({
            required_error: "Thumbnail is required",
            invalid_type_error: "Thumbnail must be a string",
        }),
        price: (0, zod_1.number)({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
        email: (0, zod_1.string)({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }).email({
            message: "Email must be a valid email address",
        }),
    }),
});
exports.getUsersWishlistSchema = (0, zod_1.object)({
    query: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }).email({
            message: "Email must be a valid email address",
        }),
    }),
});
exports.deleteWishlistSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({
            required_error: "Id is required",
            invalid_type_error: "Id must be a string",
        }),
    }),
});
