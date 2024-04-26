"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBlogSchema = void 0;
const zod_1 = require("zod");
exports.addBlogSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        storyTitle: (0, zod_1.string)({
            required_error: "Story title is required",
            invalid_type_error: "Story title must be a string",
        }),
        storyText: (0, zod_1.string)({
            required_error: "Story text is required",
            invalid_type_error: "Story text must be a string",
        }),
        writerName: (0, zod_1.string)({
            required_error: "Writer name is required",
            invalid_type_error: "Writer name must be a string",
        }),
        writerImg: (0, zod_1.string)({
            required_error: "Writer image is required",
            invalid_type_error: "Writer image must be a string",
        }),
        writerEmail: (0, zod_1.string)({
            required_error: "Writer email is required",
            invalid_type_error: "Writer email must be a string",
        }).email({
            message: "Writer email must be a valid email address",
        }),
        publishDate: (0, zod_1.date)({
            required_error: "Publish date is required",
            invalid_type_error: "Publish date must be a valid date",
        }),
    }),
});
//# sourceMappingURL=blog.schema.js.map