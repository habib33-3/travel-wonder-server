"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenSchema = void 0;
var zod_1 = require("zod");
exports.createTokenSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "email is required",
        }),
        role: (0, zod_1.string)({
            required_error: "role is required",
        }),
    }),
});
