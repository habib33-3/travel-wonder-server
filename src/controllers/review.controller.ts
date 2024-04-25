import { Request, Response } from "express";
import { AddReviewInput, GetGuidesReviewInput } from "../schemas/review.schema";
import ReviewModel from "../models/review.model";

export const addReviewHandler = async (
    req: Request<object, object, AddReviewInput>,
    res: Response
) => {
    try {
        const review = req.body;

        await ReviewModel.create(review);

        return res.status(200).json({
            success: true,
            message: "created",
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send("something went wrong");
    }
};

export const getGuidesReviewHandler = async (
    req: Request<GetGuidesReviewInput>,
    res: Response
) => {
    try {
        const { email } = req.params;

        const reviews = await ReviewModel.find({ guideEmail: email });

        return res.status(200).json({
            success: true,
            message: "loaded",
            reviews,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send("something went wrong");
    }
};
