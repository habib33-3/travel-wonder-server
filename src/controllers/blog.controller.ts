import { Request, Response } from "express";
import { AddBlogInput } from "../schemas/blog.schema";
import BlogModel from "../models/blog.model";

export const addBlogHandler = async (
    req: Request<object, object, AddBlogInput>,
    res: Response
) => {
    try {
        const blog = req.body;

        await BlogModel.create(blog);

        res.status(200).json({
            message: "blog created",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "blog created error",
            success: false,
        });
    }
};

export const getAllBlogsHandler = async (req: Request, res: Response) => {
    try {
        const blogs = await BlogModel.find();

        res.status(200).json({
            message: "blog loaded",
            success: true,
            blogs,
        });
    } catch (error) {
        res.status(500).json({
            message: "blog loaded error",
            success: false,
        });
    }
};
