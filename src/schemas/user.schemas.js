"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUserSchema = void 0;
var Zod_1 = require("Zod");
exports.saveUserSchema = (0, Zod_1.object)({
    body: (0, Zod_1.object)({
        email: (0, Zod_1.string)({
            required_error: "email is required",
        }).email({ message: "valid email is required" }),
        name: (0, Zod_1.string)({}).min(3).max(20),
        img: (0, Zod_1.string)(),
        role: (0, Zod_1.string)({}),
    }),
});
