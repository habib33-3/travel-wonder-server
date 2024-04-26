import GuideModel from "../models/guide.model";
import { CreateGuideInput } from "./../schemas/guide.schema";
import { Request, Response } from "express";

export const createGuideHandler = async (
    req: Request<object, object, CreateGuideInput>,
    res: Response
) => {
    try {
        const guide = req.body;

        await GuideModel.create(guide);

        res.status(200).json({
            message: "guide created",
            success: true,
        });
    } catch (error: any) {
        console.log(error.message);
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        } else {
            console.error("error during save user : \n", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
};

export const getAllGuidesHandler = async (req: Request, res: Response) => {
    try {
        const guides = await GuideModel.find();

        res.status(200).json({
            success: true,
            message: "guide loaded",
            guides,
        });
    } catch (error) {
        console.error("error during save user : \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
