import { object, string, number, array, TypeOf } from "zod";

export const addTourSchema = object({
    body: object({
        name: string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        thumbnail: string({
            required_error: "Thumbnail is required",
            invalid_type_error: "Thumbnail must be a string",
        }),
        category: string({
            required_error: "Category is required",
            invalid_type_error: "Category must be a string",
        }),
        categoryId: string({
            required_error: "Category ID is required",
            invalid_type_error: "Category ID must be a string",
        }),
        description: string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        images: array(
            string({
                required_error: "Images are required",
                invalid_type_error: "Images must be an array of strings",
            })
        ),
        activities: array(
            string({
                required_error: "Activities are required",
                invalid_type_error: "Activities must be an array of strings",
            })
        ),
        price: number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
    }),
});

export type AddTourInput = TypeOf<typeof addTourSchema>["body"];
