import { Request, Response } from "express";
import {
    AddWishlistInput,
    GetUsersWishlistInput,
} from "../schemas/wishlist.schema";
import WishlistModel from "../models/wishlist.model";
import { DeleteBookingInput } from "../schemas/booking.schema";

export const addWishlistHandler = async (
    req: Request<object, object, AddWishlistInput>,
    res: Response
) => {
    try {
        const wishlist = req.body;

        await WishlistModel.create(wishlist);

        res.status(200).json({
            message: "created",
        });
    } catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};

export const getUsersWishlistHandler = async (
    req: Request<object, object, object, GetUsersWishlistInput>,
    res: Response
) => {
    try {
        const { email } = req.query;

        const wishlist = await WishlistModel.find({ email });

        res.status(200).json({
            message: "successful",
            wishlist,
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};

export const deleteWishlistHandler = async (
    req: Request<DeleteBookingInput>,
    res: Response
) => {
    try {
        const { id } = req.params;

        await WishlistModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "successful",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};
