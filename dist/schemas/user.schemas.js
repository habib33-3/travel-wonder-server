"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGuideSchema = exports.checkAdminSchema = exports.makeGuideSchema = exports.makeAdminSchema = exports.saveUserSchema = void 0;
const Zod_1 = require("Zod");
exports.saveUserSchema = (0, Zod_1.object)({
    body: (0, Zod_1.object)({
        email: (0, Zod_1.string)({
            required_error: "email is required",
        }).email({ message: "valid email is required" }),
        name: (0, Zod_1.string)({ invalid_type_error: "name must be string" })
            .min(3, {
            message: "name must be 3 characters",
        })
            .max(20, {
            message: "name should be in 20 characters",
        })
            .optional(),
        img: (0, Zod_1.string)().optional(),
        role: (0, Zod_1.string)({}).optional(),
    }),
});
exports.makeAdminSchema = (0, Zod_1.object)({
    params: (0, Zod_1.object)({
        id: (0, Zod_1.string)({
            required_error: "id is required",
        }),
    }),
});
exports.makeGuideSchema = (0, Zod_1.object)({
    params: (0, Zod_1.object)({
        id: (0, Zod_1.string)({
            required_error: "id is required",
        }),
    }),
});
exports.checkAdminSchema = (0, Zod_1.object)({
    params: (0, Zod_1.object)({
        email: (0, Zod_1.string)({
            required_error: "email is required",
            invalid_type_error: "email must be string",
        }).email({
            message: "valid email required",
        }),
    }),
});
exports.checkGuideSchema = (0, Zod_1.object)({
    params: (0, Zod_1.object)({
        email: (0, Zod_1.string)({
            required_error: "email is required",
            invalid_type_error: "email must be string",
        }).email({
            message: "valid email required",
        }),
    }),
});
//# sourceMappingURL=user.schemas.js.map