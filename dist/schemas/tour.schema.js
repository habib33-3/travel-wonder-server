"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTourSchema = void 0;
const zod_1 = require("zod");
exports.addTourSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        thumbnail: (0, zod_1.string)({
            required_error: "Thumbnail is required",
            invalid_type_error: "Thumbnail must be a string",
        }),
        category: (0, zod_1.string)({
            required_error: "Category is required",
            invalid_type_error: "Category must be a string",
        }),
        categoryId: (0, zod_1.string)({
            required_error: "Category ID is required",
            invalid_type_error: "Category ID must be a string",
        }),
        description: (0, zod_1.string)({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        images: (0, zod_1.array)((0, zod_1.string)({
            required_error: "Images are required",
            invalid_type_error: "Images must be an array of strings",
        })),
        activities: (0, zod_1.array)((0, zod_1.string)({
            required_error: "Activities are required",
            invalid_type_error: "Activities must be an array of strings",
        })),
        price: (0, zod_1.number)({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
    }),
});
//# sourceMappingURL=tour.schema.js.map