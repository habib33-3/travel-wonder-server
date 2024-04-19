import { object, string, TypeOf } from "Zod";

export const saveUserSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }).email({ message: "valid email is required" }),

        name: string({}).min(3).max(20),
        img: string(),
        role: string({}),
    }),
});

export type SaveUserInput = TypeOf<typeof saveUserSchema>["body"];
