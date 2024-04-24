import { Request, Response } from "express";
import { AddCategoryInput } from "../schemas/category.schema";
import CategoryModel from "../models/category.model";

export const addCategoryHandler = async (
    req: Request<object, object, AddCategoryInput>,
    res: Response
) => {
    try {
        const category = req.body;

        await CategoryModel.create(category);

        return res.status(200).json({
            success: true,
            message: "category created",
        });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
