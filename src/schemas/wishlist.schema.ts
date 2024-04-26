import { object, number, string, TypeOf } from "zod";

export const addWishlistSchema = object({
    body: object({
        name: string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        thumbnail: string({
            required_error: "Thumbnail is required",
            invalid_type_error: "Thumbnail must be a string",
        }),
        price: number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
        email: string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }).email({
            message: "Email must be a valid email address",
        }),
    }),
});

export type AddWishlistInput = TypeOf<typeof addWishlistSchema>["body"];

export const getUsersWishlistSchema = object({
    query: object({
        email: string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }).email({
            message: "Email must be a valid email address",
        }),
    }),
});

export type GetUsersWishlistInput = TypeOf<
    typeof getUsersWishlistSchema
>["query"];

export const deleteWishlistSchema = object({
    params: object({
        id: string({
            required_error: "Id is required",
            invalid_type_error: "Id must be a string",
        }),
    }),
});

export type DeleteWishlistInput = TypeOf<typeof deleteWishlistSchema>["params"];
