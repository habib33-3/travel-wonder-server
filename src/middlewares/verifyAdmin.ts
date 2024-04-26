import { NextFunction, Response } from "express";
import { ExtendedRequest } from "./verifyToken";

const verifyAdmin = (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    const role = req.user?.role;

    if (role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
    }

    next();
};

export default verifyAdmin;
