import { object, number, string, date, enum as zEnum, TypeOf } from "zod";

export const addBookingSchema = object({
    body: object({
        touristName: string({
            required_error: "Tourist name is required",
            invalid_type_error: "Tourist name must be a string",
        }),
        touristEmail: string({
            required_error: "Tourist email is required",
            invalid_type_error: "Tourist email must be a string",
        }).email({
            message: "Tourist email must be a valid email address",
        }),
        touristPic: string({
            required_error: "Tourist picture is required",
            invalid_type_error: "Tourist picture must be a string",
        }),
        price: number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
        tourName: string({
            required_error: "Tour name is required",
            invalid_type_error: "Tour name must be a string",
        }),
        tourDate: date({
            required_error: "Tour date is required",
            invalid_type_error: "Tour date must be a valid date",
        }),
        guideEmail: string({
            required_error: "Guide email is required",
            invalid_type_error: "Guide email must be a string",
        }).email({
            message: "Guide email must be a valid email address",
        }),
    }),
});

export type AddBookingInput = TypeOf<typeof addBookingSchema>["body"];

export const getGuideBookingSchema = object({
    query: object({
        email: string({
            required_error: " email is required",
            invalid_type_error: " email must be a string",
        }).email({
            message: " email must be a valid email address",
        }),
    }),
});

export type GetGuideBookingInput = TypeOf<
    typeof getGuideBookingSchema
>["query"];

export const getUserBookingSchema = object({
    query: object({
        email: string({
            required_error: " email is required",
            invalid_type_error: " email must be a string",
        }).email({
            message: " email must be a valid email address",
        }),
    }),
});

export type GetUserBookingInput = TypeOf<typeof getUserBookingSchema>["query"];

export const changeBookingStatusSchema = object({
    params: object({
        id: string({
            required_error: "ID is required",
            invalid_type_error: "ID must be a string",
        }),
    }),
    body: object({
        status: zEnum(["accepted", "rejected", "in review"], {
            invalid_type_error:
                "status must be accepted or rejected or in review",
            required_error: "status is required",
        }),
    }),
});

export type ChangeBookingStatusInput = TypeOf<typeof changeBookingStatusSchema>;

export const deleteBookingSchema = object({
    params: object({
        id: string({
            required_error: "ID is required",
            invalid_type_error: "ID must be a string",
        }),
    }),
});

export type DeleteBookingInput = TypeOf<typeof deleteBookingSchema>["params"];
