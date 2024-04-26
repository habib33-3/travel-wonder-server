import { object, string, date, TypeOf } from "zod";

export const addBlogSchema = object({
    body: object({
        storyTitle: string({
            required_error: "Story title is required",
            invalid_type_error: "Story title must be a string",
        }),
        storyText: string({
            required_error: "Story text is required",
            invalid_type_error: "Story text must be a string",
        }),
        writerName: string({
            required_error: "Writer name is required",
            invalid_type_error: "Writer name must be a string",
        }),
        writerImg: string({
            required_error: "Writer image is required",
            invalid_type_error: "Writer image must be a string",
        }),
        writerEmail: string({
            required_error: "Writer email is required",
            invalid_type_error: "Writer email must be a string",
        }).email({
            message: "Writer email must be a valid email address",
        }),
        publishDate: date({
            required_error: "Publish date is required",
            invalid_type_error: "Publish date must be a valid date",
        }),
    }),
});

export type AddBlogInput = TypeOf<typeof addBlogSchema>["body"];
