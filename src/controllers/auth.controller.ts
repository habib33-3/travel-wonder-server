import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CreateTokenInput } from "../schemas/auth.schema";
import { accessToken } from "../env";

export const createToken = async (
    req: Request<CreateTokenInput>,
    res: Response
) => {
    try {
        const { email, role } = req.body;

        if (!accessToken) {
            throw new Error("Access token is not defined.");
        }

        const token = jwt.sign({ email, role }, accessToken, {
            expiresIn: "3h",
        });

        res.status(200)
            .json({
                success: true,
                token: token,
            })
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production" ? "none" : "strict",
            });
    } catch (error) {
        console.log("error during token create", error);
        res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
};

export const clearToken = async (req: Request, res: Response) => {
    try {
        res.status(200)
            .clearCookie("token", {
                maxAge: 0,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production" ? "none" : "strict",
            })
            .send({ message: "cookie cleared", success: true });
    } catch (error) {
        console.log("error during clear token", error);
        res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
};
