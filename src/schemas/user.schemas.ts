import { object, string, TypeOf } from "Zod";

export const saveUserSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }).email({ message: "valid email is required" }),

        name: string({ invalid_type_error: "name must be string" })
            .min(3, {
                message: "name must be 3 characters",
            })
            .max(20, {
                message: "name should be in 20 characters",
            })
            .optional(),
        img: string().optional(),
        role: string({}).optional(),
    }),
});

export type SaveUserInput = TypeOf<typeof saveUserSchema>["body"];

export const makeAdminSchema = object({
    params: object({
        id: string({
            required_error: "id is required",
        }),
    }),
});

export type MakeAdminInput = TypeOf<typeof makeAdminSchema>["params"];

export const makeGuideSchema = object({
    params: object({
        id: string({
            required_error: "id is required",
        }),
    }),
});

export type MakeGuideInput = TypeOf<typeof makeGuideSchema>["params"];

export const checkAdminSchema = object({
    params: object({
        email: string({
            required_error: "email is required",
            invalid_type_error: "email must be string",
        }).email({
            message: "valid email required",
        }),
    }),
});

export type CheckAdminInput = TypeOf<typeof checkAdminSchema>["params"];

export const checkGuideSchema = object({
    params: object({
        email: string({
            required_error: "email is required",
            invalid_type_error: "email must be string",
        }).email({
            message: "valid email required",
        }),
    }),
});

export type CheckGuideInput = TypeOf<typeof checkGuideSchema>["params"];
