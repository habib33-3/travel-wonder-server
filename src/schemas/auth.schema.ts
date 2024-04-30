
import { object, string,TypeOf } from "zod";

export const createTokenSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }),
        role: string({
            required_error: "role is required",
        }),
    }),
});

export type CreateTokenInput = TypeOf<typeof createTokenSchema>["body"];
