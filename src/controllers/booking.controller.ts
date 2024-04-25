import { Request, Response } from "express";
import {
    AddBookingInput,
    ChangeBookingStatusInput,
    DeleteBookingInput,
    GetGuideBookingInput,
    GetUserBookingInput,
} from "../schemas/booking.schema";
import BookingModel from "../models/booking.model";
import { findBookingById } from "../services/booking.services";

export const addBookingHandler = async (
    req: Request<object, object, AddBookingInput>,
    res: Response
) => {
    try {
        const booking = req.body;

        await BookingModel.create(booking);

        res.status(200).json({
            message: "successful",
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
};

export const getAllBookingHandler = async (req: Request, res: Response) => {
    try {
        const bookings = await BookingModel.find();

        res.status(200).json({
            message: "successful",
            bookings,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
};

export const getUserBookingHandler = async (
    req: Request<object, object, object, GetUserBookingInput>,
    res: Response
) => {
    try {
        const { email } = req.query;

        const bookings = await BookingModel.find({
            touristEmail: email,
        });

        res.status(200).json({
            message: "successful",
            bookings,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
};

export const getGuideBookingHandler = async (
    req: Request<object, object, object, GetGuideBookingInput>,
    res: Response
) => {
    try {
        const { email } = req.query;

        const bookings = await BookingModel.find({
            guideEmail: email,
        });

        res.status(200).json({
            message: "successful",
            bookings,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
};

export const changeBookingStatusHandler = async (
    req: Request<
        ChangeBookingStatusInput["params"],
        object,
        ChangeBookingStatusInput["body"]
    >,
    res: Response
) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const booking = await findBookingById(id);

        if (!booking) {
            return res.status(404).json({
                message: "not found",
            });
        }

        booking.status = status;

        await booking.save();

        res.status(200).json({
            message: "successful",
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
};

export const deleteBookingHandler = async (
    req: Request<DeleteBookingInput>,
    res: Response
) => {
    try {
        const { id } = req.params;

        await BookingModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "successful",
            success: true,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
        });
    }
};
