import { Request, Response } from "express";
import {
    MakeAdminInput,
    MakeGuideInput,
    SaveUserInput,
} from "../schemas/user.schemas";
import UserModel from "../models/user.model";
import { findUserById } from "../services/user.services";

export const saveUser = async (
    req: Request<object, object, SaveUserInput>,
    res: Response
) => {
    try {
        const { email, name } = req.body;

        const userInfo = {
            email,
            name: name ?? email.split("@")[0],
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
            console.error("error during save user : \n", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();

        if (!users) {
            res.status(404).json({
                success: false,
                message: "no user found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User loaded",
            users,
        });
    } catch (error) {
        console.error("error during get all users: \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const makeAdmin = async (
    req: Request<MakeAdminInput>,
    res: Response
) => {
    try {
        const { id } = req.params;

        const user = await findUserById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }

        user.role = "admin";

        await user.save();

        return res.status(200).json({
            success: true,
            message: "success",
        });
    } catch (error) {
        console.error("error during make admin: \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const makeGuide = async (
    req: Request<MakeGuideInput>,
    res: Response
) => {
    try {
        const { id } = req.params;

        const user = await findUserById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }

        user.role = "guide";

        await user.save();

        return res.status(200).json({
            success: true,
            message: "success",
        });
    } catch (error) {
        console.error("error during make guide: \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
