"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategorySchema = void 0;
const zod_1 = require("zod");
exports.addCategorySchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "name is required",
            invalid_type_error: "name must be string",
        }),
        categoryId: (0, zod_1.number)({
            required_error: "categoryId is required",
            invalid_type_error: "categoryId must be number",
        }),
        img: (0, zod_1.string)({
            required_error: "img is required",
            invalid_type_error: "img must be string",
        }),
        tagline: (0, zod_1.string)({
            required_error: "tagline is required",
            invalid_type_error: "tagline must be string",
        }),
    }),
});
//# sourceMappingURL=category.schema.js.map