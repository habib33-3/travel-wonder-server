import { Request, Response } from "express";
import { SaveUserInput } from "../schemas/user.schemas";
import UserModel from "../models/user.model";

export const saveUser = async (
    req: Request<object, object, SaveUserInput>,
    res: Response
) => {
    try {
        const { email, name } = req.body;

        const userInfo = {
            email,
            name: name || email.split("@")[0],
        };

        const user = await UserModel.create(userInfo);

        if (user) {
            res.status(201).json({
                success: true,
                message: "User has been created",
            });
        }
    } catch (error: any) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        } else {
            console.error("Error:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
};
