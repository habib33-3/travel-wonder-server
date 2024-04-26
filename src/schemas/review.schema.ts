import { object, number, string, TypeOf } from "zod";

export const addReviewSchema = object({
    body: object({
        rating: number({
            required_error: "Rating is required",
            invalid_type_error: "Rating must be a number",
        }),
        reviewText: string({
            required_error: "Review text is required",
            invalid_type_error: "Review text must be a string",
        }),
        guideEmail: string({
            required_error: "Guide email is required",
            invalid_type_error: "Guide email must be a string",
        }).email({
            message: "Guide email must be a valid email address",
        }),
        userEmail: string({
            required_error: "User email is required",
            invalid_type_error: "User email must be a string",
        }).email({
            message: "User email must be a valid email address",
        }),
        userName: string({
            required_error: "User name is required",
            invalid_type_error: "User name must be a string",
        }),
        userPic: string({
            required_error: "User picture is required",
            invalid_type_error: "User picture must be a string",
        }),
    }),
});

export type AddReviewInput = TypeOf<typeof addReviewSchema>["body"];

export const getGuidesReviewSchema = object({
    params: object({
        email: string({
            required_error: "User email is required",
            invalid_type_error: "User email must be a string",
        }).email({
            message: "User email must be a valid email address",
        }),
    }),
});

export type GetGuidesReviewInput = TypeOf<typeof getGuidesReviewSchema>["params"];
