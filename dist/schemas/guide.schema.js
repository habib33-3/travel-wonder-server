"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGuideSchema = void 0;
const zod_1 = require("zod");
exports.createGuideSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        email: (0, zod_1.string)({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }),
        pic: (0, zod_1.string)({
            required_error: "Pic is required",
            invalid_type_error: "Pic must be a string",
        }),
        skills: (0, zod_1.array)((0, zod_1.string)({
            required_error: "Skills are required",
            invalid_type_error: "Skills must be an array of strings",
        })),
        language: (0, zod_1.array)((0, zod_1.string)({
            required_error: "Language is required",
            invalid_type_error: "Language must be an array of strings",
        })),
        phone: (0, zod_1.string)({
            required_error: "Phone is required",
            invalid_type_error: "Phone must be a string",
        }),
        education: (0, zod_1.string)({
            required_error: "Education is required",
            invalid_type_error: "Education must be a string",
        }),
        experience: (0, zod_1.string)({
            required_error: "Experience is required",
            invalid_type_error: "Experience must be a string",
        }),
    }),
});
