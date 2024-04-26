import { NextFunction, Response } from "express";
import { ExtendedRequest } from "./verifyToken";

const verifyGuide = (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    const role = req.user?.role;

    if (role !== "guide") {
        return res.status(403).json({ message: "Forbidden" });
    }

    next();
};

export default verifyGuide;
