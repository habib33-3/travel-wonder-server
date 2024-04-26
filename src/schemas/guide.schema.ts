import { object, string, array, TypeOf } from "zod";

export const createGuideSchema = object({
    body: object({
        name: string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        email: string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }),
        pic: string({
            required_error: "Pic is required",
            invalid_type_error: "Pic must be a string",
        }),
        skills: array(
            string({
                required_error: "Skills are required",
                invalid_type_error: "Skills must be an array of strings",
            })
        ),
        language: array(
            string({
                required_error: "Language is required",
                invalid_type_error: "Language must be an array of strings",
            })
        ),
        phone: string({
            required_error: "Phone is required",
            invalid_type_error: "Phone must be a string",
        }),
        education: string({
            required_error: "Education is required",
            invalid_type_error: "Education must be a string",
        }),
        experience: string({
            required_error: "Experience is required",
            invalid_type_error: "Experience must be a string",
        }),
    }),
});

export type CreateGuideInput = TypeOf<typeof createGuideSchema>["body"];
