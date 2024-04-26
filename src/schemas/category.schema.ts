import { number, object, string, TypeOf } from "zod";

export const addCategorySchema = object({
    body: object({
        name: string({
            required_error: "name is required",
            invalid_type_error: "name must be string",
        }),
        categoryId: number({
            required_error: "categoryId is required",
            invalid_type_error: "categoryId must be number",
        }),
        img: string({
            required_error: "img is required",
            invalid_type_error: "img must be string",
        }),
        tagline: string({
            required_error: "tagline is required",
            invalid_type_error: "tagline must be string",
        }),
    }),
});

export type AddCategoryInput = TypeOf<typeof addCategorySchema>["body"];
