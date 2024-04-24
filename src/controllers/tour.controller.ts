import { Request, Response } from "express";
import { AddTourInput } from "../schemas/tour.schema";
import TourModel from "../models/tour.model";

export const addTourHandler = async (
    req: Request<object, object, AddTourInput>,
    res: Response
) => {
    try {
        const tour = req.body;

        await TourModel.create(tour);

        return res.status(200).json({
            success: true,
            message: "tour created",
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
            success: false,
        });
    }
};

export const getAllToursHandler = async (req: Request, res: Response) => {
    try {
        const tours = await TourModel.find();

        return res.status(200).json({
            success: true,
            message: "tour loaded",
            tours,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            message: "something went wrong",
            success: false,
        });
    }
};
